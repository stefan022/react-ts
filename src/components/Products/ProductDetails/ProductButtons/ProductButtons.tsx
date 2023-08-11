import React from 'react'

const ProductButtons = () => {
    return (
        <div className='w-full flex gap-4'>
            <button className='w-1/2 bg-green-400 hover:bg-green-500 transition-all text-white py-2 px-3'>Add To Cart</button>
            <button className='w-1/2 bg-blue-400 hover:bg-blue-500 transition-all text-white py-2 px-3'>Order</button>
        </div>
    )
}

export default ProductButtons