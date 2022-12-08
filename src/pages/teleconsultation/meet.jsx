import React from 'react';

import Router, { useRouter } from 'next/router';
import Div100vh from 'react-div-100vh';

const MeetDoctor = () => {
  const router = useRouter();
  const meetUrl = router.query.room;
  return (
    <Div100vh className="flex relative flex-col">
      {/* title section */}
      <div className="w-full">
        <div className="flex justify-end p-2 bg-black">
          <button className="px-2 btn-error" onClick={() => Router.back()}>
            Akhiri Panggilan
          </button>
        </div>
      </div>
      {/* file viewer section */}
      <div className="flex-1 bg-light-4">
        <div className="h-full">
          <iframe src={meetUrl} height="100%" width="100%" allow="camera;microphone"></iframe>
        </div>
      </div>
    </Div100vh>
  );
};

export default MeetDoctor;
