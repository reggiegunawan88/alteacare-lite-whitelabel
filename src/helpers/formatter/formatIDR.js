/**
 *
 * @param {int} value
 * @returns formatted IDR currency, example: Rp 175.000,00
 */
const formatIDR = value => {
  return value?.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
};

export default formatIDR;
