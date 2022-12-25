import React from 'react';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Div100vh from 'react-div-100vh';

import DefaultLayout from '@/layouts/Default';

const ChevronLeft = dynamic(() => import('@mui/icons-material/ChevronLeft'));

const DocumentPreview = () => {
  const router = useRouter();
  const docURL = router?.query?.url;
  return (
    <Div100vh className="flex relative flex-col">
      {/* title section */}
      <div className="w-full shadow-md">
        <div className="flex relative justify-center items-center py-4 mx-6 bg-white">
          <button className="absolute left-0 outline-none" onClick={() => router.back()}>
            <ChevronLeft className="text-info-2" fontSize="large" />
          </button>
          <span className="text-lg font-semibold text-center text-info-1">Dokumen</span>
          <button className="absolute right-0 outline-none">
            <span className="text-sm font-semibold text-info-3">Simpan</span>
          </button>
        </div>
      </div>
      {/* file viewer section */}
      <div className="grow bg-light-4">
        <div className="h-full">
          <iframe src={docURL} height="100%" width="100%"></iframe>
        </div>
      </div>
    </Div100vh>
  );
};

DocumentPreview.getLayout = page => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default DocumentPreview;
