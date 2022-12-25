import fetcher from '@/helpers/fetcher';

const BASE_API = process.env.NEXT_PUBLIC_BASE_URL_CMS_SERVICE;

// get alteacare terms and condition wording message
const getTermsCondition = async () => {
  const fetchConfig = {
    url: `${BASE_API}/blocks/TERMS_CONDITION`,
    method: 'GET',
    isPublic: true
  };

  const response = await fetcher(fetchConfig);
  return response;
};

export default getTermsCondition;
