import React from 'react';
import { useUser } from '../../context/UserProvider';
import formatDate from '../course-details/helper';
import Button from '../shared/button/Button.component';
import './profile.css';
import ProfileImage from './ProfileImage.component';
import ProfileInput from './ProfileInput.component';
import useProfile from './useProfile';

const Profile = () => {
  const { user, setProfileImage, logout } = useUser();
  const [rollNoRef, dobRef, mobileRef, nameRef] = useProfile(user?.dob);
  return (
    <section className='profileContainer'>
      <h1 className='profileHeader'>Profile</h1>
      <div className='flex-row jus-between align' style={{ lineHeight: '2.5' }}>
        <p className='profileInfo'>View Profile Info and update your photo</p>
        <Button className='profileBtn cancelBtn logout' onClick={logout}>
          LOGOUT
        </Button>
      </div>
      <hr className='profileLine' />
      <ProfileImage
        name={user?.name}
        image={user?.image}
        setProfileImage={setProfileImage}
      />
      <form>
        <ProfileInput label='Email' type='email' value={user?.email} />
        <ProfileInput label='Username' value={user?.name} ref={nameRef} />

        <ProfileInput
          label='Roll no'
          type='text'
          value={user?.rollNumber}
          ref={rollNoRef}
          display={user?.role === 'student'}
        />
        <ProfileInput
          label='DOB'
          type='date'
          ref={dobRef}
          value={user?.dob ? formatDate(user?.dob, true) : ''}
        />
        <ProfileInput
          ref={mobileRef}
          label='Mobile No'
          type='text'
          value={user?.mobileNumber}
        />
        <ProfileInput
          type='number'
          role={user?.role === 'student'}
          label='Year'
          value={user?.year || 0}
        />
      </form>
    </section>
  );
};

export default Profile;
