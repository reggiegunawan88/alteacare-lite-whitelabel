import React from 'react';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import ErrorIcon from '@mui/icons-material/Error';
import WarningIcon from '@mui/icons-material/Warning';
import { useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import useShallowEqualSelector from '@/helpers/useShallowEqualSelector';
import { hideSnackbar, showSnackbar } from '@/store/slices/Snackbar';

const Snackbar = () => {
  const dispatch = useDispatch();
  const { isOpen, title, description, type } = useShallowEqualSelector({
    name: 'snackbar',
    states: ['isOpen', 'title', 'description', 'type']
  });

  return (
    <div>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="slide"
        unmountOnExit
        onEnter={() => dispatch(showSnackbar())}
        onExited={() => dispatch(hideSnackbar())}
      >
        <div className="absolute inset-x-0 top-3 z-10 p-5 mx-auto w-fit bg-white rounded-lg shadow-md">
          <div className="flex flex-row items-start space-x-4">
            {type === 'success' && <CheckCircleIcon className="w-5 text-success-2" />}
            {type === 'warning' && <WarningIcon className="w-5 text-warning-2" />}
            {type === 'error' && <ErrorIcon className="w-5 text-error-2" />}
            <div className="flex flex-col space-y-1 text-sm">
              <span className="text-dark-2">{title}</span>
              <span className="text-dark-2">{description}</span>
            </div>
            <button>
              <CloseIcon className="w-5 font-bold text-dark-3" onClick={() => dispatch(hideSnackbar())} />
            </button>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Snackbar;
