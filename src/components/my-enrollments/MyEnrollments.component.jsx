import React from 'react';
import { motion } from 'framer-motion';
import './my-enrollment.css';
import VideoSVG from '../shared/svg/Video.svg';
import { Link } from 'react-router-dom';

const MyEnrollments = ({ course }) => {
  return (
    <>
      {course?.recentWatched?.title ? (
        <section className='m-sm'>
          <h1 className='courseHeader'>Continue Learning</h1>
          <Link
            to={`/video/${course?.course?._id}?video=${course?.recentWatched?.priority}`}
          >
            <motion.figure
              className='myEnrollmentCard m-sm cursor flex-row'
              whileTap={{ scale: 0.9 }}
            >
              <div>
                <img
                  className='myEnrollmentImage'
                  alt={course?.course?.courseTitle}
                  src={course?.course?.image?.url}
                  loading='lazy'
                  decoding='async'
                />
              </div>
              <figcaption className='myEnrollDescription'>
                <p className='myEnrollmentTag'>Course</p>
                <h1 className='courseHeader'>{course?.course?.courseTitle}</h1>
                <p className='flex-row align'>
                  <VideoSVG />
                  <span className='myEnrolVideo capitalize'>
                    {course?.recentWatched?.title}
                  </span>
                </p>
              </figcaption>
            </motion.figure>
          </Link>
        </section>
      ) : (
        ''
      )}
    </>
  );
};

export default MyEnrollments;
