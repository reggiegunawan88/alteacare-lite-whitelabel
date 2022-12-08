import React from 'react';

const TransactionStage = ({ step, title, isActive, isDone }) => {
  return (
    <div className="flex flex-row items-center space-x-1">
      {isActive && (
        <>
          <span className="px-1.5 text-xs text-white bg-info-2 rounded-full">{step}</span>
          <span className="text-sm font-semibold text-info-2 whitespace-nowrap">{title}</span>
        </>
      )}
      {isDone && (
        <>
          <span className="px-1.5 text-xs text-white bg-main-darker rounded-full">{step}</span>
          <span className="text-sm font-semibold text-main-darker whitespace-nowrap">{title}</span>
        </>
      )}
      {!isActive && !isDone && (
        <>
          <span className="px-1.5 text-xs text-white bg-dark-3 rounded-full">{step}</span>
          <span className="text-sm font-semibold text-dark-3 whitespace-nowrap">{title}</span>
        </>
      )}
      {step < 4 && (
        <>
          {/* separator */}
          <div className={`w-8 border-default ${isDone ? 'border-main-lighter' : 'border-dark-3'}`}></div>
        </>
      )}
    </div>
  );
};

export default TransactionStage;
