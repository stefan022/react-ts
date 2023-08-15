import React, { ChangeEvent, FC, useEffect } from 'react'
import { Banner, Filter, ProductsContainerSkeleton } from '../../../components'

import televisionsImage from "../../../assets/televisions.png"
import { useAppSelector } from '../../../hooks/useAppSelector';
import { RootState } from '../../../ts/types/RootState';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { FILTERED_PRODUCTS } from '../../../features/slices/filterProductsSlice';
import { PAGINATION_RESET_TO_FIRST_PAGE } from '../../../features/slices/paginationProductsSlice';
import { Container, ProductsContainer } from '../../../containers';
import { Routes } from '../../../router/Routes';
import { useGetTelevisionsQuery } from '../../../features/API/televisionsAPI';

const Televisions: FC = (): JSX.Element => {
    useGetTelevisionsQuery();

    const { televisions } = useAppSelector((state: RootState) => state.televisions);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(FILTERED_PRODUCTS({
            products: televisions,
        }));

        // eslint-disable-next-line
    }, [televisions]);

    const handleFilterChange = (e: ChangeEvent<HTMLFormElement>) => { 
        const isChecked = e.target.checked;
        const filterName = e.target.id;

        dispatch(FILTERED_PRODUCTS({
            products: televisions,
            filterName,
            isChecked,
        }));
        
        dispatch(PAGINATION_RESET_TO_FIRST_PAGE());
    };  

    return (
        <div>
            <Banner
                title="Televisions"
                bgPosition="bg-center"
                bgNoRepeat="bg-no-repeat"
                image={televisionsImage}
            />
            <Container>
                <div className='flex w-full gap-6 pt-6'>
                    <Filter 
                        products={televisions}
                        handleFilterChange={handleFilterChange}
                    />
                    {
                        televisions.length > 0
                            ? <ProductsContainer productRoute={Routes.TELEVISIONS}/>
                            : <ProductsContainerSkeleton/>
                    }
                </div>
            </Container>
        </div>
    )
}

export default Televisions