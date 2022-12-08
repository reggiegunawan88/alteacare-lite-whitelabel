import React from 'react';

import Image from 'next/image';

import Spinner from '@/components/Reusable/Spinner';
import useDoctorCard from '@/hooks/components/Card/useDoctorCard';

const DoctorCard = props => {
  const { data, isLoading, redirectDoctorDetail } = useDoctorCard({ props });
  return (
    <div className="flex relative flex-row space-x-2 bg-white rounded-lg shadow-md" ref={props.elementRef}>
      {/* img with hospital logo */}
      <div className="flex items-center">
        <Image
          alt="doctor"
          src={data?.photo?.url ? data?.photo?.url : '/assets/images/empty_spesialis.svg'}
          width={152}
          height={152}
          layout="fixed"
          objectFit="contain"
          loading="lazy"
        />
      </div>
      <div className="absolute bottom-0 left-2">
        <Image
          alt="hospital-logo"
          src={
            data?.hospital?.icon?.url ||
            'https://cms-bucket-alteacare.s3.ap-southeast-1.amazonaws.com/logo_MIKA_83f14601a0.png'
          }
          layout="fixed"
          width={24}
          height={24}
          objectFit="contain"
          loading="lazy"
        />
      </div>
      {/* doctor desc */}
      <div className="grow py-4">
        <div className="flex flex-col mr-5">
          <div className="flex flex-col self-start space-y-1">
            <span className="p-1 w-fit text-xxs font-medium text-info-2 bg-main-subtle rounded-md">
              {data.experience}
            </span>
            <div className="flex flex-col leading-4">
              <p className="text-xs font-semibold text-dark-1">{data?.name}</p>
              <p className="text-xxs text-dark-2">{data?.specialization?.name}</p>
              <p className="text-xxs text-dark-3">{data?.hospital?.name}</p>
            </div>
            <div className="flex flex-row items-center space-x-1">
              {data?.discount_amount?.raw > 0 ? (
                // show discount and original price
                <>
                  {data?.final_price?.raw === 0 ? (
                    // conditional rendering for free and paid fee
                    <p className="text-sm font-semibold text-info-2">Gratis</p>
                  ) : (
                    <p className="text-sm font-semibold text-info-2">{data?.final_price?.formatted}</p>
                  )}
                  <p className="text-xxs font-semibold text-dark-3 line-through">{data?.original_price?.formatted}</p>
                </>
              ) : (
                // show price and conditional rendering for free and paid fee
                <>
                  {data?.final_price?.raw === 0 ? (
                    <p className="text-sm font-semibold text-info-2">Gratis</p>
                  ) : (
                    <p className="text-sm font-semibold text-info-2">{data?.original_price?.formatted}</p>
                  )}
                </>
              )}
            </div>
          </div>
          {/* btn CTA */}
          <button
            className="flex flex-row justify-center items-center py-1 mt-4 w-full bg-main-primary rounded-md"
            disabled={isLoading}
            onClick={redirectDoctorDetail}
          >
            {isLoading && <Spinner />}
            <p className="text-sm font-semibold text-white">{isLoading ? 'Memuat jadwal' : 'Pilih Jadwal'}</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
