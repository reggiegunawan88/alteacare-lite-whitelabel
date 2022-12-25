import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

const SpecialistCard = props => {
  const { name, image, icon, symptoms } = props.data;
  const { query } = props;
  return (
    <Link passHref={true} prefetch={false} href={`/doctor/list?${query}`}>
      <div
        className="flex flex-col shrink-0 items-center py-2 px-3 my-1 space-y-1 w-fit bg-white rounded-md shadow-md"
        style={{ height: 100, width: 180 }}
      >
        <div className="flex flex-row items-center self-start space-x-2">
          <Image
            alt={name}
            src={image?.url || icon?.url}
            width={30}
            height={30}
            layout="fixed"
            objectFit="contain"
            loading="lazy"
          />
          <p className="text-xs font-semibold leading-3">{name}</p>
        </div>
        <div className="flex flex-col items-start self-start leading-3 text-dark-2">
          <p className="text-xxs font-medium">Keluhan apa saja ?</p>
          <p className="text-3xs line-clamp-3">{symptoms?.join(', ')}</p>
        </div>
      </div>
    </Link>
  );
};

export default SpecialistCard;
