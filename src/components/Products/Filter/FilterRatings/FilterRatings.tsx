import React, { FC, Fragment } from 'react'

import { filterRatingsData } from './filterRatingsData'
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { RootState } from '../../../../ts/types/RootState';

const FilterRatings: FC = (): JSX.Element => {
    const { filtersChecked } = useAppSelector((state: RootState) => state.filters);

    return (
        <div className='border border-b-gray-400 p-4'>
            <div className="flex flex-col items-start">
                <p className='mb-2 text-gray-400'>Ratings</p>
                {
                    filterRatingsData.map((filterRatings) => {
                        const { filterRatingId, stars } = filterRatings;

                        return (
                            <div key={filterRatingId} className='flex mb-1 last:mb-0'>
                                <input 
                                    type="checkbox" 
                                    id={`${filterRatingId}`} 
                                    defaultChecked={filtersChecked[`${filterRatingId}`]}
                                />
                                <label className='ml-2' htmlFor={`${filterRatingId}`} >
                                    <div className='flex gap-1'>
                                        { stars.map((star, index) => <Fragment key={index}>{star}</Fragment>) }
                                    </div>
                                </label>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FilterRatings