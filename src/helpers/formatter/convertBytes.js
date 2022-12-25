/**
 *
 * @param {int} bytes : document size
 * @return {int} : example: 44500 -> 4.5 MB
 *
 */
const convertBytes = (bytes, decimals = 2) => {
  if (bytes === 0) {
    return '0 Byte';
  }
  const k = 1024; // or 1 kilo = 1000
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / k ** i).toFixed(decimals)) + sizes[i];
};

export default convertBytes;
