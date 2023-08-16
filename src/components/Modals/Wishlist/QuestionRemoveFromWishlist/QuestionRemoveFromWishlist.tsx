import React, { FC, MouseEventHandler } from 'react'

import { RiDeleteBin6Line } from 'react-icons/ri'

interface IProps {
    wishlistId: number;
    articleId: number;
    handleCloseModal: MouseEventHandler<HTMLButtonElement>;
    handleRemoveFromWishlist: (wId: number, artId: number) => void;
}

const QuestionRemoveFromWishlist: FC<IProps> = ({ wishlistId, articleId, handleCloseModal, handleRemoveFromWishlist }): JSX.Element => {
    return (
        <div className='bg-white w-[500px] h-[350px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col p-8 gap-8 transition-all outline-none'>
            <div className='flex flex-col items-center gap-2'>
                <RiDeleteBin6Line size={50} className='text-red-400'/>
                <h2 className='text-center'>Are you sure you want to remove this article from your wishlist?</h2>
            </div>
            <div className='flex gap-4'>
                <button
                    className='bg-red-400 hover:bg-red-500 transition-all py-1 px-3 text-white'
                    onClick={() => handleRemoveFromWishlist(wishlistId, articleId)}
                >
                    I'm sure
                </button>
                <button
                    className='bg-gray-100 border border-gray-400 hover:bg-gray-400 transition-all py-1 px-3 text-gray-600 hover:text-white' 
                    onClick={handleCloseModal}
                >
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default QuestionRemoveFromWishlist