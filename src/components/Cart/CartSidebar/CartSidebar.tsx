import React from 'react'

interface IProps {
    displayCart: boolean;
}

const CartSidebar = ({ displayCart }: IProps) => {
    return (
        <div
            className={`${displayCart ? "w-[350px]" : "w-0"} absolute top-0 right-0 h-screen bg-blue-400 transition-all duration-500 z-10`}>
            { displayCart ? <p>Cart:</p> : null }
        </div>
    )
}

export default CartSidebar