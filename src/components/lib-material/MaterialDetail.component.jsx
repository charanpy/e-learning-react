import React, { lazy, useState } from 'react';
import { errorToaster } from '../../lib/toast';
import Button from '../shared/button/Button.component';
import BooksSVG from '../shared/svg/Books.svg';
import CloseSVG from '../shared/svg/Close.svg';
const Pdf = lazy(() => import('./Pdf.component'));

const getUrl = (file) =>
  `http://docs.google.com/gview?url=${file}&embedded=true`;

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
        if (res?.status === 'success') {
          return setMaterial((toggle) => !toggle);
          // return window.open(getUrl(file || res?.data?.file?.url));
        }
        return errorToaster('Maximum view count reached for requested PDF');
      }
      setMaterial((toggle) => !toggle);
      // window.open(getUrl(file || data?.file?.url));
    } catch (error) {
      if (loading) setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div style={{ position: 'relative' }}>
      <p className='libMaterialDescription'>{description}</p>
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
          <Pdf file={file || data?.file?.url} />
          <Button
            className='closeMat'
            onClick={() => setMaterial((prev) => !prev)}
          >
            <CloseSVG />
          </Button>
        </section>
      )}
    </div>
  );
};

export default MaterialDetail;
