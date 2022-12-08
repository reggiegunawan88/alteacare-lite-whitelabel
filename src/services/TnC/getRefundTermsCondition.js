import fetcher from '@/helpers/fetcher';

const BASE_API = process.env.NEXT_PUBLIC_BASE_URL_CMS_SERVICE;

// get refund terms and condition wording message
const getRefundTermsCondition = async () => {
  const fetchConfig = {
    url: `${BASE_API}/blocks/TERM_REFUND_CANCEL`,
    method: 'GET',
    isPublic: true
  };

  const response = await fetcher(fetchConfig);
  return response;
};

export default getRefundTermsCondition;
