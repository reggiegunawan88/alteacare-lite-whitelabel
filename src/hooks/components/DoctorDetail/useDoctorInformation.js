import { useState } from 'react';

import { useKeenSlider } from 'keen-slider/react';
import { batch, useDispatch } from 'react-redux';

import resizePlugin from '@/helpers/keen-slider/resizePlugin'; // !important
import useBottomSheet from '@/hooks/components/BottomSheet/useBottomSheet';
import { setDoctorDetailBottomSheetDesc, setDoctorDetailBottomSheetTitle } from '@/store/slices/Doctor/Detail';

// custom hooks for doctor detail bottom sheet information
const useDoctorInformation = () => {
  const dispatch = useDispatch();
  const { openBottomSheet } = useBottomSheet();

  // keen slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false); // for slider dot needs
  const [sliderRef, slider] = useKeenSlider(
    {
      slidesPerView: 1,
      initial: 0,
      loop: false,
      mode: 'snap',
      renderMode: 'performance',
      slides: {
        spacing: 4
      },
      slideChanged(s) {
        const { rel } = s.track.details;
        setCurrentSlide(rel);
      },
      created() {
        setLoaded(true);
      }
    },
    [resizePlugin] // must include this argument to prevent incorrect max-width on slider's element
  );

  const openRefundTermsBottomSheet = data => {
    openBottomSheet('REFUND_TERMS');
    batch(() => {
      dispatch(setDoctorDetailBottomSheetTitle('Ketentuan Pengembalian Dana & Pembatalan'));
      dispatch(setDoctorDetailBottomSheetDesc(data?.text));
    });
  };

  const openInformationBottomSheet = data => {
    openBottomSheet('DOCTOR_DETAIL_INFORMATION');
    batch(() => {
      dispatch(setDoctorDetailBottomSheetTitle('Profil Dokter Spesialis'));
      dispatch(setDoctorDetailBottomSheetDesc(data?.about));
    });
  };

  return {
    currentSlide,
    slider,
    loaded,
    sliderRef,
    openInformationBottomSheet,
    openRefundTermsBottomSheet
  };
};

export default useDoctorInformation;
