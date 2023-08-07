import React from 'react'

const WishlistSingleItem = () => {
    return (
        <div className='border border-gray-300 p-4 flex items-center'>
            <div className='w-3/6 flex gap-2'>
                <div className='bg-red-300 h-[50px] w-[50px]'>
                </div>
                <div className='flex flex-col justify-between'>
                    <p>$productName</p>
                    <p className='text-gray-400 text-sm'>$category</p>
                </div>
            </div>
            <div className='w-1/6'>
                <p>$price</p>
            </div>
            <div className='w-1/6'>
                <p className='text-green-800 bg-green-300 border py-0.5 px-2 rounded-md inline-block'>$status</p>
            </div>
            <div className='w-1/6 flex gap-2'>
                <div>Cart</div>
                <div>Remove</div>
            </div>
        </div>
    )
}

export default WishlistSingleItem