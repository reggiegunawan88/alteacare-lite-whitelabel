import React from 'react';

const HomeLoader = () => {
  return (
    <div className="grid grid-flow-row space-y-6">
      {[...Array(5)].map((val, idx) => (
        <div key={idx} className="flex flex-col space-y-4">
          <div className="w-1/3 h-5 bg-dark-4 rounded-md animate-pulse"></div>
          <div className="grid grid-cols-3 space-x-3">
            <div className="h-20 bg-dark-4 rounded-md animate-pulse"></div>
            <div className="h-20 bg-dark-4 rounded-md animate-pulse"></div>
            <div className="h-20 bg-dark-4 rounded-md animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeLoader;
