import React from 'react'

const ProductAdminReview = () => {
    return (
        <div className=' flex'>
            <div className='w-1/12'></div>
            <div className='w-11/12 border border-gray-400 flex justify-between'>
                <div className='w-1/12 border border-gray-400'></div>
                <div className='w-11/12 border border-gray-400 py-2 px-3 flex flex-col justify-between'>
                    <div className='flex justify-between items-center mb-4'>
                        <div>
                            <p>$adminName</p>
                            <p>Admin</p>
                        </div>
                        <div>
                            Date: $timestamp
                        </div>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductAdminReview