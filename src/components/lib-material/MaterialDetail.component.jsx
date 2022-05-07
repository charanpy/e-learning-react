import React, { useState } from 'react';
import { errorToaster } from '../../lib/toast';
import { opacityModal } from '../course-video/CourseVideoTabs.component';
import Button from '../shared/button/Button.component';
import BooksSVG from '../shared/svg/Books.svg';
import NoteSVG from '../shared/svg/Note.svg';
import Slider from '../slider/Slider.component';
import Pdf from './Pdf.component';

const MaterialDetail = ({
  open,
  description,
  file,
  title,
  refetch,
  restrict,
  data,
}) => {
  const [material, setMaterial] = useState(false);
  const [loading, setLoading] = useState(false);
  const onClick = async () => {
    try {
      if (restrict) {
        setLoading((toggle) => !toggle);
        const res = await refetch();
        if (res?.data?._id) return setMaterial((toggle) => !toggle);
        return errorToaster('Maximum view count reached for requested PDF');
      }
      setMaterial((toggle) => !toggle);
    } catch (error) {
      if (loading) setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <p className='libMaterialDescription'>This is Material Description</p>
      {!loading && (
        <Button className='materialFileCard flex-row align' onClick={onClick}>
          <BooksSVG className='noteSvg' />
          <p className='libMaterialName' style={{ margin: 0 }}>
            {title}.pdf
          </p>
        </Button>
      )}
      {material && (
        <section className='materialPopup'>
          <Slider variants={opacityModal} open={material}>
            <Pdf file={file} />
          </Slider>
        </section>
      )}
    </>
  );
};

export default MaterialDetail;
