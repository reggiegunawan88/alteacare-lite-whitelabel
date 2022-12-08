import fetcher from '@/helpers/fetcher';

const BASE_API = process.env.NEXT_PUBLIC_BASE_URL_CMS_SERVICE;

const getCountryList = async () => {
  const fetchConfig = {
    url: `${BASE_API}/countries`,
    method: 'GET',
    isPublic: true
  };

  const response = await fetcher(fetchConfig);
  return response;
};

export default getCountryList;
