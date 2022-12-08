import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

const Symptoms = props => {
  const { name, image, icon } = props.data;
  const { query } = props;
  return (
    <Link passHref={true} href={`/doctor/list?${query}`}>
      <div className="flex flex-col justify-center items-center p-2 my-2 space-y-3 w-fit text-center bg-white rounded-md shadow-md">
        <Image alt={name} src={image?.url || icon?.url} width={90} height={90} layout="fixed" objectFit="contain" />
        <span className="overflow-hidden text-xxs leading-3 text-dark-1 text-ellipsis line-clamp-2">{name}</span>
      </div>
    </Link>
  );
};

export default Symptoms;
