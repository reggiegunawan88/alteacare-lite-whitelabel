/**
 *
 * @param query -> query object
 */

const userCookieSet = query => {
  document.cookie = `alt_user_token=${query?.alt_user_token}; alt_refresh_token=${query?.alt_refresh_token}`;
  return document.cookie;
};

export default userCookieSet;
