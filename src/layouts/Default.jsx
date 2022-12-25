import { useRouter } from 'next/router';
import Div100vh from 'react-div-100vh';

import PageTransition from '@/components/Transition/PageTransition';

const DefaultLayout = ({ children }) => {
  const router = useRouter();
  return (
    <Div100vh className="flex relative flex-col">
      <div className="overflow-auto flex-1 hide-scrollbar">
        <PageTransition location={router.pathname}>{children}</PageTransition>
      </div>
    </Div100vh>
  );
};

export default DefaultLayout;
