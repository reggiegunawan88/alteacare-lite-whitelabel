import fetcher from '@/helpers/fetcher';
import parseJwt from '@/helpers/parser/jwtParser';

const BASE_API = process.env.NEXT_PUBLIC_BASE_URL_CMS_SERVICE;

const getGroupWidgets = async () => {
  const jwt = parseJwt();
  const fetchConfig = {
    url: `${BASE_API}/v1/group-widgets`,
    method: 'GET',
    isPublic: !jwt
  };
  const response = await fetcher(fetchConfig);
  return response?.data;
};

export default getGroupWidgets;
