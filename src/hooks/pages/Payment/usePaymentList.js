import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import getCookie from '@/helpers/cookie/getCookie';
import getPaymentList from '@/services/Payment/getPaymentList';
import payTeleconsultation from '@/services/Payment/payTeleconsultation';

const usePaymentList = () => {
  const router = useRouter();
  const userToken = getCookie()?.alt_user_token;
  const [isLoading, setIsLoading] = useState(true);
  const [paymentList, setPaymentList] = useState([]);
  const { id } = router.query;

  const getPaymentListData = async () => {
    const listData = await getPaymentList(id);
    setPaymentList(listData);
    setIsLoading(false);
  };

  const choosePaymentMethod = async code => {
    setIsLoading(true);
    const bodyData = {
      appointment_id: id,
      method: code,
      voucher_code: ''
    };
    payTeleconsultation(bodyData).then(res => {
      if (res) {
        const { payment_url } = res;
        if (payment_url) {
          // alteacare payment gateway
          const payUrl = payment_url?.replace('&token={{REPLACE_THIS_TO_BEARER_USER}}', `&token=${userToken}`);
          router.push(`/payment/account?pay=${payUrl}`);
        } else {
          setIsLoading(false);
          // midtrans payment gateway
          // eslint-disable-next-line no-undef
          snap.pay(res?.token, {
            onSuccess() {
              router.replace('/teleconsultation/ongoing');
            },
            onPending() {
              router.replace('/teleconsultation/ongoing');
            }
          });
        }
      } else {
        router.push('/');
      }
    });
  };

  useEffect(() => {
    if (router.isReady) {
      if (id === undefined || !id) {
        router.push('/');
      }
      getPaymentListData();
    }
  }, [router.isReady]);

  // append Midtrans script on page load
  useEffect(() => {
    const script = document.createElement('script');
    script.src = process.env.NEXT_PUBLIC_MIDTRANS_SNAP_URL;
    script.async = true;
    script.type = 'text/javascript';
    script.setAttribute('data-client-key', `"${process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}"`);
    // append to body
    document.body.appendChild(script);

    // returned function will be called on component unmount
    return () => {
      // remove Midtrans script when unmount component
      document.body.removeChild(script);
    };
  }, []);

  return {
    paymentList,
    isLoading,
    choosePaymentMethod
  };
};

export default usePaymentList;
