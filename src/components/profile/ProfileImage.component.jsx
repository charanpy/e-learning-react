import React, { useState } from 'react';
import { apiURL } from '../../lib/fetch';
import { errorToaster, successToaster } from '../../lib/toast';
import { getItem } from '../../lib/token';
import { opacityModal } from '../course-video/CourseVideoTabs.component';
import Button from '../shared/button/Button.component';
import Slider from '../slider/Slider.component';
const ProfileImage = ({ image, name, setProfileImage }) => {
  const [profileImage, setImage] = useState({
    file: null,
    modal: false,
    previewImage: null,
  });

  const { file, modal, previewImage } = profileImage;

  const handleOnChange = (e) => {
    const selectedFile = e?.target?.files?.[0];
    if (!selectedFile) return;

    setImage((prev) => ({
      ...prev,
      file: selectedFile,
      modal: true,
      previewImage: URL.createObjectURL(selectedFile),
    }));
  };

  const handleCancel = () => {
    setImage((prev) => ({
      ...prev,
      file: null,
      modal: false,
      previewImage: null,
    }));
  };

  const handleSubmit = () => {
    if (!file) return;
    successToaster('UPLOADING...');
    handleCancel();
    const formData = new FormData();
    formData.append('file', file);
    fetch(`${apiURL}/student/photo`, {
      body: formData,
      method: 'POST',
      headers: {
        authorization: getItem(),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        successToaster('IMAGE UPLOADED');
        setProfileImage(res);
      })
      .catch(() => errorToaster('Something went wrong.Please Try Again'));
  };

  return (
    <>
      <figure className='flex-col justify align profileImageContainer'>
        {!image ? (
          <div className='profileImage flex-row centerAll'>
            <p>{name?.[0]?.toUpperCase() || 'A'}</p>
          </div>
        ) : (
          <img alt='profile' src={image?.url} className='profileImg' />
        )}
        <input
          id='profileFile'
          type='file'
          accept='image/*'
          onChange={handleOnChange}
        />
        <label htmlFor='profileFile' className='cursor'>
          Change Profile Image
        </label>
      </figure>
      <Slider
        open={modal}
        className='imageUploadPopup flex-col align justify'
        variants={opacityModal}
      >
        <img src={previewImage} alt='preview' className='previewImage' />
        <div className='flex-row'>
          <Button className='profileBtn cancelBtn' onClick={handleCancel}>
            CANCEL
          </Button>
          <Button className='profileBtn uploadBtn' onClick={handleSubmit}>
            UPLOAD
          </Button>
        </div>
      </Slider>
    </>
  );
};

export default ProfileImage;
