import React from 'react';

import Image from 'next/image';

const DoctorNotesEmptyState = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-8 w-full h-full">
      <Image alt="mika-logo" src="/assets/icons/utils/note.svg" layout="fixed" width="80" height="80" />
      <span className="text-sm text-dark-3">Belum ada catatan dokter di sini</span>
    </div>
  );
};

export default DoctorNotesEmptyState;
