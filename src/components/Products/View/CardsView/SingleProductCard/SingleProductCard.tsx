import React, { FC } from 'react'

import { Link } from 'react-router-dom';
import { Routes } from '../../../../../router/Routes';

import { RoundColors, Stars } from "../../../.."
import { TColors } from '../../../../../ts/types/TColors';
import { tooLongString } from '../../../../../utils/helpers/tooLongString';

interface IProps {
    articleId: number;
    articleName: string;
    colors: TColors[];
    price: number;
    rating: number;
    images: string[];
    productRoute: string;
}

const SingleProductCard: FC<IProps> = ({ articleId, articleName, colors, price, rating, images, productRoute }): JSX.Element => {
    return (
        <div className='border border-gray-300 h-[450px] w-1/4 p-2'>
            <div className='border border-gray-300 h-full'>
                <div className='h-3/5'>
                    <Link to={`${Routes.PRODUCTS}${productRoute}/${articleId}`}>
                        <div className='border border-gray-300 h-full bg-white'>
                            <img className='w-full h-full' src={images[0]} alt="" />
                        </div>
                    </Link>
                </div>
                <div className='p-2 flex flex-col justify-between border border-gray-500 h-2/5'>
                    <div className='flex flex-col gap-2'>
                        <div className="flex items-center gap-2">
                            <RoundColors articleId={articleId} colors={colors} largeSize={false}/>
                        </div>
                        <div>
                            <h4>{tooLongString(articleName, 42)}</h4>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center justify-between'>
                            <p>${price}</p>
                            <div className='flex items-center'>
                                { <Stars rating={rating} size={20}/> }
                            </div>
                        </div>
                    
                        <div className='w-full'>
                            <button className='w-full bg-blue-400 hover:bg-blue-500 text-white py-0.5'>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProductCard