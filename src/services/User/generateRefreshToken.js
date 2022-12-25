// eslint-disable-next-line import/no-cycle
import fetcher from '@/helpers/fetcher';

export const generateRefreshToken = async ({ body }) => {
  const fetchConfig = {
    url: `${process.env.NEXT_PUBLIC_BASE_URL_USER_SERVICE}/auth/refresh-token`,
    method: 'POST',
    isPublic: false,
    body
  };

  const response = await fetcher(fetchConfig);
  return response.data;
};
