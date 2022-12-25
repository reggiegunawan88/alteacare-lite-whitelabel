import { useRouter } from 'next/router';
import Div100vh from 'react-div-100vh';

import HomeNavigation from '@/components/HomeNavigation';
import Searchbar from '@/components/pages/Home/Searchbar';
import TopMenu from '@/components/pages/Home/TopMenu';
import parseJwt from '@/helpers/parser/jwtParser';
import useShallowEqualSelector from '@/helpers/useShallowEqualSelector';

const HomeLayout = ({ children }) => {
  const router = useRouter();
  const jwt = parseJwt();
  const { theme } = useShallowEqualSelector({ name: 'whitelabelTheme', states: ['theme'] });

  return (
    <Div100vh
      className="flex relative flex-col"
      style={{
        backgroundImage: `linear-gradient(to bottom, ${theme?.background_color.gradient_start}, ${theme?.background_color.gradient_end})`
      }}
    >
      {/* home page top content (only applied on home page) */}
      {router.pathname === '/' && (
        <div className="flex flex-col">
          <TopMenu />
          <div className="flex flex-col px-4 space-y-1 text-center">
            <span className="text-lg font-semibold" style={{ color: theme?.title.color }}>
              {theme?.title.label}
            </span>
            <Searchbar />
          </div>
        </div>
      )}

      {/* home page content */}
      <div className="overflow-y-auto flex-1 pb-5 hide-scrollbar">{children}</div>

      {/* home page navigation bar */}
      <div className="flex">{!jwt?.additionalData?.filterdoctor && <HomeNavigation />}</div>
    </Div100vh>
  );
};

export default HomeLayout;
