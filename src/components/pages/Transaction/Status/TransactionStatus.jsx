import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import TransactionStage from './TransactionStage';

const TransactionStatus = () => {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(null);

  useEffect(() => {
    if (router.isReady) {
      setActiveStep(router.query.step);
    }
  }, [router.query, router.isReady]);

  return (
    <div className="flex overflow-x-auto flex-row py-1.5 px-4 space-x-1 w-full bg-lightblue hide-scrollbar">
      <TransactionStage step={1} title="Pilih Dokter" isActive={activeStep === '1'} isDone={activeStep > 1} />
      <TransactionStage step={2} title="Konfirmasi" isActive={activeStep === '2'} isDone={activeStep > 2} />
      <TransactionStage step={3} title="Pembayaran" isActive={activeStep === '3'} isDone={activeStep > 3} />
      <TransactionStage step={4} title="Selesai" isActive={activeStep === '4'} isDone={activeStep > 4} />
    </div>
  );
};

export default TransactionStatus;
