import React from 'react'

const CartSummary = () => {
    return (
        <>
            <div className='border border-gray-300 '>
                <div className='p-4 border border-b-gray-300'>
                    <p>Cart Summary:</p>
                </div>
                <div className='p-4 border border-b-gray-200'>
                    <div className='flex justify-between mb-4'>
                        <p>Shipping Charge :</p>
                        <p>$shipingChargePrice</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Estimated Tax (12.5%) :</p>
                        <p>$eslimitedTaxPrice</p>
                    </div>
                </div>
                <div className='bg-gray-200 p-4'>
                    <div className='flex justify-between'>
                        <p>Total amount:</p>
                        <p>$totalAmountPrice</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-end mt-4'>
                <button className='w-1/2 bg-green-400 text-white py-1 px-3'>Order</button>
            </div>
        </>
    )
}

export default CartSummary