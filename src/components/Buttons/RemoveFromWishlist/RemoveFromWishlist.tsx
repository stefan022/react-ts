import React, { FC, useState } from 'react'

import { Modal } from '@mui/material';
import { QuestionRemoveFromWishlist } from "../../../components";
import { useDeleteFromWishlistMutation } from '../../../features/API/wishlistAPI';
import { toast } from 'react-toastify';
import { useUpdateBookmarkStatusForPhoneMutation } from '../../../features/API/phonesAPI';
import { useUpdateBookmarkStatusForTabletMutation } from '../../../features/API/tabletsAPI';
import { useUpdateBookmarkStatusForLaptopMutation } from '../../../features/API/laptopsAPI';
import { useUpdateBookmarkStatusForTelevisionMutation } from '../../../features/API/televisionsAPI';

interface IProps {
    wishlistId: number;
    articleId: number;
    category: string;
}

const RemoveFromWishlist: FC<IProps> = ({ wishlistId, articleId, category }): JSX.Element => {
    const [ isOpenModal, setIsOpenModal ] = useState<boolean>(false);

    const [ deleteFromWishlist ] = useDeleteFromWishlistMutation();

    const [ updateBookmarkStatusForPhone ] = useUpdateBookmarkStatusForPhoneMutation();
    const [ updateBookmarkStatusForTablet ] = useUpdateBookmarkStatusForTabletMutation();
    const [ updateBookmarkStatusForLaptop ] = useUpdateBookmarkStatusForLaptopMutation();
    const [ updateBookmarkStatusForTelevision ] = useUpdateBookmarkStatusForTelevisionMutation();

    const handleRemoveFromWishlist = (wId: number, artId: number, c: string) => { 
        deleteFromWishlist(wId);

        switch(c) {
            case "phones": updateBookmarkStatusForPhone({ phoneId: artId, bookmarked: false }); break;
            case "tablets": updateBookmarkStatusForTablet({ tabletId: artId, bookmarked: false }); break;
            case "laptops": updateBookmarkStatusForLaptop({ laptopId: artId, bookmarked: false }); break;
            case "televisions": updateBookmarkStatusForTelevision({ televisionId: artId, bookmarked: false }); break;
        }
        
        toast.success("You successfully removed article from your wishlist");
        setIsOpenModal(false);
    };

    const handleOpenModal = () => setIsOpenModal(true);
    const handleCloseModal = () => setIsOpenModal(false);

    return (
        <>
            <div className='w-1/12 flex justify-center'>
                <button 
                    className='bg-red-400 hover:bg-red-500 transition-all py-1 px-2 text-white rounded-md'
                    onClick={handleOpenModal}
                    >
                    Remove
                </button>
            </div>
            <Modal
                open={isOpenModal}
                onClose={handleCloseModal}
            >
                <QuestionRemoveFromWishlist
                    wishlistId={wishlistId}
                    articleId={articleId}
                    category={category}
                    handleCloseModal={handleCloseModal}
                    handleRemoveFromWishlist={handleRemoveFromWishlist}
                />
            </Modal>
        </>
    )
}

export default RemoveFromWishlist