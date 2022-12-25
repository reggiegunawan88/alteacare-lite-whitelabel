import React from 'react';

import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import CancelIcon from '@mui/icons-material/Cancel';

import parseRegionName from '@/helpers/parser/parseRegionName';

const PartTwo = ({
  form,
  addressForm,
  subdistrictValue,
  countryList,
  regionList,
  handleInputChange,
  handleAddressInput,
  setSubdistrictKeyword,
  selectRegion,
  clearKeyword
}) => {
  return (
    <div className="flex flex-col space-y-6 text-sm text-dark-1">
      {/* gender */}
      <div className="flex flex-col space-y-1 text-sm">
        <span className="font-semibold">
          Jenis Kelamin <span className="text-error-1">*</span>
        </span>
        <div className="relative">
          <select
            className={`input-form ${form.isDisable ? 'bg-light-2' : ''}`}
            placeholder="Pilih jenis kelamin"
            name="gender"
            disabled={form.isDisable}
            onChange={!form?.isDisable ? handleInputChange : null}
            value={form.gender}
          >
            <option disabled value="">
              Pilih
            </option>
            <option value="MALE">Laki-laki</option>
            <option value="FEMALE">Perempuan</option>
          </select>
          <ArrowDropDown className="absolute top-3 right-2" fontSize="medium" />
        </div>
      </div>
      {/* birth date */}
      <div className="flex flex-col space-y-1 text-sm">
        <span className="font-semibold">
          Tanggal Lahir <span className="text-error-1">*</span>
        </span>
        <input
          type="date"
          className="input-form"
          name="birth_date"
          value={form?.birth_date}
          disabled={form.isDisable}
          onChange={!form?.isDisable ? handleInputChange : null}
        />
      </div>
      {/* birth country */}
      <div className="flex flex-col space-y-1 text-sm">
        <span className="font-semibold">
          Tempat Lahir (Negara) <span className="text-error-1">*</span>
        </span>
        <div className="relative">
          <select className="input-form" name="birth_country" value={form?.birth_country} onChange={handleInputChange}>
            <option value="" disabled>
              Pilih negara
            </option>
            {countryList?.map(item => (
              <option key={item?.country_id} value={item?.country_id}>
                {item?.name}
              </option>
            ))}
          </select>
          <ArrowDropDown className="absolute top-3 right-2" fontSize="medium" />
        </div>
      </div>
      {/* birth place */}
      <div className="flex flex-col space-y-1 text-sm">
        <span className="font-semibold">
          Tempat Lahir (Kota) <span className="text-error-1">*</span>
        </span>
        <input
          type="text"
          className="input-form"
          placeholder="Isi tempat lahir"
          name="birth_place"
          value={form?.birth_place}
          onChange={handleInputChange}
        />
      </div>
      {/* nationality */}
      <div className="flex flex-col space-y-1 text-sm">
        <span className="font-semibold">
          Warga Negara <span className="text-error-1">*</span>
        </span>
        <div className="relative">
          <select className="input-form" name="nationality" value={form?.nationality} onChange={handleInputChange}>
            <option value="" disabled>
              Pilih negara
            </option>
            {countryList?.map(item => (
              <option key={item?.country_id} value={item?.country_id}>
                {item?.name}
              </option>
            ))}
          </select>
          <ArrowDropDown className="absolute top-3 right-2" fontSize="medium" />
        </div>
      </div>
      {/* KTP number */}
      <div className="flex flex-col space-y-1 text-sm">
        <span className="font-semibold">
          Nomor KTP <span className="text-error-1">*</span>
        </span>
        <input
          type="text"
          className={`input-form ${form.isDisable ? 'bg-light-2' : ''}`}
          placeholder="Masukkan nomor KTP (angka saja)"
          name="card_id"
          value={form?.card_id}
          disabled={form.isDisable}
          onChange={!form?.isDisable ? handleInputChange : null}
        />
      </div>
      {/* address street */}
      <div className="flex flex-col space-y-1 text-sm">
        <span className="font-semibold">
          Alamat sesuai KTP <span className="text-error-1">*</span>
        </span>
        <input
          type="text"
          className="input-form"
          placeholder="Isi alamat sesuai KTP"
          name="street"
          value={addressForm?.street}
          onChange={handleAddressInput}
        />
      </div>
      {/* sub-district */}
      <div className="flex flex-col space-y-1 text-sm">
        <span className="font-semibold">
          Kelurahan <span className="text-error-1">*</span>
        </span>
        <div className="relative">
          <input
            type="text"
            className="pr-10 input-form"
            placeholder="Masukkan nama kelurahan"
            name="sub_district"
            value={subdistrictValue}
            onChange={e => setSubdistrictKeyword(e.target.value)}
          />
          {subdistrictValue && (
            <button className="outline-none" onClick={clearKeyword}>
              <CancelIcon className="absolute top-4 right-3" fontSize="small" />
            </button>
          )}
        </div>
        {/* region dropdown data list */}
        {regionList.length > 0 && (
          <ul className="space-y-6 h-fit bg-white input-form">
            {regionList.map(item => (
              <li key={item?.sub_district_id} onClick={() => selectRegion(item)}>
                <span>{parseRegionName(item)}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* rt/rw */}
      <div className="flex flex-col space-y-1 text-sm">
        <span className="font-semibold">
          RT/RW <span className="text-error-1">*</span>
        </span>
        <input
          type="text"
          className="input-form"
          placeholder="Masukkan nama RT/RW"
          name="rt_rw"
          value={addressForm?.rt_rw}
          onChange={handleAddressInput}
        />
      </div>
      <span className="text-xs">
        <span className="text-error-1">*</span> Wajib diisi
      </span>
    </div>
  );
};

export default PartTwo;
