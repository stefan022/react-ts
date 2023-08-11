import React, { FC } from 'react'

import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { TColors } from '../../../../ts/types/TColors';
import { RoundColors, Stars } from "../../.."
import { timestampToLocalString } from '../../../../utils/helpers/timestampToLocalString';
import { firstCapitalLatter } from '../../../../utils/helpers/capitalFirstLetter';
import { calculationDiscount } from '../../../../utils/helpers/calculationDiscount';

interface IProps {
    articleName: string;
    rating: number;
    status: string;
    model: string;
    timestamp: number;
    brand: string;
    price: number;
    discount?: number;
    colors: TColors[];
}

const ProductInformation: FC<IProps> = ({ articleName, rating, status, model, timestamp, brand, price, discount, colors }): JSX.Element => {
    return (
    <div className='flex flex-col justify-center h-full gap-4'>
        <div className='flex'>
            <Stars rating={rating} size={28}/>
        </div>
        <h2 className='text-3xl'>{articleName}</h2>
        <div className='flex items-center gap-2 mb-2'>
            <div className='bg-green-400 w-2.5 h-2.5 rounded-full'></div>
            <h3>{firstCapitalLatter(status)}</h3>
        </div>
        <div className='flex flex-col gap-2 mb-2'>
            <p>Model: {model}</p>
            <p>Date: {timestampToLocalString(timestamp)}</p>
            <p>Brand: {firstCapitalLatter(brand)}</p>
        </div>
        <div className='flex flex-col gap-1'>
            <div className='flex items-center gap-2'>
                <h3 className='font-bold text-lg'>${calculationDiscount(price, discount)}</h3>
                <p className='line-through text-gray-400'>${price}</p>
                <h3 className='text-red-500 font-bold ml-2'>({discount}% off)</h3>
            </div>
            <div className='flex items-center gap-2'>
                <IoMdCheckmarkCircleOutline className='text-green-400' size={24}/>
                <h3>Free delivery available</h3>
            </div>
        </div>
        <div className='flex items-center gap-2'>
            <p>TColors:</p>
            <RoundColors colors={colors} largeSize={true}/>
        </div>
        <div className='flex items-center gap-1'>
            <p>Quantity:</p>
            <div className="border border-gray-100 flex items-center justify-between p-1 w-32">
                <div className="bg-gray-100 w-3/12 text-center">-</div>
                <div className="w-6/12 text-center">1</div>
                <div className="bg-gray-100 w-3/12 text-center">+</div>
            </div>
        </div>
    </div>
    )
}

export default ProductInformation