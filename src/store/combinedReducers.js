// list of reducers for each features
import { combineReducers } from 'redux';

/* import slicers for each features */
import AppointmentDetailSlicers from '@/store/slices/Appointment/Detail';
import AppointmentListSlicers from '@/store/slices/Appointment/List';
import BottomSheetSlicers from '@/store/slices/BottomSheet';
import DoctorDetailSlicers from '@/store/slices/Doctor/Detail';
import DoctorListSlicers from '@/store/slices/Doctor/List';
import FilterListSlicers from '@/store/slices/FilterList';
import SnackbarSlicers from '@/store/slices/Snackbar';
import TransactionSlicers from '@/store/slices/Transaction';
import UserSlicers from '@/store/slices/User';

// combine all reducers
const combinedReducer = combineReducers({
  user: UserSlicers,
  bottomSheet: BottomSheetSlicers,
  snackbar: SnackbarSlicers,
  filterList: FilterListSlicers,
  appointmentList: AppointmentListSlicers,
  appointmentData: AppointmentDetailSlicers,
  doctorList: DoctorListSlicers,
  doctorDetail: DoctorDetailSlicers,
  transaction: TransactionSlicers
});

export default combinedReducer;
