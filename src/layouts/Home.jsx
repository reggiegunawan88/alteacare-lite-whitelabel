import Div100vh from 'react-div-100vh';

import HomeNavigation from '@/components/HomeNavigation';

const HomeLayout = ({ children }) => {
  return (
    <Div100vh className="flex relative flex-col">
      <div className="overflow-y-auto flex-1 pb-10 bg-gradient-blue hide-scrollbar">{children}</div>
      <div className="flex">
        <HomeNavigation />
      </div>
    </Div100vh>
  );
};

export default HomeLayout;
