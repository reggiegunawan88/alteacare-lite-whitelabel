import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import getCookie from '@/helpers/cookie/getCookie';
import useShallowEqualSelector from '@/helpers/useShallowEqualSelector';
import getAppointmentDetail from '@/services/Appointment/Detail/getAppointmentDetail';
import getRoomDetailData from '@/services/Appointment/Detail/getRoomDetail';
import { setAppointmentDetail } from '@/store/slices/Appointment/Detail';

const useTeleconsultationDetail = id => {
  const dispatch = useDispatch();
  const router = useRouter();
  const token = getCookie()?.alt_user_token;
  const { data } = useShallowEqualSelector({ name: 'appointmentData', states: ['data'] });
  const [loading, setLoading] = useState(true);
  const [loadingBtn, setLoadingBtn] = useState(false);

  const getDetailData = async () => {
    await getAppointmentDetail(id).then(resp => {
      dispatch(setAppointmentDetail(resp.data));
    });
    setLoading(false);
  };

  const getRoomDetail = async () => {
    const roomID = data.results.id;
    setLoadingBtn(true);
    await getRoomDetailData({ token, roomID }).then(resp => {
      if (resp) {
        router.push(`/teleconsultation/meet?room=${resp.video_call_provider_data.jitsi.url}`);
      }
      setLoadingBtn(false);
    });
  };

  const remakeTeleconsultation = async () => {
    const doctorId = data?.results?.doctor?.id;
    setLoadingBtn(true);
    await router.push({ pathname: '/doctor/details', query: { id: doctorId } });
    setLoadingBtn(false);
  };

  useEffect(() => {
    if (router.isReady) {
      getDetailData();
    }
  }, [router.isReady]);

  return {
    data,
    loading,
    loadingBtn,
    getRoomDetail,
    remakeTeleconsultation
  };
};

export default useTeleconsultationDetail;
