import React, { FC, useState, useEffect } from 'react'

import { ReviewForm, ProductReviewsTitle, ProductSingleReview, Spinner } from "../.."
import { useGetReviewsQuery } from '../../../features/API/reviewsAPI';
import { RootState } from '../../../ts/types/RootState';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { IReview } from '../../../ts/interfaces/IReview/IReview';
import { toast } from 'react-toastify';

interface IProps {
    articleId: number;
}

const ProductReviews: FC<IProps> = ({ articleId }): JSX.Element => {
    useGetReviewsQuery(articleId);
    const [ reviews, setReviews ] = useState<IReview[] | []>([]);
    const [ loading, setLoading ] = useState<boolean>(false);
    const { reviews: reviewsStore } = useAppSelector((state: RootState) => state.reviews);

    useEffect(() => {
        setReviews(reviewsStore);

        if (loading) {
            setLoading(false);
            toast.success("You have successfully created your review");

            return;
        }

        // eslint-disable-next-line
    }, [reviewsStore]);

    return (
        <div className='mb-6'>
            <ProductReviewsTitle/>
            <ReviewForm
                setLoading={setLoading}
            />
            {
                reviews.length > 0 ? (
                    reviews.map((review: IReview) => {
                        const { reviewId, username, reviewRating, timestamp, reviewTitle, reviewText, adminResponse, reviewAnswer } = review;

                        return (
                            <ProductSingleReview 
                                key={reviewId}
                                username={username}
                                reviewRating={reviewRating}
                                reviewTimestamp={timestamp}
                                reviewTitle={reviewTitle}
                                reviewText={reviewText}
                                adminResponse={adminResponse}
                                reviewAnswer={reviewAnswer}
                            />
                        )
                    })
                ) : null
            }
            { loading && <Spinner/> }
        </div>
    )
}

export default ProductReviews