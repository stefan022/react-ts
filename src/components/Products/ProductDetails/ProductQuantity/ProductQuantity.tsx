import React, { FC } from 'react'

const ProductQuantity: FC = (): JSX.Element => {
    return (
        <div className='flex items-center gap-1'>
            <p>Quantity:</p>
            <div className="border border-gray-100 flex items-center justify-between p-1 w-32">
                <div className="bg-gray-100 w-3/12 text-center">-</div>
                <div className="w-6/12 text-center">1</div>
                <div className="bg-gray-100 w-3/12 text-center">+</div>
            </div>
        </div>
    )
}

export default ProductQuantity