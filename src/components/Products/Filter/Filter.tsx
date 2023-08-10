import React, { FC, useEffect, useState } from 'react'

import { FilterBrands, FilterClear, FilterColors, FilterPrice, FilterRatings, FilterSkeleton, FilterTitle } from "../../../components"

import { Colors } from '../../../ts/types/Colors';
import { Product } from '../../../ts/types/Product';
import { Products } from '../../../ts/types/Products';

interface IProps {
    products: Products;
}

const Filter: FC<IProps> = ({ products }): JSX.Element => {
    const [ filterBrands, setFilterBrands ] = useState<string[]>([]);
    const [ filterColors, setFilterColors ] = useState<Colors[]>([]);
    const [ filterPrice, setFilterPrice ] = useState<number[]>([]);

    useEffect(() => {
        if (products.length === 0) return;

        const uniqueBrands = new Set();
        const uniqueColors = new Set();
        
        products.forEach((product: Product) => {
            uniqueBrands.add(product.brand);
            setFilterPrice((prev) => [...prev, product.price]);

            product.colors.forEach((color: Colors) => uniqueColors.add(color));
        })

        uniqueBrands.forEach((uniq: any) => setFilterBrands((prev) => [...prev, uniq]));
        uniqueColors.forEach((uniq: any) => setFilterColors((prev) => [...prev, uniq]));

        // eslint-disable-next-line
    }, [products]);

    return (
        <>
            {
                products.length > 0 ? (
                    <div className='w-1/6 border border-gray-400 h-full'>
                        <div className='border border-b-gray-400 flex items-center justify-between p-4'>
                            <FilterTitle/>
                            <FilterClear/>
                        </div>
                        <FilterBrands uniqueBrands={filterBrands}/>
                        <FilterRatings/>
                        <FilterPrice filterPrice={filterPrice}/>
                        <FilterColors uniqueColors={filterColors}/>
                    </div>
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