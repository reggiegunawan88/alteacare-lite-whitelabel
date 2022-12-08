import fetcher from '@/helpers/fetcher';

const BASE_API = process.env.NEXT_PUBLIC_BASE_URL_APPOINTMENT_SERVICE;

const createAppointment = async formData => {
  const fetchConfig = {
    url: `${BASE_API}/v3/consultation`,
    method: 'POST',
    isPublic: false,
    body: formData
  };
  const response = await fetcher(fetchConfig);
  return response?.data;
};

export default createAppointment;
