import React from 'react';
import { Link } from 'react-router-dom';
import courseImage from '../../assets/course.jpg';
import './course.css';

const Course = ({ courses, slice = 4, header = 'Courses' }) => {
  return (
    <>
      <h1 className='courseHeader m-sm'>{header}</h1>
      <section className='flex-row'>
        {courses?.slice(0, slice)?.map((data) => {
          const course = data?.course || data;
          return (
            <Link to={`/course/${course?._id}`} key={course?._id}>
              <figure className='courseContainer flex-col cursor'>
                <div className='courseImage'>
                  <img
                    src={course?.image?.url || courseImage}
                    alt={course?.courseTitle}
                    className='courseImage'
                    loading='lazy'
                    decoding='async'
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = courseImage;
                    }}
                  />
                </div>
                <figcaption>
                  <h1 className='courseName'>{course?.courseTitle}</h1>
                  <p className='courseInstructors'>{course?.instructors}</p>
                </figcaption>
              </figure>
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default Course;
