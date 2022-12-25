import fetcher from '@/helpers/fetcher';

const BASE_API = process.env.NEXT_PUBLIC_BASE_URL_CMS_SERVICE;

const getDoctorDetail = async id => {
  const fetchConfig = {
    url: `${BASE_API}/v2/doctors/${id}`,
    method: 'GET',
    isPublic: true
  };
  const response = await fetcher(fetchConfig);
  return response?.data;
};

export default getDoctorDetail;
