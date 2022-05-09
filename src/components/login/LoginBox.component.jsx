import React, { useRef } from 'react';
import { useUser } from '../../context/UserProvider';
import Button from '../shared/button/Button.component';

const LoginBox = () => {
  const { loading, handleLogin } = useUser();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e?.preventDefault();
    handleLogin(emailRef?.current?.value, passwordRef?.current?.value);
  };
  return (
    <form onSubmit={handleSubmit}>
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
        <input type='password' required name='password' ref={passwordRef} />
        <span>Enter Password</span>
      </div>
      <Button className='login-button' disabled={loading}>
        {loading ? 'Logging...' : 'Login'}
      </Button>
    </form>
  );
};

export default LoginBox;
