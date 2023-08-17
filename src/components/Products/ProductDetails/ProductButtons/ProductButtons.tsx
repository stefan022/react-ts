import React, { FC } from 'react'

import { AddToCart } from "../../../../components"

interface IProps {
    articleId: number;
    articleName: string;
    price: number;
    quantity: number;
    image: string;
    rating: number;
    category: string;
}

const ProductButtons: FC<IProps> = ({ articleId, articleName, image, price, quantity, rating, category }): JSX.Element => {
    return (
        <div className='w-full flex gap-4'>
            <AddToCart
                articleId={articleId}
                articleName={articleName}
                image={image}
                price={price}
                quantity={quantity}
                rating={rating}
                category={category}
                cartType='product-details'
                iconSize={18}
            />
            <button className='w-1/2 bg-blue-400 hover:bg-blue-500 transition-all text-white py-2 px-3'>Order</button>
        </div>
    )
}

export default ProductButtons