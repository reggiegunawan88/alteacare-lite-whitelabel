/**
 *
 * @param url -> request url string
 * @param method -> 'POST' or 'GET'
 * @param isPublic -> Boolean -> true if request is public
 * @param userToken -> user token
 * @param body -> body data request (optional)
 * @param type -> determine request type is file or no (optional)
 */

// eslint-disable-next-line import/no-cycle
import { generateRefreshToken } from '@/services/User/generateRefreshToken';

import deleteCookie from './cookie/deleteCookie';
import getCookie from './cookie/getCookie';
import { setCookies } from './cookie/setCookie';

const fetcher = fetchConfig => {
  const { userToken, url, method, isPublic, body, type } = fetchConfig;
  const refreshToken = getCookie()?.alt_refresh_token;
  const bearer = getCookie()?.alt_user_token || userToken;

  // set req headers
  const headers = isPublic
    ? {}
    : {
        Accept: 'application/json, multipart/form-data',
        ...(type !== 'file' ? { 'Content-Type': 'application/json' } : {}), // conditional for file type upload
        Authorization: `Bearer ${bearer}`
      };
  // set req options and body
  let options =
    method === 'POST'
      ? { method, headers, ...(type !== 'file' ? { body: JSON.stringify(body) } : { body }) }
      : {
          method,
          headers
        };

  return fetch(url, options)
    .then(resp => {
      if (!resp.ok) {
        // throw error to catch block
        return Promise.reject(resp);
      }
      return resp.json();
    })
    .then(data => {
      return data;
    })
    .catch(e => {
      // intercept 401 error (token invalid)
      if (e.status === 401) {
        if (refreshToken) {
          // HIT REFRESH TOKEN API
          return new Promise(resolve => {
            const result = generateRefreshToken({ body: { refresh_token: refreshToken } })
              .then(res => {
                // set cookie as new tokens
                setCookies({ access_token: res?.access_token, refresh_token: res?.refresh_token });
                // set new token to upcoming req header
                options = {
                  ...options,
                  headers: {
                    ...headers,
                    Authorization: `Bearer ${res?.access_token}`
                  }
                };
                return fetch(e?.url, options);
              })
              .then(resp => resp.json())
              .catch(err => {
                // throw user to auth page
                deleteCookie();
                window.location.href = process.env.NEXT_PUBLIC_BASE_URL_AUTHENTICATION || '';
                return err;
              });

            resolve(result);
          });
        }
      }
      // return error response
      return e?.json().then(resp => {
        const errObj = {
          ...resp,
          code: e.status
        };
        return Promise.reject(errObj);
      });
    });
};

export default fetcher;
