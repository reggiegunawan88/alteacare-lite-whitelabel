/**
 *
 * @param url -> url string
 * @param method -> 'POST' or 'GET'
 * @param isPublic -> Boolean -> true if request is public
 */
import { parseCookies, setCookie } from 'nookies';

const BASE_API = process.env.NEXT_PUBLIC_BASE_URL_USER_SERVICE;

const fetcher = fetchConfig => {
  const { url, method, isPublic, body, type } = fetchConfig;
  const refreshToken = parseCookies().alt_refresh_token;
  const bearer = parseCookies().alt_user_token;
  // set req headers
  const headers = isPublic
    ? {}
    : {
        Accept: 'application/json, multipart/form-data',
        ...(type !== 'file' ? { 'Content-Type': 'application/json' } : {}), // conditional for file type upload
        Authorization: `Bearer ${bearer}`
      };
  // set req options and body
  const options =
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
          // HIT API REFRESH TOKEN
          fetch(`${BASE_API}/auth/refresh-token`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ refresh_token: refreshToken })
          }) // change later
            .then(resp => {
              if (resp.ok) {
                return resp.json();
              }
              return Promise.reject(resp);
            })
            .then(res => {
              // set cookie to new token
              setCookie(null, 'alt_user_token', res.data.access_token, {
                secure: process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging',
                path: '/',
                maxAge: 60 * 60 * 24 * 3
              });
              setCookie(null, 'alt_refresh_token', res.data.refresh_token, {
                secure: process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging',
                path: '/',
                maxAge: 60 * 60 * 24 * 3
              });
              window.location.reload();
            })
            .catch(err => {
              window.location.replace('https://alteacare.com');
              return err;
            });
        }
        return {}; // change to redirect home later
      }
      // return error response
      return e.json().then(resp => {
        return Promise.reject(resp);
      });
    });
};

export default fetcher;
