import React from 'react';

import Image from 'next/image';

const DoctorInfo = ({ data, isEditable }) => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex flex-row justify-between text-sm">
        <p className="font-semibold text-info-2">Info Dokter</p>
        {isEditable && (
          <button className="font-semibold text-info-2 outline-none" onClick={() => window.history.go(-2)}>
            Ubah
          </button>
        )}
      </div>
      <div className="flex flex-row items-center space-x-3 rounded border-default border-light-3 shadow">
        <Image
          alt="doctor"
          src={data?.photo?.url ? data?.photo?.url : '/assets/images/empty_spesialis.svg'}
          width={80}
          height={80}
          layout="fixed"
          objectFit="contain"
          loading="lazy"
        />
        <div className="flex flex-col justify-center py-1">
          <div className="flex flex-row items-center space-x-2">
            {(data?.hospital[0]?.image || data?.hospital?.logo) && (
              <Image
                alt="hospital-logo"
                src={data?.hospital[0]?.icon?.url || data?.hospital?.logo}
                layout="fixed"
                width={24}
                height={24}
                objectFit="contain"
              />
            )}
            <p className="text-xxs text-dark-2">{data?.hospital[0]?.name || data?.hospital?.name || '-'}</p>
          </div>
          <p className="text-sm font-semibold text-dark-1">{data?.name}</p>
          <p className="text-xxs font-medium text-dark-3">
            {data?.specialization?.name || data?.specialist?.name || '-'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorInfo;
