import React, { FC } from 'react'

import { TColors } from '../../../../../ts/types/TColors';
import { Link } from 'react-router-dom';
import { Routes } from '../../../../../router/Routes';

import { Bookmark, RoundColors, Stars } from "../../../.."
import { firstCapitalLatter } from '../../../../../utils/helpers/capitalFirstLetter';
import { BsCart3 } from 'react-icons/bs';
import { calculationDiscount } from '../../../../../utils/helpers/calculationDiscount';

interface IProps {
    articleId: number
    articleName: string;
    brand: string;
    rating: number;
    status: string;
    description: string;
    price: number;
    discount: number;
    colors: TColors[];
    images: string[];
    productRoute: string;
    bookmarked: boolean;
    category: string;
}

const SingleProductList: FC<IProps> = ({ articleId, articleName, rating, status, description, price, discount, colors, images, productRoute, bookmarked, brand, category }): JSX.Element => {
    const newPrice = calculationDiscount(price, discount);
    
    return (
        <div className='w-full p-2'>
            <div className='border border-gray-400 h-[200px] flex'>
                <Link to={`${Routes.PRODUCTS}${productRoute}/${articleId}`}>
                    <div className='border-r border-gray-400 h-full w-[200px] bg-white'>
                        <img className='w-full h-full p-2' src={images[0]} alt="" />
                    </div>
                </Link>
                <div className='py-2 px-4 w-full h-full flex flex-col justify-between'>
                    <div>
                        <div className='flex justify-between items-center'>
                            <div className='flex'>
                                <Stars rating={rating} size={20}/>
                            </div>
                            <Bookmark 
                                articleId={articleId} 
                                bookmarked={bookmarked}
                                articleName={articleName}
                                price={newPrice}
                                status={status}
                                category={category}
                            />
                        </div>
                        <div className='flex items-center gap-1'>
                            <div className='bg-green-400 rounded-full w-2 h-2'></div>
                            <p>{firstCapitalLatter(status)}</p>
                        </div>
                    </div>
                    <h4>{articleName}</h4>
                    <p>{description}</p>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col justify-between'>
                            <div className='flex items-center gap-2'>
                                <h4 className='font-bold'>${newPrice}</h4>
                                <p className='text-xs text-gray-400 line-through'>${price}</p>
                                <p className='text-red-400 font-bold'>({discount}% off)</p>
                            </div>
                            <div className='flex gap-2'>
                                <RoundColors articleId={articleId} colors={colors} largeSize={false}/> 
                            </div>
                        </div>
                        <button className="bg-blue-400 py-1 px-3 text-white flex items-center gap-2">
                            <p>Add to Cart</p>
                            <BsCart3 className='text-white' size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProductList