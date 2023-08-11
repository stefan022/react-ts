import React, { FC } from 'react'
import { priceMinAndMax } from '../../../../utils/helpers/priceMinAndMax';

interface IProps {
    filterPrice: number[];
}

const FilterPrice: FC<IProps> = ({ filterPrice }): JSX.Element => {
    const prices = priceMinAndMax(filterPrice);

    return (
        <div className='border border-b-gray-400 p-4'>
            <div className='flex items-center gap-2 mb-4'>
                <p className='text-gray-400'>Price:</p>
                <p className='text-gray-400 text-sm'>${prices.minPrice}</p>
            </div>
            <div>
                <div>
                    <input
                        type="range" 
                        className='w-full' 
                        min={prices.minPrice} 
                        max={prices.maxPrice}
                    />
                </div>
                <div className='flex justify-between'>
                    <p className='text-gray-400 text-sm relative -top-1'>${prices.minPrice}</p>
                    <p className='text-gray-400 text-sm relative -top-1'>${prices.maxPrice}</p>
                </div>
            </div>
        </div>
    )
}

export default FilterPrice