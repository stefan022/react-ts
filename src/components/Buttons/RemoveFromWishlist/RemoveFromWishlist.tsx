import React, { FC, useState } from 'react'

import { Modal } from '@mui/material';
import { QuestionRemoveFromWishlist, Spinner } from "../../../components";
import { useDeleteFromWishlistMutation } from '../../../features/API/wishlistAPI';
import { toast } from 'react-toastify';

interface IProps {
    wishlistId: number;
    articleId: number;
    category: string;
}

const RemoveFromWishlist: FC<IProps> = ({ wishlistId, articleId, category }): JSX.Element => {
    const [ modalIsOpen, setModalIsOpen ] = useState<boolean>(false);
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ deleteFromWishlist ] = useDeleteFromWishlistMutation();

    const handleRemoveFromWishlist = async (wId: number, artId: number, c: string) => { 
        setModalIsOpen(false);
        setLoading(true);

        const { success } = await deleteFromWishlist(wId).unwrap();
        if (success) setLoading(false);

        toast.success("You successfully removed article from your wishlist");
        setModalIsOpen(false);
    };

    const handleOpenModal = () => setModalIsOpen(true);
    const handleCloseModal = () => setModalIsOpen(false);

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
                open={modalIsOpen}
                onClose={handleCloseModal}
                className='bg-white bg-opacity-80'
            >
                <QuestionRemoveFromWishlist
                    wishlistId={wishlistId}
                    articleId={articleId}
                    category={category}
                    handleCloseModal={handleCloseModal}
                    handleRemoveFromWishlist={handleRemoveFromWishlist}
                />
            </Modal>
            { loading && <Spinner/> }
        </>
    )
}

export default RemoveFromWishlist