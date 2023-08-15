import { IProduct } from "../../ts/interfaces/IProducts/IProduct";
import { TColors } from "../../ts/types/TColors";

export const helperFilteredProducts = (
    filtersChecked: { [key: string]: boolean }, products: IProduct[]
): IProduct[] => {
    const filters: string[] = [];
    
    Object.entries(filtersChecked).forEach((product) => {
        if (product[1]) {
            filters.push(product[0]);

            return;
        }
    });

    const filteredProducts = products.filter((product: IProduct) => {
        return (
            filters.includes(product.brand)
            || filters.includes(`${product.rating}`)
            || product.colors.some((color: TColors) => filters.includes(color))
        );
    });

    return filteredProducts;
}