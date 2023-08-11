import React, { FC } from 'react'

import { TColors } from '../../../../ts/types/TColors'
import { firstCapitalLatter } from '../../../../utils/helpers/capitalFirstLetter';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { RootState } from '../../../../ts/types/RootState';

interface IProps {
    uniqueColors: TColors[];
}

const FilterColors: FC<IProps> = ({ uniqueColors }): JSX.Element => {
    const { filtersChecked } = useAppSelector((state: RootState) => state.filters);

    return (
        <div className='border border-b-gray-400 p-4'>
            <p className='mb-2 text-gray-400'>TColors</p>
            {
                uniqueColors.length > 0 ? (
                    uniqueColors.map((color: TColors, index) => (
                        <div key={index} className='flex items-center mb-1'>
                            <input 
                                type="checkbox" 
                                id={color} 
                                defaultChecked={filtersChecked[color]}
                            />
                            <label className='ml-2' htmlFor={color}>{firstCapitalLatter(color)}</label>
                        </div>
                    ))
                ) : null
            }
        </div>
    )
}

export default FilterColors