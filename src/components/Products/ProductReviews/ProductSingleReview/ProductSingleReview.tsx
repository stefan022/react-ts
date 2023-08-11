import React from 'react'

import { ProductAdminReview } from "../../.."

interface IProps {
    adminReview: boolean;
}

const ProductSingleReview = ({ adminReview }: IProps) => {
    return (
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
            { adminReview ? <ProductAdminReview/> : null }
        </div>
    )
}

export default ProductSingleReview