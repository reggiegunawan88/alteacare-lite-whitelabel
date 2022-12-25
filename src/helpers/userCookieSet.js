/**
 *
 * @param query -> query object
 */

const userCookieSet = query => {
  document.cookie = `alt_user_token=${query?.alt_user_token}`;
  return document.cookie;
};

export default userCookieSet;
