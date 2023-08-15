import React, { ChangeEvent, FC, useEffect } from 'react'
import { Banner, Filter, ProductsContainerSkeleton } from '../../../components'

import tabletsImage from "../../../assets/tablets.png"
import { useGetTabletsQuery } from '../../../features/API/tabletsAPI';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { RootState } from '../../../ts/types/RootState';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { FILTERED_PRODUCTS } from '../../../features/slices/filterProductsSlice';
import { PAGINATION_RESET_TO_FIRST_PAGE } from '../../../features/slices/paginationProductsSlice';
import { Container, ProductsContainer } from '../../../containers';
import { Routes } from '../../../router/Routes';

const Tablets: FC = (): JSX.Element => {
    useGetTabletsQuery();

    const { tablets } = useAppSelector((state: RootState) => state.tablets);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(FILTERED_PRODUCTS({
            products: tablets,
        }));

        // eslint-disable-next-line
    }, [tablets]);

    const handleFilterChange = (e: ChangeEvent<HTMLFormElement>) => { 
        const isChecked = e.target.checked;
        const filterName = e.target.id;

        dispatch(FILTERED_PRODUCTS({
            products: tablets,
            filterName,
            isChecked,
        }));
        
        dispatch(PAGINATION_RESET_TO_FIRST_PAGE());
    };  

    return (
        <div>
            <Banner
                title="Tablets"
                bgPosition="bg-center"
                bgNoRepeat="bg-no-repeat"
                image={tabletsImage}
            />
            <Container>
                <div className='flex w-full gap-6 pt-6'>
                    <Filter 
                        products={tablets}
                        handleFilterChange={handleFilterChange}
                    />
                    {
                        tablets.length > 0
                            ? <ProductsContainer productRoute={Routes.TABLETS}/>
                            : <ProductsContainerSkeleton/>
                    }
                </div>
            </Container>
        </div>
    )
}

export default Tablets