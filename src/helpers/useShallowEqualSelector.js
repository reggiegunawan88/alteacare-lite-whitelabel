import { useSelector, shallowEqual } from 'react-redux';
/**
 *
 * @param name -> reducers name : 'abc'
 * @param states -> state name : ['stateA', 'stateB']
 */
const useShallowEqualSelector = ({ name = '', states = [] }) =>
  useSelector(
    state =>
      [...new Set(states)].reduce(
        (acc, curr) => ({
          ...acc,
          [curr]: state[name][curr]
        }),
        {}
      ),
    shallowEqual
  );

export default useShallowEqualSelector;
