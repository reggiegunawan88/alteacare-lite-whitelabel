import React from 'react';

import Image from 'next/image';

const EmptyState = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-16 space-y-4">
      <Image
        alt="empty-schedule"
        src="/assets/images/empty_schedule.svg"
        layout="fixed"
        width={140}
        height={80}
        objectFit="contain"
      />
      <span className="text-xs leading-4 text-dark-3">Dokter yang Anda cari tidak tersedia</span>
    </div>
  );
};

export default EmptyState;
