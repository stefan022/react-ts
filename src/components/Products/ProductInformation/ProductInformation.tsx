import React from 'react'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'

const ProductInformation = () => {
    return (
    <>
        <div className='flex flex-col'>
            <div>&#9733; &#9733; &#9733; &#9733; &#9733;</div>
        </div>
        <div><p>$productName</p></div>
        <div className='flex items-center gap-1'>
            <div className='bg-green-400 w-2 h-2 rounded-full'></div>
            <p>Available</p>
        </div>
        <div className='flex gap-2'>
            <p>Model: $model</p>
            <p>Date: $timestamp</p>
            <p>Brand: $brand</p>
        </div>
        <div className='flex items-center gap-2'>
            <p className='font-bold text-lg'>$price</p>
            <p className='line-through text-gray-400'>$oldPrice</p>
            <p className='text-red-500'>(50% off)</p>
        </div>
        <div className='flex items-center gap-1'>
            <IoMdCheckmarkCircleOutline className='text-green-400'/>
            <p>Free delivery available</p>
        </div>
        <div className='flex items-center gap-2'>
            <div className='bg-red-300 h-5 w-5 rounded-full'></div>
            <div className='bg-red-300 h-5 w-5 rounded-full'></div>
            <div className='bg-red-300 h-5 w-5 rounded-full'></div>
            <div className='bg-red-300 h-5 w-5 rounded-full'></div>
        </div>
        <div className='flex items-center gap-1'>
            <p>Quantity:</p>
            <div className="border border-gray-100 flex items-center justify-between p-1 w-32">
                <div className="bg-gray-100 w-3/12 text-center">-</div>
                <div className="w-6/12 text-center">1</div>
                <div className="bg-gray-100 w-3/12 text-center">+</div>
            </div>
        </div>
    </>
    )
}

export default ProductInformation