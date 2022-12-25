import getCookie from '@/helpers/cookie/getCookie';

const parseJwt = () => {
  const token = getCookie()?.alt_user_token;
  if (!token) {
    return;
  }
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  // eslint-disable-next-line consistent-return
  return JSON.parse(window.atob(base64));
};

export default parseJwt;
