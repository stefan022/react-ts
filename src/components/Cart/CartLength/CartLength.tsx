import React, { FC } from 'react'

interface IProps {
    len: number;
}

const CartLength: FC<IProps> = ({ len }): JSX.Element => {
    return (
        <div className='flex justify-between items-center border border-gray-300 mb-6 h-[50px] p-4'>
            <p className='flex items-center gap-1'>
                There are 
                <span className={`
                    ${len === 0 ? "text-red-400" : "text-slate-500"}
                    font-bold
                `}>
                    {len}
                </span> 
                products in your cart
            </p>
            <button className='text-white bg-blue-400 hover:bg-blue-500 py-1 px-3 transition-all'>Clear Cart</button>
        </div>
  )
}

export default CartLength