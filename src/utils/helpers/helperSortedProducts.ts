import { IProduct } from "../../ts/interfaces/IProducts/IProduct";
import { SortBy } from "../../ts/types/SortBy";

export const helperSortedProducts = (sortBy: SortBy, products: IProduct[]): IProduct[] => {
    let sP: IProduct[] = [];

    switch(sortBy) {
        case "recommended": 
            sP = products;
            break;

        case "low-to-high": {
            const sortedProducts = 
                products
                    .slice()
                    .sort((prev: IProduct, next: IProduct) => prev.price - next.price);

            sP = sortedProducts;
            break;
        };
        case "high-to-low": {
            const sortedProducts = 
                products
                    .slice()
                    .sort((prev: IProduct, next: IProduct) => next.price - prev.price);

            sP = sortedProducts;
            break;
        };
        case "latest": {
            const sortedProducts = 
                products
                    .slice()
                    .sort((prev: IProduct, next: IProduct) => next.timestamp - prev.timestamp);

            sP = sortedProducts;
            break;
        };
        case "oldest": {
            const sortedProducts = 
                products
                    .slice()
                    .sort((prev: IProduct, next: IProduct) => prev.timestamp - next.timestamp);

            sP = sortedProducts;
            break;
        };
        case "a-z": {
            const sortedProducts = 
                products
                    .slice()
                    .sort((prev: IProduct, next: IProduct) => prev.articleName.localeCompare(next.articleName));

            sP = sortedProducts;
            break;
        };
        case "z-a": {
            const sortedProducts = 
                products
                    .slice()
                    .sort((prev: IProduct, next: IProduct) => next.articleName.localeCompare(prev.articleName));

            sP = sortedProducts;
            break;
        };
    };

    return sP;
};