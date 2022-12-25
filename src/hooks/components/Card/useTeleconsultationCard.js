import getCookie from '@/helpers/cookie/getCookie';

const useTeleconsultationCard = ({ status, appointmentId, transactionData }) => {
  const userToken = getCookie()?.alt_user_token;

  const payment_url = transactionData?.payment_url?.replace(
    '&token={{REPLACE_THIS_TO_BEARER_USER}}',
    `&token=${userToken}`
  );

  // redirect user after click teleconsultation card
  const redirectHrefCard = () => {
    switch (status) {
      case 'PAID':
        return `/teleconsultation/detail/${appointmentId}?status=PAID&tab=patient-data`;
      case 'MEET_SPECIALIST':
      case 'ON_GOING':
        return `/teleconsultation/detail/${appointmentId}?status=MEET&tab=patient-data`;
      case 'WAITING_FOR_PAYMENT':
        if (!transactionData) {
          return `/transaction/payment?step=3&id=${appointmentId}`; // free
        }
        if (transactionData?.type === 'MIDTRANS_SNAP' || !payment_url) {
          return `/payment/list?id=${appointmentId}`; // midtrans payment gateway
        }
        return `/payment/account?pay=${payment_url}`; // VA payment gateway
      case 'COMPLETED':
      case 'WAITING_FOR_MEDICAL_RESUME':
        return `/teleconsultation/detail/${appointmentId}?status=DONE&tab=patient-data`;
      case 'CANCELED_BY_SYSTEM':
      case 'CANCELED_BY_GP':
        return `/teleconsultation/detail/canceled/${appointmentId}`;
      default:
        return null;
    }
  };
  return {
    redirectHrefCard
  };
};

export default useTeleconsultationCard;
