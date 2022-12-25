import React from 'react';

const DotSlider = ({ currentSlide, loaded, instanceRef }) => {
  return (
    <>
      {loaded && (
        <div className="flex justify-start space-x-2">
          {[...Array(instanceRef.current.track.details.slides.length).keys()].map(idx => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={`w-2 h-2 bg-main-subtle rounded-xl cursor-pointer ${
                  currentSlide === idx ? 'bg-main-darker' : ''
                }`}
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
};

export default DotSlider;
