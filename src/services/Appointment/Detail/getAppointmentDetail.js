import fetcher from '@/helpers/fetcher';

const BASE_API = process.env.NEXT_PUBLIC_BASE_URL_APPOINTMENT_SERVICE;

const getAppointmentDetail = async id => {
  const fetchConfig = {
    url: `${BASE_API}/detail/${id}`,
    method: 'GET',
    isPublic: false
  };

  const response = await fetcher(fetchConfig);
  return response;
};

export default getAppointmentDetail;
