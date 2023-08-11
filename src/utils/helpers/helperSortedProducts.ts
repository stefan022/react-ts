import { IPhone } from "../../ts/interfaces/IProducts/IPhone";
import { SortBy } from "../../ts/types/SortBy";

export const helperSortedProducts = (sortBy: SortBy, products: IPhone[]): IPhone[] => {
    let sP: IPhone[] = [];

    switch(sortBy) {
        case "recommended": 
            sP = products;
            break;

        case "low-to-high": {
            const sortedProducts = 
                products
                    .slice()
                    .sort((prev: IPhone, next: IPhone) => prev.price - next.price);

            sP = sortedProducts;
            break;
        };
        case "high-to-low": {
            const sortedProducts = 
                products
                    .slice()
                    .sort((prev: IPhone, next: IPhone) => next.price - prev.price);

            sP = sortedProducts;
            break;
        };
        case "latest": {
            const sortedProducts = 
                products
                    .slice()
                    .sort((prev: IPhone, next: IPhone) => next.timestamp - prev.timestamp);

            sP = sortedProducts;
            break;
        };
        case "oldest": {
            const sortedProducts = 
                products
                    .slice()
                    .sort((prev: IPhone, next: IPhone) => prev.timestamp - next.timestamp);

            sP = sortedProducts;
            break;
        };
        case "a-z": {
            const sortedProducts = 
                products
                    .slice()
                    .sort((prev: IPhone, next: IPhone) => prev.phoneName.localeCompare(next.phoneName));

            sP = sortedProducts;
            break;
        };
        case "z-a": {
            const sortedProducts = 
                products
                    .slice()
                    .sort((prev: IPhone, next: IPhone) => next.phoneName.localeCompare(prev.phoneName));

            sP = sortedProducts;
            break;
        };
    };

    return sP;
};