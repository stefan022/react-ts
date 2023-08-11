import React, { FC } from 'react'

import { useAppSelector } from '../../../../../hooks/useAppSelector';
import { RootState } from '../../../../../ts/types/RootState';
import { IPhone } from '../../../../../ts/interfaces/IProducts/IPhone';

import { Pagination, SinglePhoneList } from "../../../../../components"
import { useAppDispatch } from '../../../../../hooks/useAppDispatch';
import { PAGINATION_CHANGE_PAGE } from '../../../../../features/slices/paginationProductsSlice';

const PhoneLists: FC = (): JSX.Element => {
    const { sortedProducts } = useAppSelector((state: RootState) => state.sorts);
    const { activePage } = useAppSelector((state: RootState) => state.pagination);

    const dispatch = useAppDispatch();

    const productsPerPage = 5;
    const productsVisible = activePage * productsPerPage;

    const paginationProducts = sortedProducts.slice(
        productsVisible,
        productsVisible + productsPerPage
    );

    const pageCount = Math.ceil(sortedProducts.length / productsPerPage);
    const onPageChange = ({ selected }: { selected: number }) => {
        dispatch(PAGINATION_CHANGE_PAGE({ pageNumber: selected }))
    };

    return (
        <>
            {
                paginationProducts ?
                paginationProducts.map((phone: IPhone) => {
                    const { phoneId, phoneName, status, colors, price, rating, images } = phone;

                    return (
                        <SinglePhoneList
                            key={phoneId}
                            phoneId={phoneId}
                            phoneName={phoneName}
                            description='$desc'
                            colors={colors}
                            price={price}
                            rating={rating}
                            status={status}
                            images={images}
                        />
                    )
                }) : <p>Loading..</p>
            }
            <div className='flex justify-center py-2 w-full'>
                <Pagination
                    pageCount={pageCount}
                    onPageChange={onPageChange}
                    activePage={activePage}
                />
            </div>
        </>
    )
}

export default PhoneLists