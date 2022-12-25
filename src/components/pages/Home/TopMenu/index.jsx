import React from 'react';

import Image from 'next/image';

import useShallowEqualSelector from '@/helpers/useShallowEqualSelector';

const TopMenu = () => {
  const { theme } = useShallowEqualSelector({ name: 'whitelabelTheme', states: ['theme'] });

  return (
    <div className="flex flex-row justify-between items-center p-2">
      <Image
        alt="img-logo"
        src={theme?.top_menu?.left_img?.url}
        layout="fixed"
        width={80}
        height={32}
        objectFit="contain"
      />
      {theme?.top_menu?.right_img?.url && (
        <Image
          alt="img-logo"
          src={theme?.top_menu?.right_img?.url}
          layout="fixed"
          width={160}
          height={30}
          objectFit="contain"
        />
      )}
    </div>
  );
};

export default TopMenu;
