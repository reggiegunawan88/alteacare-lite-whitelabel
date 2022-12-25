import ChevronLeft from '@mui/icons-material/ChevronLeft';
import Router from 'next/router';
import Div100vh from 'react-div-100vh';

const SearchResultLayout = props => (
  <Div100vh className="flex relative flex-col bg-gradient-blue">
    {/* title section */}
    <div className="w-full shadow">
      <div className="flex relative justify-center items-center py-4 mx-6 bg-white">
        <button className="absolute left-0 outline-none" onClick={() => Router.back()}>
          <ChevronLeft className="text-info-2" fontSize="large" />
        </button>
        <p className="text-lg font-semibold text-center text-info-1">{props?.title}</p>
      </div>
    </div>
    {/* result section */}
    <div className="overflow-y-auto flex-1 mt-3 hide-scrollbar">
      <div className="h-full">{props.children}</div>
    </div>
  </Div100vh>
);

export default SearchResultLayout;
