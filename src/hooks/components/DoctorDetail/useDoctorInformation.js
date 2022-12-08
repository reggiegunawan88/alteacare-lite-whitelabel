import { batch, useDispatch } from 'react-redux';

import useBottomSheet from '@/hooks/components/BottomSheet/useBottomSheet';
import { setDoctorDetailBottomSheetDesc, setDoctorDetailBottomSheetTitle } from '@/store/slices/Doctor/Detail';

// custom hooks for doctor detail bottom sheet information
const useDoctorInformation = () => {
  const dispatch = useDispatch();
  const { openBottomSheet } = useBottomSheet();

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
    openInformationBottomSheet,
    openRefundTermsBottomSheet
  };
};

export default useDoctorInformation;
