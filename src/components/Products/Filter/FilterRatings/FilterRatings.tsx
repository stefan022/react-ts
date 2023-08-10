import React, { FC, Fragment } from 'react'

import { filterRatingsData } from './filterRatingsData'

const FilterRatings: FC = (): JSX.Element => {
    return (
        <div className='border border-b-gray-400 p-4'>
            <div className='flex flex-col items-start'>
                <form className="flex flex-col items-start">
                    <p className='mb-3 text-gray-400'>Ratings</p>
                        {
                            filterRatingsData.map((filterRatings) => {
                                const { filterRatingId, stars } = filterRatings;

                                return (
                                    <div key={filterRatingId} className='flex mb-2 last:mb-0'>
                                        <input type="checkbox" id={`${filterRatingId}`} />
                                        <label className='ml-2' htmlFor="apple" >
                                            <div className='flex gap-1'>
                                                { stars.map((star, index) => <Fragment key={index}>{star}</Fragment>) }
                                            </div>
                                        </label>
                                    </div>
                                )
                            })
                        }
                </form>
            </div>
        </div>
    )
}

export default FilterRatings