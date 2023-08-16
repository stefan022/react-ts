import React, { useEffect, useState } from 'react'

import { WishlistSingleItem } from "../../../../components"
import { useGetAllFromWishlistQuery } from '../../../../features/API/wishlistAPI'
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { RootState } from '../../../../ts/types/RootState';
import { IWishlist } from '../../../../ts/interfaces/IWishlist/IWishlist';

const WishlistItems = () => {
    useGetAllFromWishlistQuery();
    const userId = localStorage.getItem("userId") as string;

    const { wishlist } = useAppSelector((state: RootState) => state.wishlist);
    const [ myWishlist, setMyWishlist] = useState<IWishlist[]>([]);

    useEffect(() => {
        const getMyWishlist = wishlist.filter((w) => w.userId === userId);

        setMyWishlist(getMyWishlist);

    }, [wishlist, userId]);

    console.log(myWishlist)

    return (
        <>
            {
                myWishlist.length > 0 ? (
                    myWishlist.map((wishlist) => {
                        const { wishlistId, articleId, image, articleName, category, price, status } = wishlist;

                        return (
                            <WishlistSingleItem 
                                key={wishlistId}
                                wishlistId={wishlistId}
                                articleId={articleId}
                                image={image}
                                articleName={articleName}
                                category={category}
                                price={price}
                                status={status}
                            />
                        )
                    })
                ) : <p>Sorry, you wishlist is empty. :D</p>
            }
        </>
    )
}

export default WishlistItems