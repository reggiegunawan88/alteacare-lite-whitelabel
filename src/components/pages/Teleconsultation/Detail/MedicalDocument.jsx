import React from 'react';

import dynamic from 'next/dynamic';

import DocumentCard from '@/components/Card/DocumentCard';
import formatDate from '@/helpers/day/formatDate';

const MedicalDocumentsEmptyState = dynamic(() => import('@/components/EmptyState/Teleconsultation/MedicalDocuments'));

const MedicalDocument = ({ data }) => {
  return (
    <>
      {!data?.medical_document.length ? (
        <MedicalDocumentsEmptyState />
      ) : (
        <div className="flex flex-col">
          {/* document from alteacare */}
          <div className="flex flex-col">
            <div className="py-2 px-4 bg-light-2">
              <span className="text-sm font-semibold text-info-2">Dokumen dari AlteaCare</span>
            </div>
            {/* list files */}
            <div className="flex flex-col">
              {data?.medical_document?.map(
                (item, idx) =>
                  item?.upload_by_user === 0 && (
                    <DocumentCard
                      key={idx}
                      fileName={item?.original_name}
                      size={item?.size}
                      time={formatDate(item?.date_raw)}
                      url={item?.url}
                    />
                  )
              )}
            </div>
          </div>
          {/* my uploaded files */}
          <div className="flex flex-col">
            <div className="py-2 px-4 bg-light-2">
              <span className="text-sm font-semibold text-info-2">Unggahan Saya</span>
            </div>
            {/* list files */}
            <div className="flex flex-col">
              {data?.medical_document?.map(
                (item, idx) =>
                  item?.upload_by_user === 1 && (
                    <DocumentCard
                      key={idx}
                      fileName={item?.original_name}
                      size={item?.size}
                      time={formatDate(item?.date_raw)}
                      url={item?.url}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MedicalDocument;
