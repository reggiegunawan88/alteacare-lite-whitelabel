import { useInView } from 'react-intersection-observer';

const useIntersectionObserver = () => {
  // progressive loading observer
  const { ref: elementRef, inView: isLastIdx } = useInView();

  return {
    elementRef,
    isLastIdx
  };
};

export default useIntersectionObserver;
