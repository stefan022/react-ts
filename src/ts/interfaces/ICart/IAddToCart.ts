export interface IAddToCart {
    userId: string;
    articleId: number;
    articleName: string;
    price: number;
    quantity: number;
    image: string;
    rating: number;
    category: string;
}