import React from 'react';

import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

const ProgressiveLoader = () => {
  return (
    <div className="flex flex-col items-center mt-5 space-y-1">
      <HourglassBottomIcon className="text-main-primary animate-spin" />
      <span className="text-dark-3">Loading...</span>
    </div>
  );
};

export default ProgressiveLoader;
