/* eslint-disable tailwindcss/no-custom-classname */
import React, { useState } from 'react';

import ChevronLeft from '@mui/icons-material/ChevronLeft';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import Router from 'next/router';

import 'keen-slider/keen-slider.min.css';
import DotSlider from '@/components/Slider/DotSlider';

// slider content
import DoctorDetail from './SliderContent/DoctorDetail';
import DoctorProfile from './SliderContent/DoctorProfile';
import RefundInformation from './SliderContent/RefundInformation';

const DoctorInformation = props => {
  const { doctorData } = props;
  const { photo, specialization } = doctorData;
  const specializationId = `?specializations[]=${specialization?.id}` || '';
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: 'snap',
    slides: {
      spacing: 12
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    created() {
      setLoaded(true);
    }
  });

  return (
    <div className="flex flex-col space-y-4">
      {/* profile img */}
      <div className="relative mx-auto ">
        <Image
          alt="doctor-profile"
          src={photo?.url ? photo?.url : '/assets/images/empty_spesialis.svg'}
          width={230}
          height={210}
          loading="lazy"
          objectFit="contain"
        />
      </div>
      <button onClick={() => Router.push(`/doctor/list${specializationId}`)} className="absolute top-2 left-1">
        <ChevronLeft fontSize="large" className="text-info-2" />
      </button>
      {/* description and terms */}
      <div className="flex flex-col mx-4 space-y-3">
        {/* slider */}
        <div className="flex flex-col space-y-4">
          <div ref={sliderRef} className="keen-slider">
            <DoctorDetail data={doctorData} />
            <DoctorProfile data={doctorData} />
            <RefundInformation refundTerms={props?.refundTerms} />
          </div>
          <div className="flex justify-between">
            {/* dots slider */}
            <DotSlider currentSlide={currentSlide} loaded={loaded} instanceRef={instanceRef} />
            <p className="text-xxs text-dark-3">Geser untuk detail dokter</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorInformation;
