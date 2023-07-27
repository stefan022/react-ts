import React, { MouseEventHandler } from 'react'
import { Link } from 'react-router-dom'
import { Routes } from '../../../router/Routes'

interface IProps {
    handleHideCart: MouseEventHandler<HTMLAnchorElement>
}

const CartSidebarContent = ({ handleHideCart }: IProps) => {
    return (
        <div>
            <p>Cart:</p>
            <Link onClick={handleHideCart} to={Routes.CART}>View Cart</Link>
        </div>
    )
}

export default CartSidebarContent