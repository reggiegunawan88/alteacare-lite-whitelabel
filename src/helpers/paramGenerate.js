import GetTodayDay from './day/day';
/**
 * filter query param generator
 * @param query -> query object[keyword, specializations[], orderType, page, day, orderBy, etc]
 */
const filterParamGenerator = query => {
  // handle multiple specializations and hospitals queries
  const singleSpecializationQuery =
    (query?.['specializations[]'] && `&specializations[]=${query?.['specializations[]']}`) || '';
  const specializationsQuery =
    query?.['specializations[]'] instanceof Array
      ? query?.['specializations[]']
          .map(item => {
            return `&specializations[]=${item}`;
          })
          .join('')
      : singleSpecializationQuery;

  const singleHospitalsQuery = (query?.hospitals && `&hospitals[]=${query?.hospitals}`) || '';
  const hospitalsQuery =
    query?.hospitals instanceof Array
      ? query?.hospitals
          .map(item => {
            return `&hospitals[]=${item}`;
          })
          .join('')
      : singleHospitalsQuery;

  const params = {
    available_day: `available_day=${query?.available_day ? query.available_day : GetTodayDay()}`,
    page: `&page=${query?.page ? `${query.page}` : '1'}`,
    order_type: `&order_type=${query?.order_type ? query.order_type : 'ASC'}`,
    order_by: `&order_by=${query?.order_by ? query.order_by : 'price'}`,
    keyword: query?.keyword ? `&keyword=${encodeURIComponent(query?.keyword)}` : '',
    specializations: specializationsQuery,
    hospitals: hospitalsQuery,
    date: query?.date ? `&dates=${query.date}` : '',
    offer: query?.offer ? `&offer=${query.offer}` : '',
    minPrice: query?.min_price ? `&min_price=${query.min_price}` : '',
    maxPrice: query?.max_price ? `&max_price=${query.max_price}` : ''
  };

  return `${params.available_day}${params.page}${params.order_type}${params.order_by}${params.keyword}${params.specializations}${params.hospitals}${params.date}${params.offer}${params.minPrice}${params.maxPrice}`;
};

export default filterParamGenerator;
