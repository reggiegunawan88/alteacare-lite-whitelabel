import React from 'react';

import dynamic from 'next/dynamic';
import { useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import useShallowEqualSelector from '@/helpers/useShallowEqualSelector';
import { closeFilterList } from '@/store/slices/FilterList';

// dynamic import bottom sheet content
const SpecialistList = dynamic(() => import('./SpecialistList'));
const HospitalList = dynamic(() => import('./HospitalList'));

const Container = () => {
  const dispatch = useDispatch();
  const { isOpen, type, specializationsList, specialistSearchResult, hospitalList, hospitalSearchResult } =
    useShallowEqualSelector({
      name: 'filterList',
      states: [
        'isOpen',
        'type',
        'specializationsList',
        'specialistSearchResult',
        'hospitalList',
        'hospitalSearchResult'
      ]
    });
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-20 w-full bg-dark-1 opacity-50"
          onClick={() => dispatch(closeFilterList())}
        ></div>
      )}
      <CSSTransition in={isOpen} timeout={400} unmountOnExit classNames="bottomsheet">
        <div className="absolute bottom-0 left-0 z-50 w-full bg-white rounded-t-3xl border-t-default border-t-light-1">
          <div className="flex flex-col">
            {/* content */}
            <div className="max-h-screen">
              {type === 'SPECIALIST' && (
                <SpecialistList list={specializationsList} searchResultList={specialistSearchResult} />
              )}
              {type === 'HOSPITAL' && <HospitalList list={hospitalList} searchResultList={hospitalSearchResult} />}
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default Container;
