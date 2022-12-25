import fetcher from '@/helpers/fetcher';

const BASE_API = process.env.NEXT_PUBLIC_BASE_URL_APPOINTMENT_SERVICE;

const payTeleconsultation = async bodyData => {
  const fetchConfig = {
    url: `${BASE_API}/pay`,
    method: 'POST',
    isPublic: false,
    body: bodyData
  };
  const response = await fetcher(fetchConfig);
  return response.data;
};

export default payTeleconsultation;
