import React, { FC } from 'react'

import { TColors } from '../../../../../ts/types/TColors';
import { Link } from 'react-router-dom';
import { Routes } from '../../../../../router/Routes';

import { RoundColors, Stars } from "../../../../../components"

interface IProps {
    phoneId: number
    rating: number;
    status: string;
    phoneName: string;
    description: string;
    price: number;
    colors: TColors[];
    images: string[];
}

const SinglePhoneList: FC<IProps> = ({ phoneId, rating, status, phoneName, description, price, colors, images }): JSX.Element => {
    return (
        <div className='border border-gray-300 w-full p-2'>
            <div className='border border-gray-300 h-[200px] flex'>
                <Link to={`${Routes.PRODUCTS}${Routes.PRODUCT_DETAILS}`}>
                    <div className='border border-gray-300 h-full w-[200px] bg-white'>
                        <img className='w-full h-full' src={images[0]} alt="" />
                    </div>
                </Link>
                <div className='p-2 w-full h-full flex flex-col justify-between'>
                    <div>
                        <div className='flex'>
                            <Stars rating={rating} size={20}/>
                        </div>
                        <div className='flex items-center gap-1'>
                            <div className='bg-green-400 rounded-full w-2 h-2'></div>
                            <p>{status}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h4>{phoneName}</h4>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere optio aliquid, eligendi animi iure corrupti?</p>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex flex-col justify-between'>
                            <p>{price}</p>
                            <div className='flex gap-2'>
                                <RoundColors phoneId={phoneId} colors={colors} largeSize={false}/> 
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <button className="bg-blue-300 py-1 px-3 text-white">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePhoneList