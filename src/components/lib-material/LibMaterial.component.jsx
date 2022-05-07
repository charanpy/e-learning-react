import React from 'react';
import { useQuery } from 'react-query';
import request from '../../lib/fetch';
import LoaderIndicator from '../shared/loader/LoaderIndicator.component';
import MaterialCard from './MaterialCard.component';

const fetchMaterial = (access = 'public') =>
  request(`/lib-material/student?restrict=${access}`, 'GET', null, true, false);

const LibMaterial = () => {
  const { isLoading, data } = useQuery('lib-material-public', () =>
    fetchMaterial()
  );

  const { isLoading: loading, data: privateMaterial } = useQuery(
    'lib-material-private',
    () => fetchMaterial('private'),
    {
      enabled: !!data,
    }
  );

  if (isLoading) return <LoaderIndicator />;
  return (
    <>
      <h1 className='courseHeader'>Public Materials</h1>
      {data?.length ? (
        data?.map((material) => (
          <MaterialCard
            material={material}
            key={material?._id}
            restrict={false}
          />
        ))
      ) : (
        <h1 className='courseHeader my'>No Public Material Found</h1>
      )}
      <h1 className='courseHeader'>Restricted Materials</h1>
      {privateMaterial?.length ? (
        privateMaterial?.map((material) => (
          <MaterialCard
            material={material}
            key={material?._id}
            restrict={true}
          />
        ))
      ) : (
        <h1 className='courseHeader my'>No Restricted Material Found</h1>
      )}
    </>
  );
};

export default LibMaterial;
