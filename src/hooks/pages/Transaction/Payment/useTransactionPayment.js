import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';

import getAppointmentDetail from '@/services/Appointment/Detail/getAppointmentDetail';
import payTeleconsultation from '@/services/Payment/payTeleconsultation';

const useTransactionPayment = () => {
  const router = useRouter();
  const userToken = parseCookies()?.alt_user_token;
  const { id } = router.query;
  const [loadingPage, setLoadingPage] = useState(false);
  const [loadingBtn, setLoadingBtn] = useState(false);

  // page info state
  const [data, setData] = useState(null);

  const proceedPayment = () => {
    if (data?.final_price?.raw === 0 || data?.total_price === 0) {
      setLoadingBtn(true);
      const bodyData = {
        appointment_id: id,
        method: 'altea_free_consultation',
        voucher_code: ''
      };
      payTeleconsultation(bodyData).then(resp => {
        const payment_url = resp?.payment_url.replace('&token={{REPLACE_THIS_TO_BEARER_USER}}', `&token=${userToken}`);
        router.replace(`/payment/account?pay=${payment_url}`);
        setLoadingBtn(false);
      });
    } else {
      router.push(`/payment/list?id=${id}`);
    }
  };

  useEffect(() => {
    setLoadingPage(true);
    if (router.isReady) {
      getAppointmentDetail(id).then(resp => {
        setData(resp?.data);
        setLoadingPage(false);
      });
    }
  }, [router.isReady]);

  return {
    data,
    loadingPage,
    loadingBtn,
    proceedPayment
  };
};

export default useTransactionPayment;
