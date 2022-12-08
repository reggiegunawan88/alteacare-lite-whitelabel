import fetcher from '@/helpers/fetcher';

const BASE_API = process.env.NEXT_PUBLIC_BASE_URL_CMS_SERVICE;

// get refund terms and condition wording message
const getPaymentList = async id => {
  const fetchConfig = {
    url: `${BASE_API}/payment-types?transaction_id=${id}&type_of_service=TELEKONSULTASI`,
    method: 'GET',
    isPublic: true
  };

  const response = await fetcher(fetchConfig);
  return response.data;
};

export default getPaymentList;
