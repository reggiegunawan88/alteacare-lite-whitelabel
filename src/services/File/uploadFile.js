// exception: using Axios for upload file (support upload progression)
import fetcher from '@/helpers/fetcher';

const BASE_API = process.env.NEXT_PUBLIC_BASE_URL_FILE_SERVICE;

const uploadFile = async ({ formData }) => {
  const fetchConfig = {
    url: `${BASE_API}/v1/file/upload`,
    method: 'POST',
    isPublic: false,
    body: formData,
    type: 'file'
  };
  const response = await fetcher(fetchConfig);
  return response;
};

export default uploadFile;
