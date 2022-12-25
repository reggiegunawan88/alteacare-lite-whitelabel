import fetcher from '@/helpers/fetcher';

const BASE_API = process.env.NEXT_PUBLIC_BASE_URL_CMS_SERVICE;

const getHospitalList = async userToken => {
  const fetchConfig = {
    userToken,
    url: `${BASE_API}/hospitals`,
    method: 'GET',
    isPublic: !userToken
  };
  const response = await fetcher(fetchConfig);
  return response?.data;
};

export default getHospitalList;
