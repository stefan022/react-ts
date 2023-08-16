import React, { FC, useState, useEffect } from 'react'

import { BiSolidBookmark } from 'react-icons/bi'
import { useUpdateBookmarkStatusForPhoneMutation } from '../../../features/API/phonesAPI';
import { useAddToWishlistMutation, useDeleteFromWishlistMutation, useGetAllFromWishlistQuery } from '../../../features/API/wishlistAPI';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { RootState } from '../../../ts/types/RootState';
import { Modal } from '@mui/material';
import { WishlistAddedProduct, WishlistRemovedProduct } from "../../../components"
import { findWishlistId } from '../../../utils/findWishlistId';
import { useUpdateBookmarkStatusForLaptopMutation } from '../../../features/API/laptopsAPI';
import { useUpdateBookmarkStatusForTabletMutation } from '../../../features/API/tabletsAPI';
import { useUpdateBookmarkStatusForTelevisionMutation } from '../../../features/API/televisionsAPI';

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

    const [ updateBookmarkStatusForPhone ] = useUpdateBookmarkStatusForPhoneMutation();
    const [ updateBookmarkStatusForTablet ] = useUpdateBookmarkStatusForTabletMutation();
    const [ updateBookmarkStatusForLaptop ] = useUpdateBookmarkStatusForLaptopMutation();
    const [ updateBookmarkStatusForTelevision ] = useUpdateBookmarkStatusForTelevisionMutation();

    const [ addToWishlist ] = useAddToWishlistMutation();
    const [ deleteFromWishlist ] = useDeleteFromWishlistMutation();

    useEffect(() => setIsBookmarked(bookmarked), [bookmarked]);

    const handleBookmark = (c: string) => {
        setIsOpenModal(true);

        if (!isBookmarked) {
            setIsBookmarked(true);

            switch(c) {
                case "phones": updateBookmarkStatusForPhone({ phoneId: articleId, bookmarked: true }); break;
                case "tablets": updateBookmarkStatusForTablet({ tabletId: articleId, bookmarked: true }); break;
                case "laptops": updateBookmarkStatusForLaptop({ laptopId: articleId, bookmarked: true }); break;
                case "televisions": updateBookmarkStatusForTelevision({ televisionId: articleId, bookmarked: true }); break;
            }
            
            addToWishlist({ articleId, articleName, category, price, status, userId, image });

            return;
        };
        
        const wishlistId = findWishlistId(wishlist, userId, articleId, category);
    
        setIsBookmarked(false);
        
        switch(c) {
            case "phones": updateBookmarkStatusForPhone({ phoneId: articleId, bookmarked: false }); break;
            case "tablets": updateBookmarkStatusForTablet({ tabletId: articleId, bookmarked: false }); break;
            case "laptops": updateBookmarkStatusForLaptop({ laptopId: articleId, bookmarked: false }); break;
            case "televisions": updateBookmarkStatusForTelevision({ televisionId: articleId, bookmarked: false }); break;
        }

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
                onClick={() => handleBookmark(category)}
            />
            <Modal
                open={isOpenModal}
                onClose={handleCloseModal}
                className='bg-white bg-opacity-80'
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