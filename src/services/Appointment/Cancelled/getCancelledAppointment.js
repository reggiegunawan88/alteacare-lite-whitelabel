import fetcher from '@/helpers/fetcher';

const BASE_API = process.env.NEXT_PUBLIC_BASE_URL_APPOINTMENT_SERVICE;

const getCancelledAppointment = async ({ param }) => {
  const fetchConfig = {
    url: `${BASE_API}/cancel`,
    method: 'POST',
    isPublic: false,
    body: param
  };

  const response = await fetcher(fetchConfig);
  return response;
};

export default getCancelledAppointment;
