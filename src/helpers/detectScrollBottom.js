/* detect scroll on bottom for progressive rendering */
const detectScrollBottom = componentRef => {
  if (componentRef.current) {
    const { scrollTop, scrollHeight, clientHeight } = componentRef.current;
    if (Math.round(scrollTop + clientHeight) === scrollHeight || Math.round(scrollTop + clientHeight) > scrollHeight) {
      return true;
    }
  }
  return false;
};

export default detectScrollBottom;
