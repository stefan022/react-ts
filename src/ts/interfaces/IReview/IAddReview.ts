export interface IAddReview {
    phoneId: string;
    userId: string;
    username: string;
    reviewRating: number;
    timestamp: number;
    reviewTitle: string;
    reviewText: string;
}