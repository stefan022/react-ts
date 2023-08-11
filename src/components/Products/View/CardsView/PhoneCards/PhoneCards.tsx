import React, { FC } from 'react'

import { IPhone } from '../../../../../ts/interfaces/IProducts/IPhone'
import { Pagination, SinglePhoneCard } from "../../../../../components";
import { RootState } from '../../../../../ts/types/RootState';
import { useAppSelector } from '../../../../../hooks/useAppSelector';

import { useAppDispatch } from '../../../../../hooks/useAppDispatch';
import { PAGINATION_CHANGE_PAGE } from '../../../../../features/slices/paginationProductsSlice';

const PhoneCards: FC = (): JSX.Element => {
    const { sortedProducts } = useAppSelector((state: RootState) => state.sorts);
    const { activePage } = useAppSelector((state: RootState) => state.pagination);

    const dispatch = useAppDispatch();

    const productsPerPage = 12;
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
                    const { phoneId, phoneName, colors, price, rating, images } = phone;

                    return (
                        <SinglePhoneCard
                            key={phoneId}
                            phoneId={phoneId}
                            phoneName={phoneName}
                            colors={colors}
                            price={price}
                            rating={rating}
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

export default PhoneCards