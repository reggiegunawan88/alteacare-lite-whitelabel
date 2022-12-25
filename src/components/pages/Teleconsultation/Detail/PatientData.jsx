import React from 'react';

import AccessAlarm from '@mui/icons-material/AccessAlarm';
import DateRange from '@mui/icons-material/DateRange';
import Image from 'next/image';

import DocumentUploader from '@/components/Reusable/DocumentUploader';
import formatDate from '@/helpers/day/formatDate';
import useCountdown from '@/hooks/pages/Teleconsultation/Detail/useCountdown';

const PatientData = ({ data, loadingBtn, getRoomDetail, remakeTeleconsultation }) => {
  const { status, doctor, schedule, patient } = data;
  const { countdown, totalTimestamp } = useCountdown({ schedule, status });

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex flex-col py-3 px-4 space-y-6 bg-white">
        {/* doctor desc */}
        <div className="flex flex-row items-center space-x-3">
          {doctor?.photo?.url && (
            <Image
              alt="doctor-profile"
              src={doctor?.photo?.url || '/asset/images/logo-mika.png'}
              layout="fixed"
              width={60}
              height={60}
              objectFit="contain"
            />
          )}
          <div className="flex flex-col leading-4">
            <div className="flex flex-row items-center space-x-2">
              <Image
                alt="mika-logo"
                src={doctor?.hospital?.logo || '/asset/images/logo-mika.png'}
                layout="fixed"
                width="24"
                height="24"
                objectFit="contain"
              />
              <span className="text-xxs text-dark-2">{doctor?.hospital?.name}</span>
            </div>
            <span className="text-sm font-semibold text-dark-1">{doctor?.name}</span>
            <span className="mt-1 text-xs font-medium text-dark-1">{doctor?.specialist.name}</span>
          </div>
        </div>
        {/* time schedule */}
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center space-x-1.5 text-dark-3">
            <DateRange fontSize="small" />
            <span className="text-sm">{formatDate(data?.schedule?.date)}</span>
          </div>
          <div className="flex flex-row items-center space-x-1.5 text-dark-3">
            <AccessAlarm fontSize="small" />
            <span className="text-sm">
              {schedule?.time_start} - {schedule?.time_end}
            </span>
          </div>
        </div>
        {/* document uploader component */}
        <DocumentUploader data={data} />
      </div>

      {/* patient data */}
      <div className="flex flex-col px-4 space-y-2">
        <span className="self-center text-sm font-bold text-dark-3">Data Pasien</span>
        <div className="overflow-auto py-2 bg-white rounded border-default border-light-3 hide-scrollbar">
          <div className="flex flex-col space-y-2">
            <div className="flex flex-row justify-between px-5 pb-1.5 text-sm text-dark-3 border-b-default border-light-3">
              <span>Nama</span>
              <span className="font-medium">{patient?.name || '-'}</span>
            </div>
            <div className="flex flex-row justify-between px-5 pb-1.5 text-sm text-dark-3 border-b-default border-light-3">
              <span>Umur</span>
              <span className="font-medium">
                {patient?.age?.year} tahun {patient?.age?.month} bulan
              </span>
            </div>
            <div className="flex flex-row justify-between px-5 pb-1.5 text-sm text-dark-3 border-b-default border-light-3">
              <span>Tanggal Lahir</span>
              <span className="font-medium">{patient?.birthdate || '-'}</span>
            </div>
            <div className="flex flex-row justify-between px-5 pb-1.5 text-sm text-dark-3 border-b-default border-light-3">
              <span>Jenis Kelamin</span>
              <span className="font-medium">{patient?.gender === 'MALE' ? 'Laki-laki' : 'Perempuan' || '-'}</span>
            </div>
            <div className="flex flex-row justify-between px-5 pb-1.5 text-sm text-dark-3 border-b-default border-light-3">
              <span>No. KTP</span>
              <span className="font-medium">{patient?.card_id || '-'}</span>
            </div>
            <div className="flex flex-row justify-between px-5 pb-1.5 text-sm text-dark-3 border-b-default border-light-3">
              <span>No. Telepon</span>
              <span className="font-medium">{patient?.phone_number || '-'}</span>
            </div>
            <div className="flex flex-row justify-between px-5 pb-1.5 text-sm text-dark-3 border-b-default border-light-3">
              <span>Alamat Email</span>
              <span className="font-medium">{patient?.email || '-'}</span>
            </div>
            <div className="flex flex-col px-5 space-x-1.5 text-sm text-dark-3">
              <span>Alamat</span>
              <span className="font-medium">{patient?.address || '-'} </span>
            </div>
          </div>
        </div>
      </div>
      {/* button section */}
      <div className="flex absolute bottom-0 p-5 w-full bg-white">
        {data?.status === 'PAID' && totalTimestamp > 0 && (
          <button className="w-full btn-secondary">{countdown} </button>
        )}
        {(status === 'MEET_SPECIALIST' || status === 'ON_GOING') && (
          <button onClick={getRoomDetail} className="w-full btn-secondary" disabled={loadingBtn}>
            {loadingBtn ? 'Mengarahkan...' : 'Temui Dokter'}
          </button>
        )}
        {(status === 'COMPLETED' || status === 'WAITING_FOR_MEDICAL_RESUME') && (
          <button onClick={remakeTeleconsultation} className="w-full btn-primary" disabled={loadingBtn}>
            {loadingBtn ? 'Mengarahkan...' : 'Buat Telekonsultasi Kembali'}
          </button>
        )}
      </div>
    </div>
  );
};

export default PatientData;
