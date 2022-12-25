/**
 *
 * @param {obj} region
 * @returns string, example: 'Maleber, Andir, Kota Bandung, Jawa Barat'
 */
const parseRegionName = region => {
  if (region.name === undefined) {
    // conditional for default address obj
    return `${region?.sub_district?.name}, ${region?.district?.name}, ${region?.city?.name}, ${region?.province?.name}`;
  }
  return `${region?.name}, ${region?.district?.name}, ${region?.city?.name}, ${region?.province?.name}`;
};

export default parseRegionName;
