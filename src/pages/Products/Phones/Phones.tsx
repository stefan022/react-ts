import React, { FC, ChangeEvent, useEffect } from 'react'

import { Banner, Filter, ProductsContainerSkeleton } from '../../../components'
import { ProductsContainer, Container } from '../../../containers';

import { RootState } from '../../../ts/types/RootState';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useGetPhonesQuery } from '../../../features/API/phonesAPI';
import { FILTERED_PRODUCTS } from '../../../features/slices/filterProductsSlice';


import phonesImage from "../../../assets/phones.png";

const Phones: FC = (): JSX.Element => {
    useGetPhonesQuery();

    const { phones } = useAppSelector((state: RootState) => state.phones);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(FILTERED_PRODUCTS({
            products: phones,
        }));

        // eslint-disable-next-line
    }, [phones]);

    const handleFilterChange = (e: ChangeEvent<HTMLFormElement>) => { 
        dispatch(FILTERED_PRODUCTS({
            products: phones,
            filterName: e.target.id,
            isChecked: e.target.checked
        }))
    };  

    return (
        <div>
            <Banner
                title="Phones"
                bgPosition="bg-center"
                bgNoRepeat="bg-no-repeat"
                image={phonesImage}
            />
            <Container>
                <div className='flex w-full gap-6 pt-6'>
                    <Filter 
                        products={phones}
                        handleFilterChange={handleFilterChange}
                    />
                    {
                        phones.length > 0
                            ? <ProductsContainer/>
                            : <ProductsContainerSkeleton/>
                    }
                </div>
            </Container>
        </div>
    )
}

export default Phones