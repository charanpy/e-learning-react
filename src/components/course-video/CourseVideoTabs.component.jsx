import React, { useState } from 'react';
import Button from '../shared/button/Button.component';
import Pagination from '../shared/pagination/Paginate.component';
import DownloadSVG from '../shared/svg/Download.svg';
import Slider from '../slider/Slider.component';

export const opacityModal = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
  exit: { opacity: 0 },
};

const AboutTab = ({ course }) => {
  return (
    <Slider open variants={opacityModal}>
      <section className='videoTabWrapper flex-col'>
        <h1 className='aboutCourse'>About this course</h1>
        <p className='aboutText'>{course?.description || 'No description'}</p>
        <h1 className='aboutText'>
          <span className='aboutCourse'>Title: </span>
          {course?.courseTitle}
        </h1>
        {course?.instructors && (
          <h1 className='aboutText'>
            <span className='aboutCourse'>Instructors: </span>
            {course?.instructors}
          </h1>
        )}
        <h1 className='aboutText'>
          <span className='aboutCourse'>Total Videos: </span>
          {course?.count?.[0]?.length || 0}
        </h1>
        <h1 className='aboutText'>
          <span className='aboutCourse'>Total Materials: </span>
          {course?.count?.[1]?.length || 0}
        </h1>
      </section>
    </Slider>
  );
};

const DescriptionTab = ({ video }) => {
  return (
    <Slider open variants={opacityModal}>
      <section className='videoTabWrapper flex-col'>
        <h1 className='aboutCourse'>Description of Video</h1>
        <p className='aboutText'>{video?.description || 'No description'}</p>
      </section>
    </Slider>
  );
};

const RenderMaterials = (props) => {
  return (
    <>
      {props?.data?.map((material, index) => (
        <div
          key={material?._id}
          className='videoSyllabusCard flex-row jus-between align'
        >
          <h1>
            <span>{(props?.page * 10 + index + 1 + '').padStart(2, 0)}</span>
            <span> {material?.title}</span>
          </h1>
          <a
            href={material?.file?.url}
            target='_blank'
            rel='noopener noreferrer'
          >
            <DownloadSVG />
          </a>
        </div>
      ))}
    </>
  );
};

const MaterialTab = ({ materials }) => {
  return (
    <Slider open variants={opacityModal}>
      <section className='videoTabWrapper flex-col'>
        {materials?.length && (
          <Pagination
            data={materials}
            header='Course Materials'
            Component={RenderMaterials}
          />
        )}
      </section>
    </Slider>
  );
};

const borderStyle = (index, currentIndex) => ({
  borderBottom: index === currentIndex ? '3px solid var(--blue-700)' : '',
});

const CourseVideoTabs = ({ course, selectedVideo, materials, children }) => {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <div className='videoTab'>
      <div className='flex-row align'>
        <Button
          className='videoTabHeader'
          onClick={() => setCurrentTab(0)}
          style={borderStyle(0, currentTab)}
        >
          ABOUT
        </Button>
        <Button
          className='videoTabHeader'
          onClick={() => setCurrentTab(1)}
          style={borderStyle(1, currentTab)}
        >
          DESCRIPTION
        </Button>
        <Button
          className='videoTabHeader'
          onClick={() => setCurrentTab(2)}
          style={borderStyle(2, currentTab)}
        >
          MATERIALS
        </Button>
        <Button
          className='videoTabHeader syllabusButton'
          onClick={() => setCurrentTab(3)}
          style={borderStyle(3, currentTab)}
        >
          SYLLABUS
        </Button>
      </div>

      {currentTab === 0 && <AboutTab course={course} />}
      {currentTab === 1 && <DescriptionTab video={selectedVideo} />}
      {currentTab === 2 && <MaterialTab materials={materials} />}
      {currentTab === 3 && children}
    </div>
  );
};

export default CourseVideoTabs;
