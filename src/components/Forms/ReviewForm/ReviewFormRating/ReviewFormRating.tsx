import React, { FC } from 'react'

import { AiFillStar } from 'react-icons/ai';
import { stars } from '../../../../constants/stars';

interface IProps {
    handleFillStar: (star: number) => void;
    handleEmptyStar: () => void;
    handleClickStar: (star: number) => void;
    currentFillStar: number;
}

const ReviewFormRating: FC<IProps> = ({ handleFillStar, handleEmptyStar, handleClickStar, currentFillStar }): JSX.Element => {
    return (
        <div className='flex items-center'>
            <p>Your rating:</p>
            <div className='flex'>
            {
                stars.map((star) => {
                    const { starId, starRating } = star;

                    return (
                        <AiFillStar 
                            key={starId}
                            className='cursor-pointer'
                            size={24} 
                            fill={starRating <= currentFillStar ? "#ffcc00" : "#e6e6e6"}
                            onMouseEnter={() => handleFillStar(starRating)}
                            onMouseLeave={() => handleEmptyStar()}
                            onClick={() => handleClickStar(starRating)}
                        />
                    )
                })
            }
            </div>
        </div>
    )
}

export default ReviewFormRating