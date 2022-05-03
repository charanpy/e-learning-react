import { useRef, useState } from 'react';
import { useUser } from '../../context/UserProvider';
import { errorToaster } from '../../lib/toast';

const useRegister = () => {
  const { handleRegister, loading } = useUser();
  const [role, setRole] = useState('0');
  const roleRef = useRef();
  const rollNoRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const dobRef = useRef();
  const mobileRef = useRef();
  const nameRef = useRef();
  const yearRef = useRef();

  const onHandleSubmit = (e) => {
    e?.preventDefault();

    const rollNumber = rollNoRef?.current?.value;
    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;
    const dob = dobRef?.current?.value;
    const mobileNumber = mobileRef?.current?.value;
    const name = nameRef?.current?.value;
    const year = yearRef?.current?.value;

    if (role === 'student') {
      if (!rollNumber || !year) return errorToaster('Roll No Year is required');
      if (year <= 0 || year > 4)
        return errorToaster('Year must be less than or equal to 4');
    }

    if (!email || !password || !dob || !mobileNumber || !name)
      return errorToaster('Please fill all fields');
    handleRegister({
      role,
      rollNumber,
      email,
      password,
      dob,
      mobileNumber,
      name,
      year,
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
    role,
    setRole,
    yearRef,
  ];
};

export default useRegister;
