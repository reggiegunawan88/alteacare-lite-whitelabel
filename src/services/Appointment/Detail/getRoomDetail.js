import fetcher from '@/helpers/fetcher';

const BASE_API = process.env.NEXT_PUBLIC_BASE_URL_APPOINTMENT_SERVICE;

const getRoomDetailData = async ({ roomID }) => {
  const fetchConfig = {
    url: `${BASE_API}/v2/room/${roomID}?&enableSocket=true`,
    method: 'GET',
    isPublic: false
  };

  const response = await fetcher(fetchConfig);
  return response.data;
};

export default getRoomDetailData;
