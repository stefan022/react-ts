import { Routes } from "../../../router/Routes";
import { ICategory } from "../../../ts/interfaces/ICategory/ICategory";

export const categoriesData: ICategory[] = [
    {
        categoryId: 1,
        route: `${Routes.PRODUCTS}${Routes.PHONES}`,
        categoryName: "Phones"
    },
    {
        categoryId: 2,
        route: `${Routes.PRODUCTS}${Routes.TABLETS}`,
        categoryName: "Tablets"
    },
    {
        categoryId: 3,
        route: `${Routes.PRODUCTS}${Routes.LAPTOPS}`,
        categoryName: "Laptops"
    },
    {
        categoryId: 4,
        route: `${Routes.PRODUCTS}${Routes.TELEVISIONS}`,
        categoryName: "Televisions"
    },
    {
        categoryId: 5,
        route: `${Routes.PRODUCTS}${Routes.OTHERS}`,
        categoryName: "Others"
    },
]