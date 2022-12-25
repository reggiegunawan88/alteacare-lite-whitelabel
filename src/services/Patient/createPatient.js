import fetcher from '@/helpers/fetcher';

const BASE_API = process.env.NEXT_PUBLIC_BASE_URL_USER_SERVICE;

const createPatient = async ({ payload }) => {
  const fetchConfig = {
    url: `${BASE_API}/patient`,
    method: 'POST',
    isPublic: false,
    body: payload
  };
  const response = await fetcher(fetchConfig);
  return response;
};

export default createPatient;
