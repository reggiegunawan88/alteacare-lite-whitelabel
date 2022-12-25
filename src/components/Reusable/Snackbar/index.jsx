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

  const renderSnackbarBorder = () => {
    switch (type) {
      case 'SUCCESS':
        return 'border-success-4';
      case 'ERROR':
        return 'border-error-4';
      case 'WARNING':
        return 'border-warning-4';
      default:
        break;
    }
    return 'border-white';
  };

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
        <div
          className={`absolute inset-x-0 top-3 z-10 p-5 mx-2 w-fit bg-white rounded-lg shadow-md text-dark-2 border-default ${renderSnackbarBorder()}`}
        >
          <div className="flex flex-row items-start space-x-4">
            {type === 'SUCCESS' && <CheckCircleIcon className="w-5 text-success-2" />}
            {type === 'WARNING' && <WarningIcon className="w-5 text-warning-2" />}
            {type === 'ERROR' && <ErrorIcon className="w-5 text-error-2" />}
            <div className="flex flex-col space-y-1 text-sm">
              {title && <span>{title}</span>}
              <span>{description}</span>
            </div>
            <button>
              <CloseIcon className="w-5 font-bold" onClick={() => dispatch(hideSnackbar())} />
            </button>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Snackbar;
