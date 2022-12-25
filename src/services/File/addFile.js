import fetcher from '@/helpers/fetcher';

const BASE_API = process.env.NEXT_PUBLIC_BASE_URL_APPOINTMENT_SERVICE;

const addFile = async ({ fileData }) => {
  const fetchConfig = {
    url: `${BASE_API}/v1/document/add`,
    method: 'POST',
    isPublic: false,
    body: fileData
  };
  const response = await fetcher(fetchConfig);
  return response;
};

export default addFile;
