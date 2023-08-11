import React, { FC, useEffect, useState, FormEvent, FormEventHandler } from 'react'

import { FilterBrands, FilterClear, FilterColors, FilterPrice, FilterRatings, FilterSkeleton, FilterTitle } from "../../../components"

import { TColors } from '../../../ts/types/TColors';
import { Product } from '../../../ts/types/Product';
import { Products } from '../../../ts/types/Products';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { FILTERS_CHECKED, RESET_FILTERS_CHECKED } from '../../../features/slices/filterProductsSlice';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { RootState } from '../../../ts/types/RootState';
import { initialRatingsForFilter } from '../../../constants/initialRatingsForFilter';

interface IProps {
    products: Products;
    handleFilterChange: FormEventHandler<HTMLFormElement>;
}

const Filter: FC<IProps> = ({ products, handleFilterChange }): JSX.Element => {
    const [ filterBrands, setFilterBrands ] = useState<string[]>([]);
    const [ filterColors, setFilterColors ] = useState<TColors[]>([]);
    const [ filterPrice, setFilterPrice ] = useState<number[]>([]);

    const { phones } = useAppSelector((state: RootState) => state.phones);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (products.length === 0) return;

        dispatch(RESET_FILTERS_CHECKED);

        const uniqueBrands = new Set();
        const uniqueColors = new Set();
        const filters: { [key: string]: boolean } = {}
        
        products.forEach((product: Product) => {
            uniqueBrands.add(product.brand);
            setFilterPrice((prev) => [...prev, product.price]);

            product.colors.forEach((color: TColors) => uniqueColors.add(color));
        })

        uniqueBrands.forEach((uniq) => {
            filters[uniq as string] = false;
            setFilterBrands((prev) => [...prev, uniq as string]);
        });

        uniqueColors.forEach((uniq) => {
            filters[uniq as TColors] = false;
            setFilterColors((prev) => [...prev, uniq as TColors])
        });

        dispatch(FILTERS_CHECKED({ 
            ...filters,
            ...initialRatingsForFilter
        }));

        // eslint-disable-next-line
    }, [products]);

    const handleFilterClear = (e: FormEvent<HTMLFormElement>) => { 
        dispatch(RESET_FILTERS_CHECKED({
            products: phones
        }));
    };

    return (
        <>
            {
                products.length > 0 ? (
                    <form 
                        className='w-1/6 border border-gray-400 h-full'
                        onChange={handleFilterChange}
                        onSubmit={handleFilterClear}
                    >
                        <div className='border border-b-gray-400 flex items-center justify-between p-4'>
                            <FilterTitle/>
                            <FilterClear/>
                        </div>
                        <div>
                            <FilterBrands uniqueBrands={filterBrands}/>
                            <FilterRatings/>
                            <FilterPrice filterPrice={filterPrice}/>
                            <FilterColors uniqueColors={filterColors}/>
                        </div>
                    </form>
                ) : (
                    <div className='w-1/6'>
                        <FilterSkeleton/>
                    </div>
                )
            }
        </>
    )
}

export default Filter