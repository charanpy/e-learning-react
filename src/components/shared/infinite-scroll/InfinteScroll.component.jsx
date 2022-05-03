import React from 'react';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

const InfiniteScroll = ({ length, data, Component }) => {
  return (
    <AutoSizer>
      {({ height, width }) => (
        <List
          className='List'
          height={height}
          itemCount={length}
          itemData={data}
          itemSize={70}
          width={width}
        >
          {Component}
        </List>
      )}
    </AutoSizer>
  );
};

export default InfiniteScroll;
