import React, {useState} from 'react';
import style from './Paginator.module.css';
import Pagination from 'react-bootstrap/Pagination';

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize=10}) => {

    let pagesCount = Math.ceil ((totalItemsCount)/ pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push (i)
    }

    let portionCount = Math.ceil(pagesCount/portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber-1)*portionSize+1;
    let rightPortionPageNumber = portionNumber*portionSize;

  
    return (
      <Pagination className={style.numberPage} >
        {portionNumber>1 && 
          <Pagination.Prev onClick={()=>{ setPortionNumber(portionNumber - 1) }} />
        }
        {pages
          .filter(p=> p >= leftPortionPageNumber && p <= rightPortionPageNumber )
          .map ((p) => {
            return (
              <Pagination.Item
                active={currentPage === p}
                onClick={() => {
                onPageChanged (p)
              }}> {p} 
              </Pagination.Item>
              )
          })}
        {portionCount>portionNumber && 
          <Pagination.Next onClick={()=>setPortionNumber(portionNumber + 1 )} />
        }    
      </Pagination> 
    )
};

export default Paginator;