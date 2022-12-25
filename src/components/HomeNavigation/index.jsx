import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const HomeNavigation = () => {
  const router = useRouter();
  return (
    <div className="w-full bg-white rounded-t-2xl shadow-inner">
      <div className="grid grid-cols-2 justify-items-center py-3 text-dark-3">
        <Link passHref href="/">
          <div className="flex flex-col items-center space-y-1">
            {router.pathname === '/' ? (
              <Image
                alt="nav-icon"
                src="/assets/icons/navigation/home-active.svg"
                width={20}
                height={20}
                layout="fixed"
              />
            ) : (
              <Image
                alt="nav-icon"
                src="/assets/icons/navigation/home-inactive.svg"
                width={20}
                height={20}
                layout="fixed"
              />
            )}
            <span className={`text-xxs ${router.pathname === '/' && 'text-main-primary'}`}>Beranda</span>
          </div>
        </Link>
        <Link passHref href="/teleconsultation/ongoing">
          <div className="flex flex-col items-center space-y-1">
            {router.pathname.includes('teleconsultation') ? (
              <Image
                alt="nav-icon"
                src="/assets/icons/navigation/tele-active.svg"
                width={20}
                height={20}
                layout="fixed"
                className="text-main-primary"
              />
            ) : (
              <>
                <Image
                  alt="nav-icon"
                  src="/assets/icons/navigation/tele-inactive.svg"
                  width={20}
                  height={20}
                  layout="fixed"
                />
              </>
            )}
            <span className={`text-xxs ${router.pathname.includes('teleconsultation') && 'text-main-primary'}`}>
              Telekonsultasi Saya
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeNavigation;
