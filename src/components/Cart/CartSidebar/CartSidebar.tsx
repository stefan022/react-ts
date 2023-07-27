import React, { MouseEventHandler } from 'react'
import CartSidebarContent from '../CartSidebarContent/CartSidebarContent';

interface IProps {
    displayCart: boolean;
    handleHideCart: MouseEventHandler<HTMLAnchorElement>
}

const CartSidebar = ({ displayCart, handleHideCart }: IProps) => {
    return (
        <div
            className={`${displayCart ? "w-[350px]" : "w-0"} fixed top-0 right-0 h-screen bg-blue-400 transition-all duration-500 z-30`}>
            { displayCart ? <CartSidebarContent handleHideCart={handleHideCart}/> : null }
        </div>
    )
}

export default CartSidebar