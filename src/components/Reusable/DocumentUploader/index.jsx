import React from 'react';

import AttachFile from '@mui/icons-material/AttachFile';

import convertBytes from '@/helpers/formatter/convertBytes';
import useDocumentUploader from '@/hooks/components/Reusable/DocumentUploader/useDocumentUploader';

const DocumentUploader = ({ data }) => {
  const { uploadedFile, uploadProgress, triggerUploadFile, handleUploadFile, handleDeleteFile } = useDocumentUploader({
    data
  });
  return (
    <div className="flex flex-col">
      {/* uploaded list file section */}
      <div className="flex flex-col">
        {data?.medical_document?.map(
          item =>
            item?.upload_by_user === 1 && (
              <div key={item.id} className="grid grid-cols-2 py-3 space-x-3 border-b-default border-light-3">
                <div className="flex text-dark-3">
                  <span className="text-xs font-bold text-dark-1 break-words" style={{ wordBreak: 'break-all' }}>
                    {item?.original_name}
                  </span>
                </div>
                <div className="flex flex-row justify-end items-center space-x-3">
                  <span className="text-xs font-semibold text-dark-3">{item?.size}</span>
                  <a download href={item?.url}>
                    <button className="text-xs text-main-primary outline-none">Lihat</button>
                  </a>
                  <button className="text-xs text-error-1 outline-none" onClick={() => handleDeleteFile(item.id)}>
                    Hapus
                  </button>
                </div>
              </div>
            )
        )}
      </div>
      {/* uploading file section */}
      {uploadProgress ? (
        <div className="grid grid-cols-2 py-3 space-x-3 border-b-default border-light-3">
          <div className="flex flex-row items-center space-x-2 text-dark-3">
            <span className="text-xs font-bold text-dark-1">{uploadedFile?.name}</span>
            <span className="text-xs font-semibold text-dark-3">{convertBytes(uploadedFile?.size)}</span>
          </div>
          <div className="flex flex-row justify-end items-center space-x-3">
            <span className="text-xs text-dark-3">Uploading...</span>
            <div className="w-12 h-1 bg-main-subtle">
              <div className="w-full h-1 bg-main-darker animate-pulse"></div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {/* attach file area */}
      <div className="flex flex-row justify-between py-3">
        <div className="flex flex-col space-x-1 text-dark-3">
          <p className="text-xs">
            <span className="font-bold text-dark-1">Unggah Berkas (opsional)</span> Max 10MB
          </p>
          <span className="text-xxs">Pemeriksaan penunjang</span>
        </div>
        <div className="flex flex-row items-center space-x-1 text-main-primary">
          <button
            className="flex flex-row items-center space-x-2 text-main-primary cursor-pointer"
            onClick={triggerUploadFile}
          >
            <AttachFile fontSize="small" />
            <span className="text-xs">Unggah</span>
          </button>
          <input id="uploadDocument" type="file" onChange={handleUploadFile} hidden />
        </div>
      </div>
    </div>
  );
};

export default DocumentUploader;
