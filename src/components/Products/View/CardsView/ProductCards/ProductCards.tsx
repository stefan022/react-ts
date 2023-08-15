import React, { FC } from 'react'

import { Pagination, SingleProductCard } from "../../../..";
import { RootState } from '../../../../../ts/types/RootState';
import { useAppSelector } from '../../../../../hooks/useAppSelector';

import { useAppDispatch } from '../../../../../hooks/useAppDispatch';
import { PAGINATION_CHANGE_PAGE } from '../../../../../features/slices/paginationProductsSlice';
import { IProduct } from '../../../../../ts/interfaces/IProducts/IProduct';

interface IProps {
    productRoute: string;
}

const ProductCards: FC<IProps> = ({ productRoute }): JSX.Element => {
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
                paginationProducts.map((product: IProduct) => {
                    const { articleId, articleName, colors, price, rating, images } = product;

                    return (
                        <SingleProductCard
                            key={articleId}
                            articleId={articleId}
                            articleName={articleName}
                            colors={colors}
                            price={price}
                            rating={rating}
                            images={images}
                            productRoute={productRoute}
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

export default ProductCards