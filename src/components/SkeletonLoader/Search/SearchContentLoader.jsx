import React from 'react';

const SearchContentLoader = () => {
  return (
    <div className="grid grid-flow-row space-y-6">
      {/* symptom & specialist list */}
      {[...Array(2)].map((value, idx) => (
        <div key={idx} className="flex flex-col space-y-5">
          <div className="w-1/2 h-3 bg-dark-4 rounded-md animate-pulse"></div>
          <ul className="space-y-5">
            <li className="w-1/3 h-3 bg-dark-4 rounded-md animate-pulse"></li>
            <li className="w-1/3 h-3 bg-dark-4 rounded-md animate-pulse"></li>
            <li className="w-1/3 h-3 bg-dark-4 rounded-md animate-pulse"></li>
            <li className="w-1/3 h-3 bg-dark-4 rounded-md animate-pulse"></li>
            <li className="w-1/3 h-3 bg-dark-4 rounded-md animate-pulse"></li>
          </ul>
        </div>
      ))}
      {/* doctor list */}
      <div className="flex flex-col space-y-5 h-full">
        <div className="w-1/2 h-3 bg-dark-4 rounded-md animate-pulse"></div>
        {[...Array(3)].map((value, idx) => (
          <div key={idx} className="flex flex-row items-center space-x-3">
            <div className="w-1/3 h-16 bg-dark-4 rounded-md animate-pulse"></div>
            <div className="flex flex-col space-y-1 w-full">
              <div className="w-1/3 h-3 bg-dark-4 rounded-full animate-pulse"></div>
              <div className="w-1/3 h-3 bg-dark-4 rounded-md animate-pulse"></div>
              <div className="w-1/3 h-3 bg-dark-4 rounded-md animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchContentLoader;
