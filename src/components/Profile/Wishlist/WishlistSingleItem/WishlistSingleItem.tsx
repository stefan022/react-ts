import React, { FC } from 'react'

import { RemoveFromWishlist, WishlistArticleName, WishlistDetails, WishlistImage, WishlistPrice, WishlistStatus } from "../../../../components"

interface IProps {
    wishlistId: number;
    articleId: number;
    image: string;
    articleName: string;  
    category: string;
    price: number;
    status: string;
}

const WishlistSingleItem: FC<IProps> = ({ wishlistId, articleId, image, articleName, category, price, status }): JSX.Element => {
    return (
        <div className='border border-gray-300 p-4 flex items-center gap-1'>
            <WishlistImage 
                image={image}
            />
            <WishlistArticleName 
                articleName={articleName} 
                category={category}
            />
            <WishlistPrice 
                price={price}
            />
            <WishlistStatus 
                status={status}
            />
            <WishlistDetails 
                category={category} 
                articleId={articleId}
            />
            <RemoveFromWishlist 
                wishlistId={wishlistId} 
                articleId={articleId} 
            />
        </div>
    )
}

export default WishlistSingleItem