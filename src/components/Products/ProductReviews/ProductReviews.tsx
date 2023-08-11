import React from 'react'

import { ReviewForm, ProductSingleReview, ProductReviewsTitle } from "../.."

const ProductReviews = () => {
    return (
        <div className='mb-6'>
            <ProductReviewsTitle/>
            <ReviewForm/>
            <ProductSingleReview adminReview={true}/>
            <ProductSingleReview adminReview={false}/>
            <ProductSingleReview adminReview={true}/>
        </div>
    )
}

export default ProductReviews