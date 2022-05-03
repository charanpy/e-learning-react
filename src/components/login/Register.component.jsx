import React from 'react';
import Button from '../shared/button/Button.component';
import RegisterInput from './RegisterInput.component';
import useRegister from './useRegister';

const isStudent = (role) => role === 'student';

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
    role,
    setRole,
    yearRef,
  ] = useRegister();
  return (
    <form onSubmit={onHandleSubmit}>
      <div className='inputBox w100'>
        <select
          ref={roleRef}
          value={role}
          onChange={(e) => setRole(e?.target?.value)}
        >
          <option value='0' disabled>
            Select
          </option>
          <option value='student'>Student</option>
          <option value='member'>Member</option>
        </select>
        <span>Select User Type</span>
      </div>
      <RegisterInput ref={nameRef} label='Username' />

      <RegisterInput ref={emailRef} label='Email' type='email' />
      <RegisterInput
        ref={rollNoRef}
        label='Roll Number'
        required={isStudent(role)}
        display={isStudent(role)}
      />
      <RegisterInput
        ref={yearRef}
        label='Year'
        required={isStudent(role)}
        display={isStudent(role)}
        type='number'
        min={1}
        max={4}
      />

      <RegisterInput ref={passwordRef} label='Password' type='password' />
      <RegisterInput ref={dobRef} label='DOB' type='date' />
      <RegisterInput
        ref={mobileRef}
        label='Mobile Number'
        type='tel'
        minLength={10}
      />

      <Button disabled={loading} className='login-button'>
        {loading ? 'Registering' : 'Register'}
      </Button>
    </form>
  );
};

export default Register;
