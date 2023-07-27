import React, { MouseEventHandler } from 'react'
import CartSidebarContent from '../CartSidebarContent/CartSidebarContent';

interface IProps {
    displayCart: boolean;
    handleHideCart: MouseEventHandler<HTMLElement>
}

const CartSidebar = ({ displayCart, handleHideCart }: IProps) => {
    return (
        <div
            className={`${displayCart ? "right-0" : "-right-full"} w-[400px] fixed top-0 h-screen bg-white transition-all duration-500 z-30`}>
            { displayCart ? <CartSidebarContent handleHideCart={handleHideCart}/> : null }
        </div>
    )
}

export default CartSidebar