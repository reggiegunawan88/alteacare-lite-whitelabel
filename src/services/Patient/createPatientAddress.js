import fetcher from '@/helpers/fetcher';

const BASE_API = process.env.NEXT_PUBLIC_BASE_URL_USER_SERVICE;

const createPatientAddress = async ({ addressForm }) => {
  const fetchConfig = {
    url: `${BASE_API}/address`,
    method: 'POST',
    isPublic: false,
    body: addressForm
  };
  const response = await fetcher(fetchConfig);
  return response;
};

export default createPatientAddress;
