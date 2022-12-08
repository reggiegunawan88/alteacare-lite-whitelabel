import { useState } from 'react';

import { useDispatch } from 'react-redux';

import getAppointmentDetail from '@/services/Appointment/Detail/getAppointmentDetail';
import addFile from '@/services/File/addFile';
import deleteFile from '@/services/File/deleteFile';
import uploadFile from '@/services/File/uploadFile';
import { setAppointmentDetail } from '@/store/slices/Appointment/Detail';

const useDocumentUploader = ({ data }) => {
  const dispatch = useDispatch();
  // upload document state
  const [uploadedFile, setUploadedFile] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(false);

  // trigger input file
  const triggerUploadFile = () => {
    document.getElementById('uploadDocument').click();
  };

  // onchange input type file
  const handleUploadFile = async e => {
    const file = e.target.files[0];
    if (file === undefined) return; // if user not selected any file
    const fileType = file.type;
    const fileSize = file.size;
    const validFileFormat = ['image/gif', 'image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];

    // file size exceed limit
    if (fileSize >= 10240000) {
      alert('File hanya bisa di upload maximum 10 MB');
      return;
    }
    // file format invalid
    if (validFileFormat.indexOf(fileType) === -1) {
      alert('File hanya dapat berbentuk gambar atau PDF');
      return;
    }

    // file valid condition then make form data
    const formData = new FormData();
    formData.append('file', file, file.name);
    setUploadedFile(file);
    // start uploading file
    setUploadProgress(true);
    try {
      // do 1st req to get file ID
      const response = await uploadFile({ formData });
      // get file id data from 1st req
      const fileData = {
        appointment_id: data.id,
        file: response.data.id
      };
      // do 2nd request to add doc based on file ID
      await addFile({ fileData }).then(() => {
        setUploadProgress(false);
        // re-fetch docs after upload file
        getAppointmentDetail(data.id).then(resp => dispatch(setAppointmentDetail(resp.data)));
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteFile = async fileId => {
    const fileData = {
      appointment_id: data.id,
      document_id: fileId
    };
    try {
      await deleteFile({ fileData }).then(() => {
        // re-fetch docs after upload file
        getAppointmentDetail(data.id).then(resp => dispatch(setAppointmentDetail(resp.data)));
      });
    } catch (error) {
      console.error(error);
    }
  };

  return {
    uploadedFile,
    uploadProgress,
    triggerUploadFile,
    handleUploadFile,
    handleDeleteFile
  };
};

export default useDocumentUploader;
