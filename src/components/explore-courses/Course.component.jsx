import React from 'react';
import { Link } from 'react-router-dom';
import courseImage from '../../assets/course.jpg';
import './course.css';

const Course = ({ courses, slice = 4 }) => {
  console.log('course', courses?.length);
  return (
    <>
      <h1 className='courseHeader'>Courses</h1>
      <section className='flex-row'>
        {courses?.slice(0, slice)?.map((course) => (
          <Link to={`/course/${course?._id}`} key={course?._id}>
            <figure className='courseContainer flex-col cursor'>
              <div className='courseImage'>
                <img
                  src={course?.image?.url || courseImage}
                  alt={course?.courseTitle}
                  className='courseImage'
                />
              </div>
              <figcaption>
                <h1 className='courseName'>{course?.courseTitle}</h1>
                <p className='courseInstructors'>{course?.instructors}</p>
              </figcaption>
            </figure>
          </Link>
        ))}
      </section>
    </>
  );
};

export default Course;
