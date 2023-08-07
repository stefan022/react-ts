import React from 'react'

// interface IProps {
//     cartTotalQuantity: number;
// }

const CartTotalQuantity = () => {
    return (
        <div className='flex justify-between items-center border border-gray-300 mb-6 h-[50px] p-4'>
            <p>There are <span>0</span> products in your cart</p>
            <button>Clear Cart</button>
        </div>
  )
}

export default CartTotalQuantity