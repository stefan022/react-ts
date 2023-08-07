import React from 'react'

const ProductImages = () => {
    return (
        <div className='flex gap-4 mb-4'>
            <div className='flex flex-col gap-4 w-1/6 h-full'>
                <div className='h-24 border border-gray-300'></div>
                <div className='h-24 border border-gray-300'></div>
                <div className='h-24 border border-gray-300'></div>
                <div className='h-24 border border-gray-300'></div>
            </div>
            <div className='w-5/6 border border-gray-400 h-[450px]'></div>
        </div>
    )
}

export default ProductImages