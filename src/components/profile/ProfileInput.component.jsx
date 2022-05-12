import React, { forwardRef } from 'react';
import './profile.css';

const ProfileInput = forwardRef(
  ({ label, type = 'text', value, display = true }, ref) => {
    return (
      <>
        {display && (
          <div className='flex-row align' style={{ marginBottom: '3rem' }}>
            <div className='profileInfoWrapper'>
              <label className='profileInfo profileInfoText'>{label}</label>
            </div>
            <div className='flex-row profileInputWrapper'>
              <input
                type={type}
                className='profileInput'
                placeholder={label}
                required
                defaultValue={value || ''}
                ref={ref}
                disabled={true}
              />
            </div>
          </div>
        )}
      </>
    );
  }
);

export default ProfileInput;
