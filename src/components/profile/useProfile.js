import { useEffect, useRef } from 'react';
import formatDate from '../course-details/helper';

const useProfile = (dob) => {
  const rollNoRef = useRef();
  const dobRef = useRef();
  const mobileRef = useRef();
  const nameRef = useRef();

  useEffect(() => {
    console.log(formatDate(dob, true));
    if (dobRef?.current) dobRef.current.value = formatDate(dob, true);
    // eslint-disable-next-line
  }, []);

  return [rollNoRef, dobRef, mobileRef, nameRef];
};

export default useProfile;
