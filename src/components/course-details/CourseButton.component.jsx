import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { client } from '../../App';
import { useUser } from '../../context/UserProvider';
import request from '../../lib/fetch';
import { successToaster } from '../../lib/toast';
import Button from '../shared/button/Button.component';

const generateButtonText = (data, role) => {
  if (data && data?.access) return 'Go to Course';
  if (data && !data?.access) return 'Requested';
  return role === 'student' ? 'Request' : 'Buy Now';
};

const CourseButton = ({ id }) => {
  const { user } = useUser();
  const navigate = useNavigate();
  const buttonRef = useRef();
  const { data, isLoading, isError } = useQuery(['my-course', id], () =>
    request(`/enrol-course/${id}`, 'GET', null, true, false)
  );
  const [buttonState, setButtonState] = useState('');

  if (isError) return;

  const handleClick = async () => {
    if (data && data?.access) {
      return navigate(`/video/${id}`);
    }
    if (data || buttonState === 'requested') return;
    if (user?.role !== 'student') return;
    try {
      buttonRef.current.disabled = true;
      await request('/enrol-course', 'POST', { courseId: id }, true);
      client.invalidateQueries(['my-course', id]);
      successToaster('Course requested');
      setButtonState('Requested');
    } catch (error) {
    } finally {
      buttonRef.current.disabled = false;
    }
  };
  return (
    <Button
      className='courseButton cursor'
      onClick={handleClick}
      ref={buttonRef}
    >
      {isLoading
        ? 'Loading...'
        : buttonState || generateButtonText(data, user?.role)}
    </Button>
  );
};

export default CourseButton;
