import React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import ErrorIcon from '@mui/icons-material/Error';

const ErrorBanner = ({ errorMsg, closeErrorBanner }) => {
  return (
    <div className="flex flex-row justify-between items-center py-5 px-3 text-white bg-error-3">
      <div className="flex flex-row items-center space-x-3">
        <ErrorIcon />
        <span>{errorMsg}</span>
      </div>
      <button onClick={closeErrorBanner}>
        <CloseIcon />
      </button>
    </div>
  );
};

export default ErrorBanner;
