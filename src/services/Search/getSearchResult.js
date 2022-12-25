import fetcher from '@/helpers/fetcher';
import parseJwt from '@/helpers/parser/jwtParser';

const BASE_API = process.env.NEXT_PUBLIC_BASE_URL_CMS_SERVICE;

const getSearchResult = async ({ keyword }) => {
  const jwt = parseJwt();

  const fetchConfig = {
    url: `${BASE_API}/search?_q=${keyword}`,
    method: 'GET',
    isPublic: !jwt
  };
  const response = await fetcher(fetchConfig);
  return response;
};

export default getSearchResult;
