import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

const Doctor = ({ data }) => {
  return (
    <Link passHref href={`/doctor/details?id=${data.doctor_id}`}>
      <div className="flex flex-row items-center space-x-3">
        <Image
          alt="doctor-recommendation"
          src={data?.photo?.url ? data?.photo?.url : '/assets/images/empty_spesialis.svg'}
          width={60}
          height={60}
          layout="fixed"
          objectFit="contain"
          loading="lazy"
        />
        <div className="flex flex-col space-y-1 text-dark-1">
          <span className="px-2 w-fit text-xxs text-info-2 bg-main-subtle rounded-full">{data?.experience}</span>
          <p className="text-sm font-bold">{data?.name}</p>
          <p className="text-xs">{data?.specialization?.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default Doctor;
