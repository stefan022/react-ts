import React, { FC } from 'react'

import { Routes } from '../../../../router/Routes'
import { Link } from 'react-router-dom'
import { BsCartDash } from 'react-icons/bs'

const AlreadyAddedToCart: FC = (): JSX.Element => {
    return (
        <>
            <div className='z-50 bg-white w-[500px] h-[350px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col p-8 gap-8 transition-all outline-none'>
                <div className='flex flex-col items-center gap-2'>
                    <BsCartDash size={50} className='text-slate-500'/>
                    <h2 className='text-center'>You already added this product to the cart!</h2>
                 </div>
                <div className='flex gap-2 items-center'>
                    <Link className='bg-blue-400 hover:bg-blue-500 transition-all text-white py-1.5 px-3' to={Routes.CART}>Check your cart</Link>
                </div>
            </div>
        </>
    )
}

export default AlreadyAddedToCart