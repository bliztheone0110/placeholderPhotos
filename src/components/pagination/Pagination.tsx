import React, { FC } from 'react';
import c from './pagination.module.css'
import FlexBox from './../containers/flexBox/FlexBox';

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    setCurrentPage: (el: number) => void;
}

const Pagination: FC<PaginationProps> = (props) => {
    let arr = [] as number[];

    for (let i = 1; i <= props.totalPages; i++) {
        arr[i] = i;
    }

    return (
        <div>
            <FlexBox alignItems='center' justifyContent='center'>
                {arr.map(el =>
                    <div
                        key={el}
                        onClick={() => props.setCurrentPage(el)}
                        className={c.pagination_element}
                        style={el === props.currentPage ? {border: '1px solid blue',color: 'blue'} : {border: '1px solid #0b0b0b'}}
                    >
                        {String(el)}
                    </div>)
                }
            </FlexBox>
        </div>
    )
};

export default Pagination;