import React from 'react';
import { Pagination } from 'antd';

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize}) => {
    return (
      <>
        <Pagination 
          total={totalItemsCount} 
          current={currentPage}
          showSizeChanger={false}
          onChange={(currentPage) => onPageChanged (currentPage) }
        />
      </>
    )
};

export default Paginator;