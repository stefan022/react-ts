import React from 'react'
import { wishlistHeadData } from './wishlistHeadData';

const WishlistHead = () => {
    return (
    <>
        {
            wishlistHeadData.map((wishlistHead) => {
                const { wishlistId, text, width } = wishlistHead;

                return (
                    <div key={wishlistId} className={`w-${width}/6`}>
                        <p>{text}</p>
                    </div>
                )
            })
        }
    </>
    )
}

export default WishlistHead