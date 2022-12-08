import fetcher from '@/helpers/fetcher';

const BASE_API = process.env.NEXT_PUBLIC_BASE_URL_CMS_SERVICE;
// only for development

const getDoctorList = async queryParams => {
  const fetchConfig = {
    url: `${BASE_API}/v2/doctors?${queryParams}`,
    method: 'GET',
    isPublic: true
  };
  const response = await fetcher(fetchConfig);
  return response?.data;
};

export default getDoctorList;
