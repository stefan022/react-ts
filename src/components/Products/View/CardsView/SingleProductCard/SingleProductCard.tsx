import React, { FC } from 'react'

import { Link } from 'react-router-dom';
import { Routes } from '../../../../../router/Routes';

import { RoundColors, Stars } from "../../../.."
import { TColors } from '../../../../../ts/types/TColors';
import { tooLongString } from '../../../../../utils/helpers/tooLongString';
import { calculationDiscount } from '../../../../../utils/helpers/calculationDiscount';
import { BsCart3 } from 'react-icons/bs';

interface IProps {
    articleId: number;
    articleName: string;
    colors: TColors[];
    price: number;
    discount: number;
    rating: number;
    images: string[];
    productRoute: string;
}

const SingleProductCard: FC<IProps> = ({ articleId, articleName, colors, price, discount, rating, images, productRoute }): JSX.Element => {
    return (
        <div className='h-[465px] w-1/4 p-2'>
            <div className='border border-gray-400 h-full'>
                <div className='h-3/5'>
                    <Link to={`${Routes.PRODUCTS}${productRoute}/${articleId}`}>
                        <div className='border-b border-b-gray-400 h-full bg-white'>
                            <img className='w-full h-full p-2' src={images[0]} alt="" />
                        </div>
                    </Link>
                </div>
                <div className='p-2 flex flex-col justify-between h-2/5'>
                    <div className='flex flex-col gap-2'>
                        <div className="flex items-center gap-2">
                            <RoundColors articleId={articleId} colors={colors} largeSize={false}/>
                        </div>
                        <div>
                            <h4>{tooLongString(articleName, 42)}</h4>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-end justify-between'>
                            <div>
                                <div className='flex items-end gap-2'>
                                    <p className='text-xs text-gray-400 line-through'>${price}</p>
                                    <p className='text-xs text-red-400 font-bold'>({discount}% off)</p>
                                </div>
                                <h4>${calculationDiscount(price, discount)}</h4>
                            </div>
                            <div className='flex items-center'>
                                { <Stars rating={rating} size={20}/> }
                            </div>
                        </div>
                        <div className='w-full'>
                            <button className='w-full bg-blue-400 hover:bg-blue-500 transition-all text-white py-0.5 flex justify-center items-center gap-2'>
                                <p>Add to Cart</p>
                                <BsCart3 className='text-white' size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProductCard