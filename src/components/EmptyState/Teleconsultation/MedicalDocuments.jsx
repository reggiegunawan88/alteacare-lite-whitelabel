import React from 'react';

import Image from 'next/image';

const MedicalDocumentsEmptyState = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-8 w-full h-full">
      <Image alt="document" src="/assets/icons/utils/document.svg" layout="fixed" width="80" height="80" />
      <span className="text-sm text-dark-3">Belum ada dokumen medis di sini</span>
    </div>
  );
};

export default MedicalDocumentsEmptyState;
