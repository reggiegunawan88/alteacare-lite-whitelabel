// helper for reusable function
import { setCookie } from 'nookies';

/* set access & refresh token cookies */
export const setCookies = async ({ access_token, refresh_token }) => {
  await setCookie(null, 'alt_user_token', access_token, {
    maxAge: 30 * 24 * 60 * 60,
    domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN,
    path: '/'
  });
  await setCookie(null, 'alt_refresh_token', refresh_token, {
    maxAge: 30 * 24 * 60 * 60,
    domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN,
    path: '/'
  });
  return false;
};
