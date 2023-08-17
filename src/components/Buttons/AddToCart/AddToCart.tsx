import React, { FC, useEffect, useState } from 'react'

import { useAddToCartMutation, useGetAllCartsQuery } from '../../../features/API/cartAPI';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { RootState } from '../../../ts/types/RootState';
import { Modal } from '@mui/material';
import { AddedToCart, AlreadyAddedToCart, ContentAddToCart, ContentAddedToCart } from "../../../components"

import "./AddToCart.scss"
import { findCartId } from '../../../utils/findCartId';

interface IProps {
    articleId: number;
    articleName: string;
    price: number;
    quantity: number;
    image: string;
    rating: number;
    category: string;
    cartType: string;
    iconSize: number;
}

const AddToCart: FC<IProps> = ({ articleId, articleName, price, quantity, image, rating, category, cartType, iconSize }): JSX.Element => {
    useGetAllCartsQuery();

    const userId = localStorage.getItem("userId");
    const { cart } = useAppSelector((state: RootState) => state.cart);

    const [ modalIsOpen, setModalIsOpen ] = useState<boolean>(false);
    const [ isAlreadyAdded, setIsAlreadyAdded ] = useState<boolean>(false);
    const [ clickedAddToCart, setClickedAddToCart ] = useState<boolean>(false);

    const [ addToCart ] = useAddToCartMutation();

    useEffect(() => {
        const addedToCart = findCartId(cart, userId, articleId, category);
        
        if (addedToCart) setIsAlreadyAdded(true);
    
        // eslint-disable-next-line
    }, [cart, category]);
    
    const handleAddToCart = (artId: number, c: string) => { 
        setModalIsOpen(true);
    
        if (!isAlreadyAdded) {
            addToCart({ userId: userId as string, articleId: artId, articleName, category: c, image, price, quantity, rating });
            setClickedAddToCart(true);

            return;
        };

        setClickedAddToCart(false);
    };
    

    const handleCloseModal = () => setModalIsOpen(false);

    return (
        <>
            <button 
                className={isAlreadyAdded ? `added-to-cart__${cartType}` : `add-to-cart__${cartType}`}
                onClick={() => handleAddToCart(articleId, category)}
            >
                {
                    isAlreadyAdded
                        ? <ContentAddedToCart iconSize={iconSize}/>
                        : <ContentAddToCart iconSize={iconSize}/>
                }
            </button>
            <Modal
                open={modalIsOpen}
                onClose={handleCloseModal}
                children={
                    clickedAddToCart
                        ? <AddedToCart handleCloseModal={handleCloseModal}/>
                        : <AlreadyAddedToCart/>
                }
            />
        </>
    )
}

export default AddToCart