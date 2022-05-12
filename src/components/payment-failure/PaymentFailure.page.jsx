import React, { useRef } from 'react';
import { useQuery } from 'react-query';
import { Link, Navigate, useLocation, useParams } from 'react-router-dom';
import CourseImage from '../../assets/course.jpg';
import Layout from '../../layout';
import request from '../../lib/fetch';
import { errorToaster, successToaster } from '../../lib/toast';
import Button from '../shared/button/Button.component';
import LoaderIndicator from '../shared/loader/LoaderIndicator.component';
import './payment-failure.css';

const OrderDetail = ({ title, value }) => {
  return (
    <>
      {value ? (
        <p>
          <span className='orderDetailHeader capitalize'>{title}:</span>
          <span className='orderDetail capitalize'>{value}</span>
        </p>
      ) : (
        ''
      )}
    </>
  );
};

const PaymentPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const courseTitleRef = useRef();
  const issueRef = useRef();
  const buttonRef = useRef();

  const { data, isLoading } = useQuery(['course', id], () =>
    request(`/course/${id}`)
  );

  if (isLoading) return <LoaderIndicator />;
  if (!data?._id && !isLoading)
    return <Navigate to='/dashboard' state={{ from: location }} replace />;

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      buttonRef.current.disabled = true;
      const courseTitle = courseTitleRef?.current?.value;
      const issue = issueRef?.current?.value;

      if (!issue || !id) return errorToaster('Issue is required');

      await request(
        '/issue',
        'POST',
        { issue, courseTitle, course: id },
        true,
        true
      );
      successToaster('Issue submitted successfully');
      courseTitleRef.current.value = '';
      issueRef.current.value = '';
    } catch (error) {
    } finally {
      buttonRef.current.disabled = false;
    }
  };
  return (
    <Layout header='Order'>
      <section className='flex-row orderContainer m-sm align'>
        <figure className='flex-col'>
          <img
            className='orderImage'
            src={data?.image?.url || CourseImage}
            alt={data?.courseTitle || 'Course'}
          />
          <h1 className='orderTitle'>{data?.courseTitle}</h1>
        </figure>

        <figcaption className='flex-col'>
          <OrderDetail title='code' value={data?.code} />
          <OrderDetail title='description' value={data?.description} />
          <OrderDetail title='price' value={data?.price} />
          <OrderDetail title='status' value='Failed' />
          <Link to={`/course/${id}`}>
            <Button className='orderBuy'>Buy Now</Button>
          </Link>
        </figcaption>
      </section>
      <h1 className='courseHeader m-sm'>Report An Issue</h1>
      <form className='orderForm flex-col' onSubmit={handleSubmit}>
        <label className='orderLabel'>Course Title</label>
        <input
          className='orderInput'
          type='text'
          placeholder='Title'
          ref={courseTitleRef}
        />
        <label className='orderLabel'>Issue</label>
        <textarea className='orderInput' ref={issueRef} />
        <Button type='submit' className='issueBtn m-sm' ref={buttonRef}>
          Submit
        </Button>
      </form>
    </Layout>
  );
};

export default PaymentPage;
