import React from 'react'

const ProductsFilter = () => {
    return (
        <div className='w-1/6 border border-gray-400 h-full'>
            <div className='border border-b-gray-400 flex items-center justify-between p-4'>
                <p>Filter</p>
                <button>Clear filter</button>
            </div>
            <div className='border border-b-gray-400 p-4'>
                <form className="flex flex-col items-start">
                    <p className='mb-2 text-gray-400'>Brands</p>
                    <div className='flex items-center'>
                        <input type="checkbox" id="apple" />
                        <label className='ml-2' htmlFor="apple">Apple</label>
                    </div>
                    <div className='flex items-center'>
                        <input type="checkbox" id="apple" />
                        <label className='ml-2' htmlFor="apple">Apple</label>
                    </div>
                    <div className='flex items-center'>
                        <input type="checkbox" id="apple" />
                        <label className='ml-2' htmlFor="apple">Apple</label>
                    </div>
                    <div className='flex items-center'>
                        <input type="checkbox" id="apple" />
                        <label className='ml-2' htmlFor="apple">Apple</label>
                    </div>
                </form>
            </div>
            <div className='border border-b-gray-400 p-4'>
                <div className='flex flex-col items-start'>
                    <form className="flex flex-col items-start">
                        <p className='mb-2 text-gray-400'>Rating</p>
                        <div className='flex items-center'>
                            <input type="checkbox" id="apple" />
                            <label className='ml-2' htmlFor="apple">&#9733; &#9733; &#9733; &#9733; &#9733;</label>
                        </div>
                        <div className='flex items-center'>
                            <input type="checkbox" id="apple" />
                            <label className='ml-2' htmlFor="apple">&#9733; &#9733; &#9733; &#9733;</label>
                        </div>
                        <div className='flex items-center'>
                            <input type="checkbox" id="apple" />
                            <label className='ml-2' htmlFor="apple">&#9733; &#9733; &#9733;</label>
                        </div>
                        <div className='flex items-center'>
                            <input type="checkbox" id="apple" />
                            <label className='ml-2' htmlFor="apple">&#9733; &#9733;</label>
                        </div>
                        <div className='flex items-center'>
                            <input type="checkbox" id="apple" />
                            <label className='ml-2' htmlFor="apple">&#9733;</label>
                        </div>
                    </form>
                </div>
            </div>
            <div className='border border-b-gray-400 p-4'>
                <p className='text-gray-400'>Price</p>
                <p className='text-gray-300 text-sm'>$500</p>
                <form>
                    <input type="range" min="1" max="100"/>
                </form>
            </div>
            <div className='border border-b-gray-400 p-4'>
                <p className='mb-2 text-gray-400'>Colors</p>
                <form className='flex gap-2'>
                    <button className='bg-red-300 rounded-full w-5 h-5'></button>
                    <button className='bg-red-300 rounded-full w-5 h-5'></button>
                    <button className='bg-red-300 rounded-full w-5 h-5'></button>
                    <button className='bg-red-300 rounded-full w-5 h-5'></button>
                </form>
            </div>
        </div>
    )
}

export default ProductsFilter