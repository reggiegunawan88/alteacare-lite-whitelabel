import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import parseRegionName from '@/helpers/parser/parseRegionName';
import createPatient from '@/services/Patient/createPatient';
import createPatientAddress from '@/services/Patient/createPatientAddress';
import getDefaultAddress from '@/services/Patient/getDefaultAddress';
import getFamilyRelations from '@/services/Patient/getFamilyRelations';
import getPatientList from '@/services/Patient/getPatientList';
import getCountryList from '@/services/Regions/getCountryList';
import getRegionData from '@/services/Regions/getRegionData';

const usePersonalDataForm = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [maxStep] = useState(2);
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  // region dropdown state
  const [subdistrictValue, setSubdistrictValue] = useState('');
  const [keyword, setKeyword] = useState('');
  const [regionList, setRegionList] = useState([]);

  // family relations list state
  const [familyMembers, setFamilyMembers] = useState([]);
  const [familyRelations, setFamilyRelations] = useState([]);

  // create patient form
  const [form, setForm] = useState({
    family_relation_type: '',
    first_name: '',
    last_name: '',
    gender: '',
    contact_email: '',
    contact_phone: '',
    birth_date: '',
    birth_place: '',
    birth_country: '',
    nationality: '',
    card_id: '',
    address_id: ''
  });

  // patient address form
  const [addressForm, setAddressForm] = useState({
    country: '',
    province: '',
    city: '',
    district: '',
    sub_district: '',
    street: '',
    rt_rw: ''
  });

  // error state
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const nextStep = async () => {
    if (step < maxStep) {
      // validate input field on step 1 form
      if (form.family_relation_type && form.first_name && form.last_name && form.contact_phone && form.contact_email) {
        setStep(step + 1);
      } else {
        // show error
        setIsError(true);
        setErrorMsg('Data is not complete');
      }
    } else {
      // validate input field on step 2 form
      if (
        form.gender &&
        form.birth_date &&
        form.birth_country &&
        form.birth_place &&
        form.nationality &&
        form.card_id &&
        addressForm.sub_district &&
        addressForm.street &&
        addressForm.rt_rw
      ) {
        setLoading(true);
        // submit data form to API
        await createPatientAddress({ addressForm }).then(resp => {
          // get address id from resp
          const addressId = resp?.data?.id;
          setForm({
            ...form,
            address_id: addressId
          });
        });
        return;
      }
      // show error
      setIsError(true);
      setErrorMsg('Data is not complete');
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      router.back();
    }
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleAddressInput = event => {
    const { name, value } = event.target;
    setAddressForm({ ...addressForm, [name]: value });
  };

  const setSubdistrictKeyword = param => {
    setKeyword(param);
    setSubdistrictValue(param);
  };

  // handle selected region data from dropdown
  const selectRegion = region => {
    setAddressForm({
      ...addressForm,
      country: region?.country?.id,
      city: region?.city?.id,
      province: region?.province?.id,
      district: region?.district?.id,
      sub_district: region?.sub_district_id
    });
    setRegionList([]);
    setKeyword('');

    // assign text value to input field
    setSubdistrictValue(parseRegionName(region));
  };

  const clearKeyword = () => {
    setSubdistrictKeyword('');
    setKeyword('');
  };

  const closeErrorBanner = () => {
    setIsError(false);
    setErrorMsg('');
  };

  // create patient data after address id is obtained
  const handleCreatePatient = async () => {
    try {
      await createPatient({ form }).then(() => {
        // route to doctor detail page with doctor id
        router.push({ pathname: '/doctor/details', query: { id: router.query.id } });
      });
    } catch (error) {
      setIsError(true);
      setErrorMsg(error.message);
      setLoading(false);
    }
  };

  const getInitialData = async () => {
    // check if user has any family members
    await getPatientList({ page: 1 }).then(resp => {
      const { patient } = resp?.data || [];
      setFamilyMembers(patient);
      if (patient.length > 0) {
        // get all fam relations data
        getFamilyRelations().then(res => setFamilyRelations(res.data));
      } else {
        // assign the first idx data only of fam relations
        getFamilyRelations().then(res => {
          setFamilyRelations([res.data[0]]);
          setForm({
            ...form,
            family_relation_type: res.data[0].id
          });
        });
      }
    });

    // set default address if available
    await getDefaultAddress().then(resp => {
      const { data } = resp;
      if (data) {
        // default address data available
        setAddressForm({
          ...addressForm,
          country: data?.country?.id || '',
          city: data?.city?.id || '',
          province: data?.province?.id || '',
          district: data?.district?.id || '',
          sub_district: data?.sub_district?.id || '',
          street: data?.street || '',
          rt_rw: data?.rt_rw || ''
        });
        setSubdistrictValue(parseRegionName(data));
      }
    });
    await getCountryList().then(resp => setCountries(resp.data));
  };

  useEffect(() => {
    getInitialData();
  }, []);

  useEffect(() => {
    if (keyword) {
      // timeout debounce search
      const timeout = setTimeout(() => {
        getRegionData({ keyword }).then(resp => {
          setRegionList(resp?.data);
        });
      }, 500);
      return () => clearTimeout(timeout);
    }
    // set data empty if keyword is empty
    return setRegionList([]);
  }, [keyword]);

  // create patient after address id is available
  useEffect(() => {
    if (form.address_id) {
      handleCreatePatient();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.address_id]);

  return {
    loading,
    step,
    form,
    addressForm,
    subdistrictValue,
    familyRelations,
    familyMembers,
    countries,
    regionList,
    isError,
    errorMsg,
    nextStep,
    prevStep,
    handleInputChange,
    handleAddressInput,
    setSubdistrictKeyword,
    selectRegion,
    clearKeyword,
    closeErrorBanner
  };
};

export default usePersonalDataForm;
