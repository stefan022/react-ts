import React from 'react'
import { Link } from 'react-router-dom'
import { Routes } from '../../../../router/Routes'

interface IProps {
    rating: number;
    status: string;
    productName: string;
    description: string;
    price: string;
    colors: string[];
}

const ProductListCard = ({ rating, status, productName, description, price, colors }: IProps) => {
    return (
        <div className='border border-gray-300 w-full p-2'>
            <div className='border border-gray-300 h-[200px] flex'>
                <Link to={`${Routes.PRODUCTS}${Routes.PRODUCT_DETAILS}`}>
                    <div className='border border-gray-300 h-full w-[200px] bg-red-300'></div>
                </Link>
                <div className='p-2 w-full flex flex-col justify-between'>
                    <div>
                        <div>{rating} &#9733;</div>
                    </div>
                    <div className='flex items-center gap-1'>
                        <div className='bg-green-400 rounded-full w-2 h-2'></div>
                        <p>{status}</p>
                    </div>
                    <div>
                        <p>{productName}</p>
                    </div>
                    <div>
                        <p>{description}</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p>{price}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        {
                            colors.map((color) => <div className={`bg-${color}-300 w-5 h-5 rounded-full`}></div> )
                        }
                    </div>
                    <div className='flex justify-end'>
                        <button className="bg-blue-300">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductListCard