import React from 'react'
import { Banner, ProductImages, ProductInformation, ProductRatings, ProductReviews, ProductSpecifications } from '../../components'
import Container from '../../containers/Container/Container'

const ProductDetails = () => {
    return (
        <div>
            <Banner
                title="Product Details"
            />
            <Container>
                <div className='flex py-6'>
                    <div className='w-1/2'>
                        <ProductImages/>
                        <div className='w-full flex gap-4'>
                            <button className='w-1/2 bg-green-400 py-1 px-3'>Add To Cart</button>
                            <button className='w-1/2 bg-blue-400 py-1 px-3'>Order</button>
                        </div>
                    </div>
                    <div className='w-1/2 border border-gray h-[450px] p-6'>
                        <ProductInformation/>
                    </div>
                </div>
                <ProductSpecifications/>
                <ProductRatings/>
                <ProductReviews/>
            </Container>
        </div>
    )
}

export default ProductDetails