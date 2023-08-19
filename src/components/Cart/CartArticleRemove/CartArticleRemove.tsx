import React, { FC, useState } from 'react'

import { useDeleteFromCartMutation } from '../../../features/API/cartAPI';
import { RemoveFromCart, Spinner } from "../../../components"
import { Modal } from '@mui/material';

interface IProps {
    cartId: number;
}

const CartArticleRemove: FC<IProps> = ({ cartId }): JSX.Element => {
    const [ modalIsOpen, setModalIsOpen ] = useState<boolean>(false);
    const [ loading, setLoading ] = useState<boolean>(false);

    const [ deleteSingleArticleFromCart ] = useDeleteFromCartMutation();


    const handleRemoveFromCart = async (cId: number) => { 
        setModalIsOpen(false);
        setLoading(true);

        const { success } = await deleteSingleArticleFromCart(cId).unwrap();

        if (success) {
            setLoading(false);
        };
    };

    const handleOpenModal = () => setModalIsOpen(true);
    const handleCloseModal = () => setModalIsOpen(false);

    return (
    <>
        <button 
            className='w-1/4 text-white bg-red-400 hover:bg-red-500 transition-all py-1 px-3'
            onClick={handleOpenModal}
        >
            Remove
        </button>
        <Modal
            open={modalIsOpen}
            onClose={handleCloseModal}
            className='bg-white bg-opacity-80'
        >
            <RemoveFromCart
                handleCloseModal={handleCloseModal}
                handleRemoveFromCart={handleRemoveFromCart}
                cartId={cartId}
            />
        </Modal>
        { loading && <Spinner/> }
    </>
    )
}

export default CartArticleRemove