import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import useShallowEqualSelector from '@/helpers/useShallowEqualSelector';
import useIntersectionObserver from '@/hooks/components/Reusable/DocumentUploader/IntersectionObserver/useIntersectionObserver';
import getHistoryAppointment from '@/services/Appointment/History/getHistoryAppointment';
import { addHistoryData, setHistoryData } from '@/store/slices/Appointment/List';

const useTeleconsultationHistory = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { historyList } = useShallowEqualSelector({ name: 'appointmentList', states: ['historyList'] });
  const { elementRef, isLastIdx } = useIntersectionObserver();

  // history appointment API param
  const [param, setParam] = useState({
    keyword: '',
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
    if (historyList.meta.total > historyList.meta.page * historyList.meta.per_page) {
      setParam({ ...param, page: param.page + 1 });
      getHistoryAppointment({ param: { ...param, page: param.page + 1 } }).then(resp => {
        dispatch(addHistoryData(resp)); // append data into redux store
      });
    }
  };

  // get data based on query param sort type value
  const conditionalDataFetch = async routerParam => {
    // contains no query params
    if (Object.keys(routerParam.query).length === 0) {
      try {
        await getHistoryAppointment({ param }).then(resp => {
          dispatch(setHistoryData(resp));
        });
      } catch (error) {
        dispatch(setHistoryData(error));
      }
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
      try {
        await getHistoryAppointment({ param: queries }).then(resp => {
          dispatch(setHistoryData(resp));
        });
      } catch (error) {
        dispatch(setHistoryData(error));
      }
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
    historyList,
    elementRef,
    setKeyword
  };
};

export default useTeleconsultationHistory;
