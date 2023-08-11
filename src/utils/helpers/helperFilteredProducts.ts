import { IPhone } from "../../ts/interfaces/IProducts/IPhone";
import { TColors } from "../../ts/types/TColors";


export const helperFilteredProducts = (
    filtersChecked: { [key: string]: boolean }, products: IPhone[]
): IPhone[] => {
    const filters: string[] = [];
    
    Object.entries(filtersChecked).forEach((product) => {
        if (product[1]) {
            filters.push(product[0]);

            return;
        }
    });

    const filteredProducts = products.filter((product: IPhone) => {
        return (
            filters.includes(product.brand)
            || filters.includes(`${product.rating}`)
            || product.colors.some((color: TColors) => filters.includes(color))
        );
    });

    return filteredProducts;
}