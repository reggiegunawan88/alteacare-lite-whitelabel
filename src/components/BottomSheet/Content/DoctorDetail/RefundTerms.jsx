import React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';

import useShallowEqualSelector from '@/helpers/useShallowEqualSelector';
import { closeBottomSheet } from '@/store/slices/BottomSheet';

const RefundTerms = () => {
  const dispatch = useDispatch();
  const { bottom_sheet_title, bottom_sheet_desc } = useShallowEqualSelector({
    name: 'doctorDetail',
    states: ['bottom_sheet_title', 'bottom_sheet_desc']
  });
  return (
    <div className="flex z-50 flex-col py-5 mx-5 space-y-4">
      <div className="flex flex-row justify-between items-center space-x-3">
        <span className="text-sm font-bold">{bottom_sheet_title}</span>
        <button onClick={() => dispatch(closeBottomSheet())}>
          <CloseIcon fontSize="medium" />
        </button>
      </div>
      <div
        className="flex overflow-auto flex-col space-y-3 hide-scrollbar"
        style={{ height: '350px' }}
        dangerouslySetInnerHTML={{ __html: bottom_sheet_desc }}
      ></div>
    </div>
  );
};

export default RefundTerms;
