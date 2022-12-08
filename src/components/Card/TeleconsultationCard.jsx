import React from 'react';

import AccessAlarm from '@mui/icons-material/AccessAlarm';
import ChevronRight from '@mui/icons-material/ChevronRight';
import DateRange from '@mui/icons-material/DateRange';
import Image from 'next/image';
import Link from 'next/link';

import formatDate from '@/helpers/day/formatDate';
import useTeleconsultationCard from '@/hooks/components/Card/useTeleconsultationCard';

const TeleconsultationCard = ({ data, status, elementRef }) => {
  const appointmentId = data.id;
  const transactionData = data?.transaction;
  const { redirectHrefCard } = useTeleconsultationCard({ status, appointmentId, transactionData });

  return (
    <div className="flex flex-col py-2 bg-white rounded-md shadow" ref={elementRef}>
      {/* teleconsultation status */}
      <div className="grid grid-cols-2 items-center px-4">
        <span className="text-xxs text-dark-3">
          {data?.order_code} - {data?.user?.name}
        </span>
        <span
          className="justify-self-end self-center px-1 w-fit text-xs text-center text-white rounded"
          style={{ background: data?.status_detail?.bg_color }}
        >
          {data?.status_detail?.label}
        </span>
      </div>
      {/* teleconsultation doctor desc */}
      <Link passHref href={redirectHrefCard() || ''}>
        <div className="py-3 px-4 my-2 border-y-default border-light-1">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center space-x-3">
              <Image
                alt="doctor-profile"
                src={data?.doctor?.photo?.url ? data?.doctor?.photo?.url : '/assets/images/empty_spesialis.svg'}
                width={60}
                height={60}
                layout="fixed"
                objectFit="contain"
                loading="lazy"
              />
              <div className="flex flex-col leading-4">
                <div className="flex flex-row items-center space-x-2">
                  {data?.doctor?.hospital.logo && (
                    <Image
                      alt="mika-logo"
                      src={data.doctor.hospital.logo}
                      layout="fixed"
                      width={24}
                      height={24}
                      objectFit="contain"
                    />
                  )}
                  <span className="text-xxs text-dark-2">{data?.doctor?.hospital.name}</span>
                </div>
                <span className="mt-2 text-sm font-semibold text-dark-1">{data?.doctor?.name}</span>
                <span className="mt-1 text-xs font-medium text-dark-1">{data?.doctor?.specialist.name}</span>
              </div>
            </div>
            <ChevronRight className="text-main-primary" fontSize="large" />
          </div>
        </div>
      </Link>
      {/* teleconsultation schedule */}
      <div className="flex flex-row justify-between px-4">
        <div className="flex flex-row items-center space-x-1.5 text-info-1">
          <DateRange fontSize="small" />
          <span className="text-xs font-semibold">{formatDate(data?.schedule?.date)}</span>
        </div>
        <div className="flex flex-row items-center space-x-1.5 text-info-1">
          <AccessAlarm fontSize="small" />
          <span className="text-xs font-semibold">
            {data?.schedule?.time_start} - {data?.schedule?.time_end}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TeleconsultationCard;
