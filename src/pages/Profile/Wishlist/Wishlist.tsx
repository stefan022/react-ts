import React from 'react'
import { WishlistHead, WishlistItems } from '../../../components'

const Wishlist = () => {
    return (
        <div>
            <div className='p-4 flex justify-between border border-gray-300'>
                <WishlistHead/>
            </div>
            <WishlistItems/>
        </div>
    )
}

export default Wishlist