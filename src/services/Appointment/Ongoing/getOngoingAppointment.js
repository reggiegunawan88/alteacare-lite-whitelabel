import fetcher from '@/helpers/fetcher';

const BASE_API = process.env.NEXT_PUBLIC_BASE_URL_APPOINTMENT_SERVICE;

const getOngoingAppointment = async ({ param }) => {
  const fetchConfig = {
    url: `${BASE_API}/on-going`,
    method: 'POST',
    isPublic: false,
    body: param
  };

  const response = await fetcher(fetchConfig);
  return response;
};

export default getOngoingAppointment;
