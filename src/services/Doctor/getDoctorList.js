import fetcher from '@/helpers/fetcher';

const BASE_API = process.env.NEXT_PUBLIC_BASE_URL_CMS_SERVICE;
// only for development

const getDoctorList = async (queryParams, userToken) => {
  const fetchConfig = {
    userToken,
    url: `${BASE_API}/v2/doctors?${queryParams}`,
    method: 'GET',
    isPublic: !userToken
  };
  const response = await fetcher(fetchConfig);
  return response?.data;
};

export default getDoctorList;
