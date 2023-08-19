import React, { FC, MouseEventHandler } from 'react'

import { RiDeleteBin6Line } from 'react-icons/ri';

interface IProps {
    handleCloseModal: MouseEventHandler<HTMLButtonElement>;
    handleRemoveFromCart: (cId: number) => void;
    cartId: number;
}

const RemoveFromCart: FC<IProps> = ({ handleCloseModal, handleRemoveFromCart, cartId }): JSX.Element => {
    return (
        <>
            <div className='z-50 bg-white w-[500px] h-[350px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col p-8 gap-8 transition-all outline-none'>
                <div className='flex flex-col items-center gap-2'>
                    <RiDeleteBin6Line size={50} className='text-red-500'/>
                    <h2 className='text-center'>Are you sure you want to remove this product from the cart?</h2>
                 </div>
                <div className='flex gap-2 items-center'>
                    <button 
                        className='border border-gray-400 hover:bg-gray-400 transition-all text-gray-500 hover:text-white py-1.5 px-3' 
                        onClick={handleCloseModal}
                    >
                        Close
                    </button>
                    <button 
                        className='bg-red-400 hover:bg-red-500 transition-all text-white py-1.5 px-3' 
                        onClick={() => handleRemoveFromCart(cartId)}
                    >
                        Yes, I'm sure
                    </button>
                </div>
            </div>
        </>
    )
}

export default RemoveFromCart