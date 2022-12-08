import fetcher from '@/helpers/fetcher';

const BASE_API = process.env.NEXT_PUBLIC_BASE_URL_CMS_SERVICE;

const getSpecialistSearchResult = async ({ keyword }) => {
  const fetchConfig = {
    url: `${BASE_API}/specializations?_q=${keyword}`,
    method: 'GET',
    isPublic: true
  };
  const response = await fetcher(fetchConfig);
  return response;
};

export default getSpecialistSearchResult;
