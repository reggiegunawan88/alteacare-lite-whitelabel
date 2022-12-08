import React from 'react';

import ChevronLeft from '@mui/icons-material/ChevronLeft';
import dynamic from 'next/dynamic';
import Div100vh from 'react-div-100vh';

import FormPartOne from '@/components/pages/Form/PersonalData/PartOne';
import FormPartTwo from '@/components/pages/Form/PersonalData/PartTwo';
import usePersonalDataForm from '@/hooks/components/Form/usePersonalDataForm';

// dynamic import
const ErrorBanner = dynamic(() => import('@/components/Reusable/ErrorBanner'));

const PersonalDataFormOne = () => {
  const {
    loading,
    form,
    addressForm,
    step,
    subdistrictValue,
    familyRelations,
    familyMembers,
    countries,
    regionList,
    isError,
    errorMsg,
    nextStep,
    prevStep,
    handleInputChange,
    handleAddressInput,
    setSubdistrictKeyword,
    selectRegion,
    clearKeyword,
    closeErrorBanner
  } = usePersonalDataForm();
  return (
    <Div100vh className="flex relative flex-col">
      <div className="overflow-auto flex-1 hide-scrollbar">
        {/* title section */}
        <div className="sticky top-0 z-10 w-full bg-white shadow-md">
          <div className="flex relative justify-center items-center py-4 mx-6 bg-white">
            <button className="absolute left-0 outline-none" onClick={prevStep}>
              <ChevronLeft className="text-info-2" fontSize="large" />
            </button>
            <p className="text-lg font-semibold text-center text-info-1">Data Pasien</p>
          </div>
          {/* error banner */}
          {isError && <ErrorBanner errorMsg={errorMsg} closeErrorBanner={closeErrorBanner} />}
        </div>
        {/* content section */}
        <div className="flex-1 bg-light-4">
          <div className="p-4">
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-2 text-sm text-dark-1">
                <span>{step}/2</span>
                <div className="flex flex-col space-y-1 leading-5">
                  <span className="font-semibold">Isi data pribadi</span>
                  <span>Lengkapi data diri di bawah untuk membuat pesanan telekonsultasi.</span>
                </div>
              </div>
              {/* form component */}
              {step === 1 ? (
                <FormPartOne
                  form={form}
                  familyRelations={familyRelations}
                  handleInputChange={handleInputChange}
                  familyMembers={familyMembers}
                />
              ) : (
                <FormPartTwo
                  form={form}
                  addressForm={addressForm}
                  subdistrictValue={subdistrictValue}
                  handleInputChange={handleInputChange}
                  handleAddressInput={handleAddressInput}
                  countryList={countries}
                  regionList={regionList}
                  setSubdistrictKeyword={setSubdistrictKeyword}
                  selectRegion={selectRegion}
                  clearKeyword={clearKeyword}
                />
              )}
              {/* btn action */}
              <button
                className={`w-full btn-primary ${loading ? 'bg-light-1' : ''}`}
                disabled={loading}
                onClick={nextStep}
              >
                Lanjut
              </button>
            </div>
          </div>
        </div>
      </div>
    </Div100vh>
  );
};

export default PersonalDataFormOne;
