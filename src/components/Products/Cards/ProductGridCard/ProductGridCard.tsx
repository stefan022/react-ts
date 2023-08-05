import React from 'react'
import { Link } from 'react-router-dom'
import { Routes } from '../../../../router/Routes'

interface IProps {
    productName: string;
    colors: string[];
    productPrice: string;
    rating: number;
}

const ProductCard = ({ productName, colors, productPrice, rating }: IProps) => {
    return (
        <div className='border border-gray-300 h-[350px] w-1/4 p-2'>
            <div className='border border-gray-300 h-full'>
                <Link to={`${Routes.PRODUCTS}${Routes.PRODUCT_DETAILS}`}>
                    <div className='border border-gray-300 h-2/3 bg-red-300'></div>
                </Link>
                <div className='p-2'>
                    <div className="flex items-center gap-2">
                        {
                            colors.map((color) => <div className={`bg-${color}-300 w-5 h-5 rounded-full`}></div>)
                        }
                    </div>
                    <div>
                        <p>{productName}</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p>{productPrice}</p>
                        <div>{rating} &#9733;</div>
                    </div>
                    <div className='w-full'>
                        <button className='w-full bg-blue-300'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard