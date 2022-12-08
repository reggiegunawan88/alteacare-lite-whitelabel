import fetcher from '@/helpers/fetcher';

const BASE_API = process.env.NEXT_PUBLIC_BASE_URL_CMS_SERVICE;

const getSpecializationsList = async () => {
  const fetchConfig = {
    url: `${BASE_API}/specializations`,
    method: 'GET',
    isPublic: true
  };
  const response = await fetcher(fetchConfig);
  return response?.data;
};

export default getSpecializationsList;
