import React, { FC } from 'react'

import { Link } from 'react-router-dom';
import { Routes } from '../../../../../router/Routes';

import { SingleProductColors, Stars } from "../../../../../components"
import { Colors } from '../../../../../ts/types/Colors';

interface IProps {
    phoneId: number;
    phoneName: string;
    colors: Colors[];
    price: number;
    rating: number;
    images: string[];
}

const SinglePhoneCard: FC<IProps> = ({ phoneId, phoneName, colors, price, rating, images }): JSX.Element => {
    return (
        <div className='border border-gray-300 h-[450px] w-1/4 p-2'>
            <div className='border border-gray-300 h-full'>
                <div className='h-3/5'>
                    <Link to={`${Routes.PRODUCTS}${Routes.PRODUCT_DETAILS}`}>
                        <div className='border border-gray-300 h-full bg-white'>
                            <img className='w-full h-full' src={images[0]} alt="" />
                        </div>
                    </Link>
                </div>
                <div className='p-2 flex flex-col justify-between border border-gray-500 h-2/5'>
                    <div className='flex flex-col gap-2'>
                        <div className="flex items-center gap-2">
                            <SingleProductColors phoneId={phoneId} colors={colors}/>
                        </div>
                        <div>
                            <h4>{phoneName}</h4>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center justify-between'>
                            <p>{price}</p>
                            <div className='flex items-center'>
                                { <Stars rating={rating}/> }
                            </div>
                        </div>
                    
                        <div className='w-full'>
                            <button className='w-full bg-blue-300'>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePhoneCard