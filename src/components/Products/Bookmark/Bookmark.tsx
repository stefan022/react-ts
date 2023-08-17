import React, { FC, useState, useEffect } from 'react'

import { BiSolidBookmark } from 'react-icons/bi'
import { useAddToWishlistMutation, useDeleteFromWishlistMutation, useGetAllFromWishlistQuery } from '../../../features/API/wishlistAPI';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { RootState } from '../../../ts/types/RootState';
import { Modal } from '@mui/material';
import { WishlistAddedProduct, WishlistRemovedProduct } from "../../../components"
import { findWishlistId } from '../../../utils/findWishlistId';

interface IProps {
    articleId: number;
    articleName: string;
    price: number;
    status: string;
    category: string;
    size: number;
    image?: string;
}

const Bookmark: FC<IProps> = ({ articleId, articleName, price, status, category, image, size }): JSX.Element => {
    useGetAllFromWishlistQuery();
    const { wishlist } = useAppSelector((state: RootState) => state.wishlist);
    const userId = localStorage.getItem("userId") as string;

    const [ bookmarked, setBookmarked ] = useState<boolean>(false);
    const [ isOpenModal, setIsOpenModal ] = useState<boolean>(false);

    const [ addToWishlist ] = useAddToWishlistMutation();
    const [ deleteFromWishlist ] = useDeleteFromWishlistMutation();

    useEffect(() => {
        const isBookmarked = findWishlistId(wishlist, userId, articleId, category);

        if (isBookmarked) setBookmarked(true);

        return () => {
            setBookmarked(false);
        }

        // eslint-disable-next-line
    }, [wishlist, category]);

    const handleBookmark = (c: string) => {
        setIsOpenModal(true);

        if (!bookmarked) {
            setBookmarked(true);
            addToWishlist({ articleId, articleName, category, price, status, userId, image: image as string });

            return;
        };
        
        setBookmarked(false);

        const wishlistId = findWishlistId(wishlist, userId, articleId, category);
        if (wishlistId) deleteFromWishlist(wishlistId);
    };

    const handleCloseModal = () => setIsOpenModal(false);

    return (
        <>
            <BiSolidBookmark 
                className='cursor-pointer'
                size={size} 
                fill={bookmarked ? "#60a5fa" : "#ffffff"} 
                stroke={bookmarked ? "#60a5fa" : "#c7cad1"} 
                strokeWidth={1.5}
                onClick={() => handleBookmark(category)}
            />
            <Modal
                open={isOpenModal}
                onClose={handleCloseModal}
                className='bg-white bg-opacity-80'
                children={
                    bookmarked 
                        ? <WishlistAddedProduct handleCloseModal={handleCloseModal}/>
                        : <WishlistRemovedProduct handleCloseModal={handleCloseModal}/>
                }
            />
        </>
    )
}

export default Bookmark