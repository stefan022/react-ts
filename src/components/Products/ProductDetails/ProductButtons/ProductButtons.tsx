import React, { FC } from 'react'

import { AddToCart } from "../../../../components"

interface IProps {
    articleId: number;
    articleName: string;
    price: number;
    discount: number;
    quantity: number;
    image: string;
    rating: number;
    category: string;
    count: number;
    brand: string;
}

const ProductButtons: FC<IProps> = ({ articleId, articleName, brand, image, price, discount, quantity, rating, category, count }): JSX.Element => {
    return (
        <div className='w-full flex gap-4'>
            <AddToCart
                articleId={articleId}
                articleName={articleName}
                brand={brand}
                image={image}
                price={price}
                quantity={quantity}
                rating={rating}
                category={category}
                cartType='product-details'
                iconSize={18}
                count={count}
                discount={discount}
            />
            <button className='w-1/2 bg-blue-400 hover:bg-blue-500 transition-all text-white py-2 px-3'>Order</button>
        </div>
    )
}

export default ProductButtons