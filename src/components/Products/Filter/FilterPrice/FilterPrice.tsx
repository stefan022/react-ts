import React, { FC, useState, useEffect } from 'react'
import { priceMinAndMax } from '../../../../utils/helpers/priceMinAndMax';
import { calculationDiscount } from '../../../../utils/helpers/calculationDiscount';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { RootState } from '../../../../ts/types/RootState';

interface IProps {
    filterPrice: number[];
    discount: number;
}

const FilterPrice: FC<IProps> = ({ filterPrice, discount }): JSX.Element => {
    const { filterCurrentPrice } = useAppSelector((state: RootState) => state.filters);
    const [ currentPrice, setCurrentPrice ] = useState<number>();

    useEffect(() => setCurrentPrice(filterCurrentPrice) , [filterCurrentPrice]);

    const prices = priceMinAndMax(filterPrice);
    const { minPrice, maxPrice } = prices;

    return (
        <div className='border border-b-gray-400 p-4'>
            <div className='flex items-center gap-2 mb-4'>
                <p className='text-gray-400'>Price:</p>
                <p className='text-gray-400 text-sm'>${currentPrice}</p>
            </div>
            <div>
                <div>
                    <input
                        id='price'
                        type="range" 
                        className='w-full' 
                        min={calculationDiscount(minPrice, discount)} 
                        max={calculationDiscount(maxPrice, discount)}
                    />
                </div>
                <div className='flex justify-between'>
                    <p className='text-gray-400 text-sm relative -top-1'>${calculationDiscount(minPrice, discount)}</p>
                    <p className='text-gray-400 text-sm relative -top-1'>${calculationDiscount(maxPrice, discount)}</p>
                </div>
            </div>
        </div>
    )
}

export default FilterPrice