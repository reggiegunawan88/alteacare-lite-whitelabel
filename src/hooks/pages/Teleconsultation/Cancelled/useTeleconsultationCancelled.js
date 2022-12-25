import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import useShallowEqualSelector from '@/helpers/useShallowEqualSelector';
import useIntersectionObserver from '@/hooks/components/Reusable/DocumentUploader/IntersectionObserver/useIntersectionObserver';
import getCancelledAppointment from '@/services/Appointment/Cancelled/getCancelledAppointment';
import { addCancelledData, setCancelledData } from '@/store/slices/Appointment/List';

const useTeleconsultationCancelled = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { cancelledList } = useShallowEqualSelector({ name: 'appointmentList', states: ['cancelledList'] });
  const { elementRef, isLastIdx } = useIntersectionObserver();
  const [loading, setLoading] = useState(true);

  // canceled appointment API param
  const [param, setParam] = useState({
    keyword: '',
    status: ['CANCELED_BY_GP', 'CANCELED_BY_SYSTEM'],
    consultation_method: 'VIDEO_CALL',
    patient_id: '',
    page: 1,
    sort_by: 'createdAt',
    sort_type: 'DESC'
  });

  const setKeyword = value => {
    setParam({
      ...param,
      keyword: value
    });
  };

  /* detect scroll on last idx of page card for using react ref */
  const progressiveFetchData = () => {
    if (cancelledList.meta.total > cancelledList.meta.page * cancelledList.meta.per_page) {
      setParam({ ...param, page: param.page + 1 });
      getCancelledAppointment({ param: { ...param, page: param.page + 1 } }).then(resp => {
        dispatch(addCancelledData(resp)); // append data into redux store
      });
    }
  };

  // get data based on query param sort type value
  const conditionalDataFetch = async routerParam => {
    // contains no query params
    if (Object.keys(routerParam.query).length === 0) {
      getCancelledAppointment({ param })
        .then(resp => {
          dispatch(setCancelledData(resp));
        })
        .catch(error => {
          dispatch(setCancelledData(error));
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      // contains single or multiple query param filter value
      let queries = param;
      Object.keys(router.query).map(key => {
        queries = {
          ...queries,
          [key]: router.query[key]
        };
        return true;
      });
      getCancelledAppointment({ param: queries })
        .then(resp => {
          dispatch(setCancelledData(resp));
        })
        .catch(error => {
          dispatch(setCancelledData(error));
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    if (router.isReady) {
      const timeout = setTimeout(() => {
        conditionalDataFetch(router);
      }, 500);
      return () => clearTimeout(timeout);
    }
    return true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady, router.query, param.keyword]);

  useEffect(() => {
    if (isLastIdx) {
      progressiveFetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLastIdx]);

  return {
    loading,
    cancelledList,
    elementRef,
    setKeyword
  };
};

export default useTeleconsultationCancelled;
