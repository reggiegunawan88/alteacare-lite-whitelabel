import React from 'react';

import useDoctorInformation from '@/hooks/components/DoctorDetail/useDoctorInformation';

const DoctorProfile = ({ data }) => {
  const { openInformationBottomSheet } = useDoctorInformation();
  const { about } = data;

  // text content length
  const moreTextContent = about?.split('<p/>')[0].length > 200;

  const conditionalInnerHTML = () => {
    if (about) {
      return `${about?.split('</p>')[0]}${moreTextContent ? '...' : ''}`;
    }
    return '-';
  };

  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className="flex flex-col space-y-3 text-xs leading-4 keen-slider__slide">
      <div className="flex">
        <span className="font-bold">Profil Dokter</span>
      </div>
      <div
        className="flex flex-col text-dark-2 line-clamp-3"
        dangerouslySetInnerHTML={{ __html: conditionalInnerHTML() }}
      ></div>
      {moreTextContent && (
        <div className="flex">
          <span className="text-xs text-info-3" onClick={() => openInformationBottomSheet(data)}>
            Selengkapnya
          </span>
        </div>
      )}
    </div>
  );
};

export default DoctorProfile;
