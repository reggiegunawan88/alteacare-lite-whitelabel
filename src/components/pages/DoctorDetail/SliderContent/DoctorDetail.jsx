import React from 'react';

import Image from 'next/image';

const DoctorDetail = ({ data }) => {
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className="flex flex-col space-y-2 leading-4 keen-slider__slide">
      <div className="flex flex-col space-y-1 text-sm">
        <span className="font-semibold">{data?.name}</span>
        <span className="font-semibold text-info-2">Spesialis {data?.specialization?.name}</span>
      </div>
      <div className="flex flex-row items-center space-x-2">
        {data?.hospital[0]?.icon?.url && (
          <Image
            alt="hospital-logo"
            src={data?.hospital[0]?.icon.url}
            layout="fixed"
            width={24}
            height={24}
            objectFit="contain"
            loading="lazy"
          />
        )}
        <span className="text-xxs text-dark-2">{data?.hospital[0]?.name}</span>
      </div>
      <div className="grid grid-cols-2 gap-x-2 items-center text-xs">
        <span className="truncate">{data?.overview || '-'}</span>
        <span className="justify-self-end py-1 px-3 w-fit text-info-2 bg-main-subtle rounded-md">
          {data?.experience}
        </span>
      </div>
    </div>
  );
};

export default DoctorDetail;
