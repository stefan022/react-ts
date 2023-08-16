import React from 'react'

import empty_wishlist from "../../../../assets/empty-wishlist.png";
import { Link } from 'react-router-dom';
import { Routes } from '../../../../router/Routes';

const WishlistEmpty = () => {
    return (
        <div className='p-4 flex flex-col gap-6 justify-center items-center border border-gray-300 w-full h-[350px]'>
            <div className='flex flex-col gap-2 justify-center items-center'>
                <img width={150} src={empty_wishlist} alt="" />
                <h2>Your wishlist is empty.</h2>
            </div>
            <Link to={Routes.PRODUCTS}>
                <button className='py-1 px-2 bg-blue-400 hover:bg-blue-500 text-white rounded-md'>Start Shopping</button>
            </Link>
        </div>
    )
}

export default WishlistEmpty