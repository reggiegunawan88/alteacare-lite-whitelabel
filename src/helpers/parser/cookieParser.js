const parseCookie = str => {
  const parsed = str
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, v) => {
      acc[v[0].trim()] = v[1].trim();
      return acc;
    }, {});
  return parsed;
};

export default parseCookie;
