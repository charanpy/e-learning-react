import React from 'react';
import courseImage from '../../assets/course.jpg';
import NoteSVG from '../shared/svg/Note.svg';
import PlusSVG from '../shared/svg/Plus.svg';
import TickSVG from '../shared/svg/Tick.svg';
import CourseButton from './CourseButton.component';
import formatDate from './helper';

const CourseBanner = ({ course }) => {
  return (
    <section className='flex-row courseBanner'>
      <div className='flex-col'>
        <h1 className='courseTitle capitalize'>{course?.courseTitle}</h1>
        <p className='courseDescription flt'>{course?.description}</p>
        <p className='courseDetailsInstructors capitalize'>
          <span className='subheading'>Created By:</span> {course?.instructors}
        </p>
        <p className='courseDetailsInstructors capitalize'>
          <span className='subheading'>Created At:</span>{' '}
          {formatDate(course?.createdAt)}
        </p>
      </div>
      <figure className='courseCard flex-col'>
        <div className='courseImg'>
          <img
            width='100%'
            height='200px'
            className='courseDetailsImage'
            src={course?.image?.url || courseImage}
            alt={course?.courseTitle}
          />
        </div>
        <figcaption className='flex-col'>
          <div className='courseInfo flex-col'>
            <h1 className='courseTitle coursePrice'>₹ {course?.price}</h1>
            {/* <Button className='courseButton cursor'>Go To Course</Button> */}
            <CourseButton id={course?._id} />
          </div>
          <div className='courseInfo courseResourceDescription'>
            <h1 className='courseIncludes'>What's included</h1>
            <ul>
              <li className='flex-row align'>
                <PlusSVG />
                <span className='courseIncludeText'>
                  {course?.count?.[0]?.length} Videos
                </span>
              </li>
              <li className='flex-row align'>
                <NoteSVG />
                <span className='courseIncludeText'>
                  {course?.count?.[1]?.length} Materials
                </span>
              </li>
              <li className='flex-row align'>
                <TickSVG />{' '}
                <span className='courseIncludeText'>Online Accessibility</span>
              </li>
            </ul>
          </div>
        </figcaption>
      </figure>
    </section>
  );
};

export default CourseBanner;
