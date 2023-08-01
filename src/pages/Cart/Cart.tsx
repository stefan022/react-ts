import React from 'react'
import { Banner } from '../../components'

import Container from '../../containers/Container/Container';

import cart from "../../assets/cart.jpg";
import cartDelivery from "../../assets/cart-delivery.png";
import cartReturns from "../../assets/cart-returns.png";
import cartCertificate from "../../assets/cart-certificate.png";
import cartSupport from "../../assets/cart-support.png";

const Cart = () => {
    console.log(window.location.origin);

    return (
        <div>
            <Banner 
                title="Cart"
                bgPosition="bg-center"
                image={cart}
            />
            <Container>
                <div className='flex justify-between py-6'>
                    <div className='flex items-center gap-4'>
                        <div>
                            <img width={50} src={cartDelivery} alt="cart-delivery.png" />
                        </div>
                        <div className='flex flex-col justify-between'>
                            <p>Fast & Secure Delivery</p>
                            <p className="text-gray-400">Tell about your service</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div>
                            <img width={50} src={cartReturns} alt="cart-delivery.png" />
                        </div>
                        <div className='flex flex-col justify-between'>
                            <p>2 Days Return Policy</p>
                            <p className="text-gray-400">No question ask</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div>
                            <img width={50} src={cartCertificate} alt="cart-delivery.png" />
                        </div>
                        <div className='flex flex-col justify-between'>
                            <p>Money Back Guarantee</p>
                            <p className="text-gray-400">Within 5 business days</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div>
                            <img width={50} src={cartSupport} alt="cart-delivery.png" />
                        </div>
                        <div className='flex flex-col justify-between'>
                            <p>24 X 7 Service</p>
                            <p className="text-gray-400">Online service for customer</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between gap-6 py-6">
                    <div className='w-2/3'>
                        <div className='flex justify-between items-center border border-gray-300 mb-6 h-[50px] p-4'>
                            <p>There are <span>0</span> products in your cart</p>
                            <button>Clear Cart</button>
                        </div>
                        <div className='border border-gray w-full h-[150px] flex items-center justify-between'>
                            <div className='p-4 w-1/5 h-full border border-gray-300'>
                                <div className='bg-red-300 w-full h-full'></div>
                            </div>
                            <div className='w-3/5 h-full border border-gray-300 flex flex-col justify-between p-4'>
                                <div>
                                    <p>Product name</p>
                                    <div className='flex'>
                                        <p>$color</p>
                                        <p>$rating</p>
                                    </div>
                                </div>
                                <div className='w-1/4'>
                                    <div className="border border-gray-100 flex items-center justify-between p-1">
                                        <div className="bg-gray-100 w-3/12 text-center">-</div>
                                        <div className="text-center w-6/12">1</div>
                                        <div className="bg-gray-100 w-3/12 text-center">+</div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-1/5 h-full border border-gray-300 p-4'>
                                <div className='flex flex-col items-end'>
                                    <p>Article Price:</p>
                                    <p>$price</p>
                                </div>
                            </div>
                        </div>
                        <div className='border border-gray-300 flex justify-between items-center p-4'>
                            <div className='flex gap-2'>
                                <div>Remove</div>
                                <div>Add wishlist</div>
                            </div>
                            <div>
                                <div>Total: $price</div>
                            </div>
                        </div>
                    </div>
                    <div className='border border-gray-300 h-full w-1/3'>
                        <div className='p-4 border border-b-gray-300'>
                            <p>Cart Summary:</p>
                        </div>
                        <div className='p-4 border border-b-gray-200'>
                            <div className='flex justify-between mb-4'>
                                <p>Shipping Charge :</p>
                                <p>$shipingChargePrice</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>Estimated Tax (12.5%) :</p>
                                <p>$eslimitedTaxPrice</p>
                            </div>
                        </div>
                        <div className='bg-gray-200 p-4'>
                            <div className='flex justify-between'>
                                <p>Total amount:</p>
                                <p>$totalAmountPrice</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Cart