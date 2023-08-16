import React, { FC, useState, useEffect } from 'react'

import { BiSolidBookmark } from 'react-icons/bi'
import { useUpdateBookmarkStatusForPhoneMutation } from '../../../features/API/phonesAPI';
import { useAddToWishlistMutation, useDeleteFromWishlistMutation, useGetAllFromWishlistQuery } from '../../../features/API/wishlistAPI';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { RootState } from '../../../ts/types/RootState';
import { Modal } from '@mui/material';
import { WishlistAddedProduct, WishlistRemovedProduct } from "../../../components"
import { findWishlistId } from '../../../utils/findWishlistId';

interface IProps {
    articleId: number;
    bookmarked: boolean;
    articleName: string;
    price: number;
    status: string;
    category: string;
    image: string;
}

const Bookmark: FC<IProps> = ({ articleId, bookmarked, articleName, price, status, category, image }): JSX.Element => {
    useGetAllFromWishlistQuery();
    const { wishlist } = useAppSelector((state: RootState) => state.wishlist);
    const userId = localStorage.getItem("userId") as string;

    const [ isBookmarked, setIsBookmarked ] = useState<boolean>(bookmarked);
    const [ isOpenModal, setIsOpenModal ] = useState<boolean>(false);

    const [ updateBookmarkStatus ] = useUpdateBookmarkStatusForPhoneMutation();
    const [ addToWishlist ] = useAddToWishlistMutation();
    const [ deleteFromWishlist ] = useDeleteFromWishlistMutation();

    useEffect(() => setIsBookmarked(bookmarked), [bookmarked]);

    const handleBookmark = () => {
        setIsOpenModal(true);

        if (!isBookmarked) {
            setIsBookmarked(true);
            updateBookmarkStatus({ phoneId: articleId, bookmarked: true });
            addToWishlist({
                articleId,
                articleName,
                category,
                price,
                status,
                userId,
                image
            });

            return;
        };
        
        const wishlistId = findWishlistId(wishlist, userId, articleId, category);
    
        setIsBookmarked(false);
        updateBookmarkStatus({ phoneId: articleId, bookmarked: false });

        if (wishlistId) deleteFromWishlist(wishlistId);
    };

    const handleCloseModal = () => setIsOpenModal(false);

    return (
        <>
            <BiSolidBookmark 
                className='cursor-pointer'
                size={20} 
                fill={isBookmarked ? "#60a5fa" : "#ffffff"} 
                stroke={isBookmarked ? "#60a5fa" : "#c7cad1"} 
                strokeWidth={1.5}
                onClick={handleBookmark}
            />
            <Modal
                open={isOpenModal}
                onClose={handleCloseModal}
                children={
                    isBookmarked 
                        ? <WishlistAddedProduct handleCloseModal={handleCloseModal}/>
                        : <WishlistRemovedProduct handleCloseModal={handleCloseModal}/>
                }
            />
        </>
    )
}

export default Bookmark