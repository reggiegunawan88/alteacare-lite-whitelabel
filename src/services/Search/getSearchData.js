import fetcher from '@/helpers/fetcher';
import parseJwt from '@/helpers/parser/jwtParser';

const BASE_API = process.env.NEXT_PUBLIC_BASE_URL_CMS_SERVICE;

const getSearchData = async () => {
  const jwt = parseJwt();
  const fetchConfig = {
    url: `${BASE_API}/search?is_popular=YES`,
    method: 'GET',
    isPublic: !jwt
  };
  const response = await fetcher(fetchConfig);
  return response;
};

export default getSearchData;
