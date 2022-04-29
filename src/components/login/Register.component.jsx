import React from 'react';
import Button from '../shared/button/Button.component';
import useRegister from './useRegister';

const Register = () => {
  const [
    roleRef,
    rollNoRef,
    emailRef,
    passwordRef,
    dobRef,
    mobileRef,
    nameRef,
    onHandleSubmit,
    loading,
  ] = useRegister();
  return (
    <form onSubmit={onHandleSubmit}>
      <div className='inputBox w100'>
        <select ref={roleRef} defaultValue='0'>
          <option value='0' disabled>
            Select
          </option>
          <option value='student'>Student</option>
          <option value='member'>Member</option>
        </select>
        <span>Select User Type</span>
      </div>
      <div className='inputBox w100'>
        <input
          type='text'
          required
          name='name'
          autoComplete='false'
          ref={nameRef}
        />
        <span>Enter Username</span>
      </div>
      <div className='inputBox w100'>
        <input type='text' name='rollNo' autoComplete='false' ref={rollNoRef} />
        <span>Enter RollNumber</span>
      </div>
      <div className='inputBox w100'>
        <input
          type='email'
          required
          name='email'
          autoComplete='false'
          ref={emailRef}
        />
        <span>Enter Email</span>
      </div>
      <div className='inputBox w100'>
        <input
          type='password'
          required
          name='password'
          autoComplete='false'
          ref={passwordRef}
        />
        <span>Enter Password</span>
      </div>
      <div className='inputBox w100'>
        <input
          type='date'
          required
          name='dob'
          autoComplete='false'
          ref={dobRef}
        />
      </div>
      <div className='inputBox w100'>
        <input
          type='number'
          required
          name='mobileNo'
          autoComplete='false'
          ref={mobileRef}
        />
        <span>Enter Mobile Number</span>
      </div>
      <Button disabled={loading} className='login-button'>
        {loading ? 'Registering' : 'Register'}
      </Button>
    </form>
  );
};

export default Register;
