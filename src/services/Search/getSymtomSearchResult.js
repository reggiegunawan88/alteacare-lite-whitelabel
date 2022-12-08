import fetcher from '@/helpers/fetcher';

const BASE_API = process.env.NEXT_PUBLIC_BASE_URL_CMS_SERVICE;

const getSymptomSearchResult = async ({ keyword }) => {
  const fetchConfig = {
    url: `${BASE_API}/symtoms?_q=${keyword}`,
    method: 'GET',
    isPublic: true
  };
  const response = await fetcher(fetchConfig);
  return response;
};

export default getSymptomSearchResult;
