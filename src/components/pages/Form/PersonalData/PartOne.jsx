import React from 'react';

import ArrowDropDown from '@mui/icons-material/ArrowDropDown';

const PartOne = ({ form, familyRelations, familyMembers, handleInputChange }) => {
  return (
    <div className="flex flex-col space-y-6 text-sm text-dark-1">
      {/* family relation */}
      <div className="flex flex-col space-y-1 text-sm">
        <span className="font-semibold">
          Hubungan Keluarga <span className="text-error-1">*</span>
        </span>
        <div className="relative">
          {familyMembers?.length > 0 ? (
            <select
              className={`input-form ${form.isDisable ? 'bg-light-2' : ''}`}
              name="family_relation_type"
              value={form?.family_relation_type}
              disabled={form.isDisable}
              onChange={!form?.isDisable ? handleInputChange : null}
            >
              <option value="" disabled>
                Pilih hubungan
              </option>
              {familyRelations?.map(item => (
                <option key={item?.id} value={item?.id}>
                  {item?.name}
                </option>
              ))}
            </select>
          ) : (
            <select
              className="bg-light-2 input-form"
              name="family_relation_type"
              value={form?.family_relation_type}
              disabled
              // onChange={handleInputChange}
            >
              {familyRelations?.map(item => (
                <option key={item?.id} value={item?.id}>
                  {item?.name}
                </option>
              ))}
            </select>
          )}
          <ArrowDropDown className="absolute top-3 right-2" fontSize="medium" />
        </div>
      </div>
      {/* first name */}
      <div className="flex flex-col space-y-1 text-sm">
        <span className="font-semibold">
          Nama Depan <span className="text-error-1">*</span>
        </span>
        <input
          type="text"
          className={`input-form ${form.isDisable ? 'bg-light-2' : ''}`}
          placeholder="Isi nama depan"
          name="first_name"
          value={form?.first_name}
          disabled={form?.isDisable}
          onChange={!form?.isDisable ? handleInputChange : null}
        />
      </div>
      {/* last name */}
      <div className="flex flex-col space-y-1 text-sm">
        <span className="font-semibold">
          Nama Belakang <span className="text-error-1">*</span>
        </span>
        <input
          type="text"
          disabled={form.isDisable}
          className={`input-form ${form.isDisable ? 'bg-light-2' : ''}`}
          placeholder="Isi nama belakang"
          name="last_name"
          value={form.last_name}
          onChange={!form?.isDisable ? handleInputChange : null}
        />
      </div>
      {/* whatsapp number */}
      <div className="flex flex-col space-y-1 text-sm">
        <span className="font-semibold">
          Nomor Whatsapp Aktif <span className="text-error-1">*</span>
        </span>
        <input
          type="text"
          className="input-form"
          placeholder="Isi nomor telepon"
          name="contact_phone"
          value={form.contact_phone}
          onChange={handleInputChange}
        />
      </div>
      {/* email */}
      <div className="flex flex-col space-y-1 text-sm">
        <span className="font-semibold">
          Email <span className="text-error-1">*</span>
        </span>
        <input
          type="text"
          className="input-form"
          placeholder="Isi alamat email"
          name="contact_email"
          value={form.contact_email}
          onChange={handleInputChange}
        />
      </div>
      <span className="text-xs">
        <span className="text-error-1">*</span> Wajib diisi
      </span>
    </div>
  );
};

export default PartOne;
