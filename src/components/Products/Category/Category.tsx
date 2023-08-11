import React, { FC } from 'react'

import { Link } from 'react-router-dom'
import { categoryWidthImage } from '../../../constants/categoryWidthImage';
import "./Category.scss"

interface IProps {
    route: string;
    categoryName: string;
    image: string;
}

const Category: FC<IProps> = ({ route, categoryName, image }): JSX.Element => {
    const lowerCaseCategoryName = categoryName.toLowerCase();

    return (
        <Link to={route}>
            <div className='w-full h-full p-8 border border-gray-200 bg-blue-400 flex flex-col justify-between'>
                <p className='text-white he'>{categoryName}</p>
                <div className='flex items-center justify-center w-full h-full'>
                    <img 
                        className={`
                            ${categoryWidthImage[lowerCaseCategoryName]}
                            ds
                        `} 
                        src={image} 
                        alt="" 
                    />
                </div>
            </div>
        </Link>
    )
}

export default Category