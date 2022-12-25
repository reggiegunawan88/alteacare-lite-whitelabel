import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import useShallowEqualSelector from '@/helpers/useShallowEqualSelector';
import useIntersectionObserver from '@/hooks/components/Reusable/DocumentUploader/IntersectionObserver/useIntersectionObserver';
import getOngoingAppointment from '@/services/Appointment/Ongoing/getOngoingAppointment';
import { addOngoingData, setOngoingData } from '@/store/slices/Appointment/List';

const useTeleconsultationOngoing = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { ongoingList } = useShallowEqualSelector({ name: 'appointmentList', states: ['ongoingList'] });
  const { elementRef, isLastIdx } = useIntersectionObserver();
  const [loading, setLoading] = useState(true);

  // ongoing appointment API param
  const [param, setParam] = useState({
    keyword: '',
    consultation_method: 'VIDEO_CALL',
    patient_id: '',
    page: 1,
    sort_by: 'createdAt',
    sort_type: 'DESC'
  });

  /* detect scroll on last idx of page card for using react ref */
  const progressiveFetchData = () => {
    if (ongoingList.meta.total > ongoingList.meta.page * ongoingList.meta.per_page) {
      setParam({ ...param, page: param.page + 1 });
      getOngoingAppointment({ param: { ...param, page: param.page + 1 } }).then(resp => {
        dispatch(addOngoingData(resp)); // append data into redux store
      });
    }
  };

  const getInitialData = async () => {
    setLoading(true);
    getOngoingAppointment({ param })
      .then(resp => {
        dispatch(setOngoingData(resp));
      })
      .catch(error => {
        dispatch(setOngoingData(error));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (isLastIdx) {
      progressiveFetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLastIdx]);

  useEffect(() => {
    if (router.isReady) {
      getInitialData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  return {
    loading,
    ongoingList,
    elementRef,
    progressiveFetchData
  };
};

export default useTeleconsultationOngoing;
