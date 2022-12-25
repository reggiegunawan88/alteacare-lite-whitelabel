import React from 'react';

import Image from 'next/image';

const DocumentCard = ({ fileName, size, time, url }) => {
  return (
    <div className="flex flex-row justify-between items-center py-3 px-7 border-b-default border-light-1">
      <div className="flex flex-row items-center space-x-4">
        <div>
          <Image alt="document" src="/assets/icons/utils/document.svg" layout="fixed" width={25} height={30} />
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-dark-1" style={{ wordBreak: 'break-all' }}>
            {fileName}
          </span>
          <span className="text-xs text-dark-3">{size}</span>
          <span className="text-xxs text-dark-2">{time}</span>
        </div>
      </div>
      {/* CTA btn */}
      <a download href={url}>
        <button className="text-sm font-semibold text-main-darker">Lihat</button>
      </a>
    </div>
  );
};

export default DocumentCard;
