import React from 'react';

import ChevronLeft from '@mui/icons-material/ChevronLeft';
import Router from 'next/router';

const BackNavigation = ({ title }) => {
  return (
    <div className="w-full shadow-md">
      <div className="flex relative justify-center items-center py-4 mx-6 bg-white">
        <button className="absolute left-0 outline-none" onClick={() => Router.back({ shallow: true })}>
          <ChevronLeft className="text-info-2" fontSize="large" />
        </button>
        <p className="text-lg font-semibold text-center text-info-1">{title}</p>
      </div>
    </div>
  );
};

export default BackNavigation;
