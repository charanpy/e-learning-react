import { useRef } from 'react';
import { useUser } from '../../context/UserProvider';

const useRegister = () => {
  const { handleRegister, loading } = useUser();
  const roleRef = useRef();
  const rollNoRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const dobRef = useRef();
  const mobileRef = useRef();
  const nameRef = useRef();

  const onHandleSubmit = (e) => {
    e?.preventDefault();

    const role = roleRef?.current?.value;
    const rollNumber = rollNoRef?.current?.value;
    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;
    const dob = dobRef?.current?.value;
    const mobileNumber = mobileRef?.current?.value;
    const name = nameRef?.current?.value;

    handleRegister({
      role,
      rollNumber,
      email,
      password,
      dob,
      mobileNumber,
      name,
    });
  };

  return [
    roleRef,
    rollNoRef,
    emailRef,
    passwordRef,
    dobRef,
    mobileRef,
    nameRef,
    onHandleSubmit,
    loading,
  ];
};

export default useRegister;
