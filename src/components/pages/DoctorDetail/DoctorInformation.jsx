/* eslint-disable tailwindcss/no-custom-classname */
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Router from 'next/router';

import 'keen-slider/keen-slider.min.css';
import DotSlider from '@/components/Slider/DotSlider';
import useDoctorInformation from '@/hooks/components/DoctorDetail/useDoctorInformation';

import DoctorDetail from './SliderContent/DoctorDetail';
import DoctorProfile from './SliderContent/DoctorProfile';
import RefundInformation from './SliderContent/RefundInformation';

const ChevronLeft = dynamic(() => import('@mui/icons-material/ChevronLeft'));

const DoctorInformation = props => {
  const { doctorData } = props;
  const { photo, specialization } = doctorData;
  const specializationId = `?specializations[]=${specialization?.id}` || '';
  const { currentSlide, loaded, slider, sliderRef } = useDoctorInformation();

  return (
    <div className="flex flex-col space-y-4">
      {/* profile img */}
      <div className="relative mx-auto" style={{ width: '230px', height: '210px' }}>
        <Image
          alt="doctor-profile"
          src={photo?.url ? photo?.url : '/assets/images/empty_spesialis.svg'}
          width={230}
          height={210}
          objectFit="contain"
          priority
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
            <div className="keen-slider__slide">
              <DoctorDetail data={doctorData} />
            </div>
            <div className="keen-slider__slide">
              <DoctorProfile data={doctorData} />
            </div>
            <div className="keen-slider__slide">
              <RefundInformation refundTerms={props?.refundTerms} />
            </div>
          </div>
          <div className="flex justify-between">
            {/* dots slider */}
            <DotSlider currentSlide={currentSlide} loaded={loaded} instanceRef={slider} />
            <p className="text-xxs text-dark-3">Geser untuk detail dokter</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorInformation;
