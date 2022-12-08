import fetcher from '@/helpers/fetcher';

const BASE_API = process.env.NEXT_PUBLIC_BASE_URL_CMS_SERVICE;

const getTimeSlot = async queryParams => {
  const { docId, selectedDate } = queryParams;
  const fetchConfig = {
    url: `${BASE_API}/doctor-schedules?doctor_id=${docId}&date=${selectedDate}`,
    method: 'GET',
    isPublic: true
  };
  const response = await fetcher(fetchConfig);
  return response?.data;
};

export default getTimeSlot;
