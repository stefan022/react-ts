import React, { FC } from 'react'

import { ProductColors, ProductName, ProductPrice, ProductQuantity, ProductShortDesc, ProductStatus, Stars } from "../../../../components"
import { TColors } from '../../../../ts/types/TColors';

interface IProps {
    articleName: string;
    rating: number;
    status: string;
    model: string;
    timestamp: number;
    brand: string;
    price: number;
    discount: number;
    colors: TColors[];
}

const ProductInformation: FC<IProps> = ({ articleName, rating, status, model, timestamp, brand, price, discount, colors }): JSX.Element => {
    return (
    <div className='flex flex-col justify-center h-full gap-4'>
        <div className='flex'>
            <Stars rating={rating} size={28}/>
        </div>
        <ProductName articleName={articleName}/>
        <ProductStatus status={status}/>
        <ProductShortDesc model={model} timestamp={timestamp} brand={brand}/>
        <ProductPrice price={price} discount={discount}/>
        <ProductColors colors={colors}/>
        <ProductQuantity/>
    </div>
    )
}

export default ProductInformation