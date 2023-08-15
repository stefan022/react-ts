import React, { ChangeEvent, FC, useEffect } from 'react'
import { Banner, Filter, ProductsContainerSkeleton } from '../../../components'

import laptopsImage from "../../../assets/laptops.png"
import { useAppSelector } from '../../../hooks/useAppSelector';
import { RootState } from '../../../ts/types/RootState';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { FILTERED_PRODUCTS } from '../../../features/slices/filterProductsSlice';
import { PAGINATION_RESET_TO_FIRST_PAGE } from '../../../features/slices/paginationProductsSlice';
import { Container, ProductsContainer } from '../../../containers';
import { Routes } from '../../../router/Routes';
import { useGetLaptopsQuery } from '../../../features/API/laptopsAPI';

const Laptops: FC = (): JSX.Element => {
    useGetLaptopsQuery();

    const { laptops } = useAppSelector((state: RootState) => state.laptops);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(FILTERED_PRODUCTS({
            products: laptops,
        }));

        // eslint-disable-next-line
    }, [laptops]);

    const handleFilterChange = (e: ChangeEvent<HTMLFormElement>) => { 
        const isChecked = e.target.checked;
        const filterName = e.target.id;

        dispatch(FILTERED_PRODUCTS({
            products: laptops,
            filterName,
            isChecked,
        }));
        
        dispatch(PAGINATION_RESET_TO_FIRST_PAGE());
    };  

    return (
        <div>
            <Banner
                title="Laptops"
                bgPosition="bg-center"
                bgNoRepeat="bg-no-repeat"
                image={laptopsImage}
            />
            <Container>
                <div className='flex w-full gap-6 pt-6'>
                    <Filter 
                        products={laptops}
                        handleFilterChange={handleFilterChange}
                    />
                    {
                        laptops.length > 0
                            ? <ProductsContainer productRoute={Routes.LAPTOPS}/>
                            : <ProductsContainerSkeleton/>
                    }
                </div>
            </Container>
        </div>
    )
}

export default Laptops