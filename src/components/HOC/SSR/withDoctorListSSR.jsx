import paramGenerator from '@/helpers/paramGenerate';
import parseCookie from '@/helpers/parser/cookieParser';
import getAvailableDay from '@/services/Doctor/getAvailableDay';
import getDoctorList from '@/services/Doctor/getDoctorList';
import getSpecializationsList from '@/services/Doctor/getSpecializations';
import getHospitalList from '@/services/Hospital/getHospitalList';
import { wrapper } from '@/store';
import { setDoctorData } from '@/store/slices/Doctor/List';
import { initiateHospitalList, initiateSpecializationsList } from '@/store/slices/FilterList';

const withDoctorListSSR = gssp => {
  return wrapper.getServerSideProps(store => async ctx => {
    // define cookie to get user token value
    const cookie = ctx?.req?.headers?.cookie;
    const userToken = cookie ? parseCookie(cookie)?.alt_user_token : null;
    const queryParams = paramGenerator(ctx?.query);

    // get API by existing user token (if available) to get different data result based on token
    const doctorList = await getDoctorList(queryParams, userToken);
    const listDay = await getAvailableDay(ctx?.query, userToken);
    const specializationsList = await getSpecializationsList(userToken);
    const hospitalList = await getHospitalList(userToken);
    // set data to redux
    if (doctorList?.length > 0) {
      store.dispatch(setDoctorData(doctorList));
    }
    store.dispatch(initiateSpecializationsList(specializationsList));
    store.dispatch(initiateHospitalList(hospitalList));

    const gsspData = await gssp(ctx); // Run `getServerSideProps` to get page-specific data

    return {
      props: {
        ...gsspData.props,
        listDay
      }
    };
  });
};

export default withDoctorListSSR;
