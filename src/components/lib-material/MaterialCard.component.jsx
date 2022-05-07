import React, { useState } from 'react';
import { useQuery } from 'react-query';
import request from '../../lib/fetch';
import { opacityModal } from '../course-video/CourseVideoTabs.component';
import Button from '../shared/button/Button.component';
import DownArrowSVG from '../shared/svg/DownArrow.svg';
import FolderSVG from '../shared/svg/Folder.svg';
import Slider from '../slider/Slider.component';
import './material.css';
import MaterialDetail from './MaterialDetail.component';

const fetchFileView = (id) => () =>
  request(`/file-view/${id}`, 'GET', null, true, true).request();

const MaterialCard = ({ material, restrict }) => {
  const { data, refetch } = useQuery(
    ['materialPrivate', material?._id],
    fetchFileView(material?._id),
    {
      enabled: false,
    }
  );
  const [open, setOpen] = useState(false);
  return (
    <section className='libMaterialCard flex-col cursor'>
      <div className='flex-row jus-between align'>
        <div className='flex-row align'>
          <FolderSVG />
          <h1 className='libMaterialName capitalize'>{material?.title}</h1>
        </div>
        <Button onClick={() => setOpen((prev) => !prev)}>
          <DownArrowSVG />
        </Button>
      </div>
      <Slider variants={opacityModal} open={open}>
        <MaterialDetail
          open={open}
          file={material?.file?.url}
          title={material?.title}
          description={material?.description}
          restrict={restrict}
          refetch={refetch}
          data={data}
        />
      </Slider>
    </section>
  );
};

export default MaterialCard;
