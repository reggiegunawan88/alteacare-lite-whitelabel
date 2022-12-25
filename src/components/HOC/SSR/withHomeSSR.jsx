import nookies from 'nookies';

import { customPartner } from '@/constants/whitelabel_partner/customPartner';
import { partnerRedirectPath } from '@/constants/whitelabel_partner/partnerRedirectPath';
import parseCookie from '@/helpers/parser/cookieParser';
import parseJwt from '@/helpers/parser/jwtParser';
import { wrapper } from '@/store';
import { setWhitelabelTheme } from '@/store/slices/Whitelabel/Theme';
/**
 * Validate partner cookie value to assign whitelabel theme
 */
const validatePartnerCookieValue = async ({ store, ctx }) => {
  const { query } = ctx;
  const partnerCookie = nookies.get(ctx)?.partner;
  const jwtPartner = parseJwt();

  // cookie partner exist -> apply theme based on cookie value
  if (partnerCookie) {
    return store.dispatch(setWhitelabelTheme(partnerCookie));
  }
  // cookie partner not available but qparam does -> set cookie from qparam and apply theme based on qparam value
  if (query?.partner) {
    await nookies.set(ctx, 'partner', query.partner, {
      domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN,
      maxAge: 60 * 60 * 24 * 3,
      path: '/'
    });
    return store.dispatch(setWhitelabelTheme(query.partner));
  }
  // partner value available from jwt token with additional data
  if (jwtPartner?.additionalData?.partner) {
    return store.dispatch(setWhitelabelTheme(jwtPartner?.additionalData?.partner));
  }

  // default theme -> apply whitelabel general (alteacare) theme
  return store.dispatch(setWhitelabelTheme(null));
};

const withHomeSSR = gssp => {
  return wrapper.getServerSideProps(store => async ctx => {
    // validate query param to set user token
    const { query, req } = ctx;
    const cookie = req?.headers?.cookie;
    const ssrCookie = cookie ? parseCookie(cookie) : null;

    // validate token from query param
    if (query?.alt_user_token) {
      nookies.set(ctx, 'alt_user_token', query?.alt_user_token, {
        domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN,
        maxAge: 60 * 60 * 24 * 3,
        path: '/'
      });
      // check condition for partner
      const querydecode = JSON.parse(atob(query?.alt_user_token.split('.')[1]));
      if (customPartner.includes(querydecode?.additionalData?.partner)) {
        return {
          redirect: {
            permanent: true,
            destination: `${
              partnerRedirectPath[
                // example: WEPLUS_STAGING
                `${querydecode?.additionalData?.partner?.toUpperCase()}_${process.env.APP_ENV.toUpperCase()}`
              ]
            }`
          }
        };
      }
    }

    // validate token from existing cookie
    if (ssrCookie?.alt_user_token) {
      // check condition for partner
      const jwtdecode = JSON.parse(atob(ssrCookie?.alt_user_token.split('.')[1]));
      if (customPartner.includes(jwtdecode?.additionalData?.partner)) {
        return {
          redirect: {
            permanent: true,
            destination: `${
              partnerRedirectPath[
                `${jwtdecode?.additionalData?.partner?.toUpperCase()}_${process.env.APP_ENV.toUpperCase()}`
              ]
            }`
          }
        };
      }
    }

    // validate cookie value
    validatePartnerCookieValue({ store, ctx });
    const gsspData = await gssp(ctx); // Run `getServerSideProps` to get page-specific data

    // Pass page-specific props along with user data from `withAuth` to component
    return {
      props: {
        ...gsspData.props
      }
    };
  });
};

export default withHomeSSR;
