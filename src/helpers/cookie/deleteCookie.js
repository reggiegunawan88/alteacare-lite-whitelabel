import { destroyCookie } from 'nookies';

const deleteCookie = async () => {
  await destroyCookie(null, 'alt_user_token', {
    domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN
  });
  await destroyCookie(null, 'alt_refresh_token', {
    domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN
  });
};

export default deleteCookie;
