import React from 'react'
import { Banner, ReviewForm } from '../../components'
import ContentMiddle from '../../content/ContentMiddle'

import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const ProductDetails = () => {
    return (
        <div>
            <Banner
                title="Product Details"
            />
            <ContentMiddle>
                <div className='flex py-6'>
                    <div className='w-1/2'>
                        <div className='flex gap-4 mb-4'>
                            <div className='flex flex-col gap-4 w-1/6 h-full'>
                                <div className='h-24 border border-gray-300'></div>
                                <div className='h-24 border border-gray-300'></div>
                                <div className='h-24 border border-gray-300'></div>
                                <div className='h-24 border border-gray-300'></div>
                            </div>
                            <div className='w-5/6 border border-gray-400 h-[450px]'>
                                <p>Okej</p>
                            </div>
                        </div>
                        <div className='w-full flex gap-4'>
                            <button className='w-1/2 bg-green-400 py-1 px-3'>Add To Cart</button>
                            <button className='w-1/2 bg-blue-400 py-1 px-3'>Order</button>
                        </div>
                    </div>
                    <div className='w-1/2 border border-gray h-[450px] p-6'>
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
                    </div>
                </div>

                <div className='border border-gray-400 w-full mb-6'>
                    <div className='px-6 py-4 border border-b-blue-200'>
                        <p>Description</p>
                    </div>
                    <div className='flex flex-col p-6'>
                        <div className='flex justify-between mb-2'>
                            <p className='w-1/2'>$ramMemory:</p>
                            <p className='w-1/2'>$ramMemory</p>
                        </div>
                        <div className='flex justify-between mb-2'>
                            <p className='w-1/2'>$ramMemory:</p>
                            <p className='w-1/2'>$ramMemory</p>
                        </div>
                        <div className='flex justify-between mb-2'>
                            <p className='w-1/2'>$ramMemory:</p>
                            <p className='w-1/2'>$ramMemory</p>
                        </div>
                        <div className='flex justify-between mb-2'>
                            <p className='w-1/2'>$ramMemory:</p>
                            <p className='w-1/2'>$ramMemory</p>
                        </div>
                        <div className='flex justify-between mb-2'>
                            <p className='w-1/2'>$ramMemory:</p>
                            <p className='w-1/2'>$ramMemory</p>
                        </div>
                        <div className='flex justify-between mb-2'>
                            <p className='w-1/2'>$ramMemory:</p>
                            <p className='w-1/2'>$ramMemory</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='w-1/2'>$ramMemory:</p>
                            <p className='w-1/2'>$ramMemory</p>
                        </div>
                    </div>
                </div>

                <div className='border border-gray-300 mb-6'>
                    <div className='px-6 py-4 border border-b-blue-200'>
                        <p>Ratings</p>
                    </div>
                    <div className='flex justify-between w-full'>
                        <div className='flex flex-col p-6 gap-4 border border-r-gray-300 w-4/12'>
                            <p>Total Ratings</p>
                            <p>10k</p>
                        </div>
                        <div className='flex flex-col p-6 gap-4 border border-r-gray-300 w-4/12'>
                            <p>Average Rating</p>
                            <p>5 &#9733; &#9733; &#9733; &#9733; &#9733;</p>
                        </div>
                        <div className='flex flex-col p-6 w-4/12'>
                            <div className='flex items-center'>
                                <p>&#9733; 5</p>
                                <progress value="80" max="100"></progress>
                                <p>2030</p>
                            </div>
                            <div className='flex items-center'>
                                <p>&#9733; 4</p>
                                <progress value="60" max="100"></progress>
                                <p>100</p>
                            </div>
                            <div className='flex items-center'>
                                <p>&#9733; 3</p>
                                <progress value="40" max="100"></progress>
                                <p>55</p>
                            </div>
                            <div className='flex items-center'>
                                <p>&#9733; 2</p>
                                <progress value="20" max="100"></progress>
                                <p>23</p>
                            </div>
                            <div className='flex items-center'>
                                <p>&#9733; 1</p>
                                <progress value="10" max="100"></progress>
                                <p>5</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mb-6'>
                    <div className='px-6 py-4 border border-b-blue-200'>
                        <p>Reviews</p>
                    </div>
                    <ReviewForm/>
                    <div className='w-full border-b-2 border-b-gray-400'>
                        <div className='flex'>
                            <div className='w-1/12 border border-gray-400'></div>
                            <div className='w-11/12 border border-gray-400 py-2 px-3 flex flex-col justify-between'>
                                <div className='flex justify-between items-center mb-4'>
                                    <div>
                                        <p>$userName</p>
                                        <p>5 &#9733; &#9733; &#9733; &#9733; &#9733;</p>
                                    </div>
                                    <div>
                                        Date: $timestamp
                                    </div>
                                </div>
                                <div>
                                    <h4 className='font-bold'>Title</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, error accusantium harum molestiae optio debitis corporis aperiam pariatur atque earum! Non, ea nemo delectus sit aliquam ipsa quasi perspiciatis magnam officiis ad soluta quia ut voluptate nisi est? Aliquid blanditiis vel expedita iusto, impedit vitae temporibus a quasi sint voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, error accusantium harum molestiae optio debitis corporis aperiam pariatur atque earum! Non, ea nemo delectus sit aliquam ipsa quasi perspiciatis magnam officiis ad soluta quia ut voluptate nisi est? Aliquid blanditiis vel expedita iusto, impedit vitae temporibus a quasi sint voluptatibus.</p>
                                </div>
                            </div>
                        </div>
                        <div className=' flex'>
                            <div className='w-1/12'></div>
                            <div className='w-11/12 border border-gray-400 flex justify-between'>
                                <div className='w-1/12 border border-gray-400'></div>
                                <div className='w-11/12 border border-gray-400 py-2 px-3 flex flex-col justify-between'>
                                    <div className='flex justify-between items-center mb-4'>
                                        <div>
                                            <p>$userName</p>
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
                    </div>

                    <div className='w-full border-b-2 border-b-gray-400'>
                        <div className='flex'>
                            <div className='w-1/12 border border-gray-400'></div>
                            <div className='w-11/12 border border-gray-400 py-2 px-3 flex flex-col justify-between'>
                                <div className='flex justify-between items-center mb-4'>
                                    <div>
                                        <p>$userName</p>
                                        <p>5 &#9733; &#9733; &#9733; &#9733; &#9733;</p>
                                    </div>
                                    <div>
                                        Date: $timestamp
                                    </div>
                                </div>
                                <div>
                                    <h4 className='font-bold'>Title</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, error accusantium harum molestiae optio debitis corporis aperiam pariatur atque earum! Non, ea nemo delectus sit aliquam ipsa quasi perspiciatis magnam officiis ad soluta quia ut voluptate nisi est? Aliquid blanditiis vel expedita iusto, impedit vitae temporibus a quasi sint voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, error accusantium harum molestiae optio debitis corporis aperiam pariatur atque earum! Non, ea nemo delectus sit aliquam ipsa quasi perspiciatis magnam officiis ad soluta quia ut voluptate nisi est? Aliquid blanditiis vel expedita iusto, impedit vitae temporibus a quasi sint voluptatibus.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full border-b-2 border-b-gray-400'>
                        <div className='flex'>
                            <div className='w-1/12 border border-gray-400'></div>
                            <div className='w-11/12 border border-gray-400 py-2 px-3 flex flex-col justify-between'>
                                <div className='flex justify-between items-center mb-4'>
                                    <div>
                                        <p>$userName</p>
                                        <p>5 &#9733; &#9733; &#9733; &#9733; &#9733;</p>
                                    </div>
                                    <div>
                                        Date: $timestamp
                                    </div>
                                </div>
                                <div>
                                    <h4 className='font-bold'>Title</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, error accusantium harum molestiae optio debitis corporis aperiam pariatur atque earum! Non, ea nemo delectus sit aliquam ipsa quasi perspiciatis magnam officiis ad soluta quia ut voluptate nisi est? Aliquid blanditiis vel expedita iusto, impedit vitae temporibus a quasi sint voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, error accusantium harum molestiae optio debitis corporis aperiam pariatur atque earum! Non, ea nemo delectus sit aliquam ipsa quasi perspiciatis magnam officiis ad soluta quia ut voluptate nisi est? Aliquid blanditiis vel expedita iusto, impedit vitae temporibus a quasi sint voluptatibus.</p>
                                </div>
                            </div>
                        </div>
                        <div className=' flex'>
                            <div className='w-1/12'></div>
                            <div className='w-11/12 border border-gray-400 flex justify-between'>
                                <div className='w-1/12 border border-gray-400'></div>
                                <div className='w-11/12 border border-gray-400 py-2 px-3 flex flex-col justify-between'>
                                    <div className='flex justify-between items-center mb-4'>
                                        <div>
                                            <p>$userName</p>
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
                    </div>
                </div>
            </ContentMiddle>
        </div>
    )
}

export default ProductDetails