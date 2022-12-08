import fetcher from '@/helpers/fetcher';

const BASE_API = process.env.NEXT_PUBLIC_BASE_URL_USER_SERVICE;

const getPatientList = async ({ page }) => {
  const fetchConfig = {
    url: `${BASE_API}/patient?page=${page}`,
    method: 'GET',
    isPublic: false
  };
  const response = await fetcher(fetchConfig);
  return response;
};

export default getPatientList;
