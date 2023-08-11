import React, { FC } from 'react'

import ReactPaginate from 'react-paginate';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

import "./Pagination.scss"

interface IProps {
    pageCount: number;
    onPageChange: (selected: { selected: number }) => void;
    activePage: number;
}

const Pagination: FC<IProps> = ({ pageCount, onPageChange, activePage }): JSX.Element => { 
    return (
        <ReactPaginate
            previousLabel={<BsArrowLeft/>}
            nextLabel={<BsArrowRight/>}
            breakLabel="..."
            pageCount={pageCount}
            onPageChange={onPageChange}
            containerClassName="paginationBtn"
            previousLinkClassName="prevBtn"
            nextLinkClassName="nextBtn"
            nextClassName="nextBtn"
            previousClassName="prevBtn"
            disabledClassName="paginationDisabled"
            activeClassName="paginationActive"
            forcePage={activePage}
        />
    )
}

export default Pagination