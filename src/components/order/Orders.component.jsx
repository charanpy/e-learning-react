import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import request from '../../lib/fetch';
import '../my-enrollments/my-enrollment.css';
import LoaderIndicator from '../shared/loader/LoaderIndicator.component';
import CourseImage from '../../assets/course.jpg';
import './order.css';
import Button from '../shared/button/Button.component';

const Order = ({ course, status }) => {
  return (
    <section className='m-sm'>
      <motion.figure
        className='myEnrollmentCard m-sm cursor flex-row'
        whileTap={{ scale: 0.9 }}
      >
        <div>
          <img
            className='myEnrollmentImage'
            src={course?.image?.url || CourseImage}
            alt={course?.courseTitle || 'course'}
            loading='lazy'
            decoding='async'
          />
        </div>
        <figcaption className='myEnrollDescription'>
          <p className='myEnrollmentTag'>Course</p>
          <h1 className='courseHeader'>{course?.courseTitle}</h1>
          <p className='flex-row align myEnrollmentTag'>
            Status:
            <span className={status === 'paid' ? 'paid' : 'cancel'}>
              {status}
            </span>
          </p>
          <div className='flex-row'>
            <Button>
              <Link
                to={`/course/${course?._id}`}
                className='orderBtn myEnrollmentTag paid'
              >
                View Course
              </Link>
            </Button>
            {status !== 'paid' && (
              <Button>
                <Link
                  to={`/course/failure/${course?._id}`}
                  className='orderBtn myEnrollmentTag cancel'
                >
                  Report
                </Link>
              </Button>
            )}
          </div>
        </figcaption>
      </motion.figure>
    </section>
  );
};

const Orders = () => {
  const { isLoading, data } = useQuery('my-orders', () =>
    request('/order/student', 'GET', null, true, false)
  );

  if (isLoading) return <LoaderIndicator />;

  return (
    <>
      {!data?.length ? (
        <h1 className='courseHeader m-sm'>No Orders Found</h1>
      ) : (
        data?.map((order) => (
          <Order status={order?.status} course={order?.course} />
        ))
      )}
    </>
  );
};

export default Orders;
