import React from 'react';

import Image from 'next/image';

const LoadingState = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <Image
        alt="loading_gif"
        src="/assets/gif/alteacare_loading.gif"
        layout="fixed"
        width={150}
        height={150}
        priority
      />
    </div>
  );
};

export default LoadingState;
