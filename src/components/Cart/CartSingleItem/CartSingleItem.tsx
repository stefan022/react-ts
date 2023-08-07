import React from 'react'

const CartSingleItem = () => {
    return (
        <>
            <div className='border border-gray w-full h-[150px] flex items-center justify-between'>
                <div className='p-4 w-1/5 h-full border border-gray-300'>
                    <div className='bg-green-400 w-full h-full'></div>
                </div>
                <div className='w-3/5 h-full border border-gray-300 flex flex-col justify-between p-4'>
                    <div>
                        <p>Product name</p>
                        <div className='flex'>
                            <p>$color</p>
                            <p>$rating</p>
                        </div>
                    </div>
                    <div className='w-1/4'>
                        <div className="border border-gray-100 flex items-center justify-between p-1">
                            <div className="bg-gray-100 w-3/12 text-center">-</div>
                            <div className="text-center w-6/12">1</div>
                            <div className="bg-gray-100 w-3/12 text-center">+</div>
                        </div>
                    </div>
                </div>
                <div className='w-1/5 h-full border border-gray-300 p-4'>
                    <div className='flex flex-col items-end'>
                        <p>Article Price:</p>
                        <p>$price</p>
                    </div>
                </div>
            </div>
            <div className='border border-gray-300 flex justify-between items-center p-4'>
                <div className='flex gap-2'>
                    <div>Remove</div>
                    <div>Add wishlist</div>
                </div>
                <div>
                    <div>Total: $price</div>
                </div>
            </div>
        </>
    )
}

export default CartSingleItem