import fetcher from '@/helpers/fetcher';

const BASE_API = process.env.NEXT_PUBLIC_BASE_URL_CMS_SERVICE;

const getAvailableDay = async (queryParams, userToken) => {
  const keyword = queryParams?.keyword ? `&keyword=${encodeURIComponent(queryParams?.keyword)}` : '';
  const specializations = queryParams?.['specializations[]']
    ? `&specializations[]=${queryParams?.['specializations[]']}`
    : '';
  const fetchConfig = {
    userToken,
    url: `${BASE_API}/v2/doctors/available-day?${keyword}${specializations}`,
    method: 'GET',
    isPublic: !userToken
  };
  const response = await fetcher(fetchConfig);
  return response?.data;
};

export default getAvailableDay;
