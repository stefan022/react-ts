import React from 'react'

import { Banner, CartItems, CartServices, CartSummary, CartTotalQuantity } from '../../components'

import Container from '../../containers/Container/Container';
import cart from "../../assets/cart.jpg";

const Cart = () => {
    return (
        <div>
            <Banner 
                title="Cart"
                bgPosition="bg-center"
                image={cart}
            />
            <Container>
                <div className='flex justify-between py-6'>
                    <CartServices/>
                </div>
                <div className="flex justify-between gap-6 py-6">
                    <div className='w-2/3'>
                        <CartTotalQuantity/>
                        <CartItems/>
                    </div>
                    <div className='h-full w-1/3'>
                        <CartSummary/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Cart