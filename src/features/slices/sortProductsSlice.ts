import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { SortBy } from "../../ts/types/SortBy";
import { helperSortedProducts } from "../../utils/helpers/helperSortedProducts";
import { IProduct } from "../../ts/interfaces/IProduct/IProduct";
import { IScreen } from "../../ts/interfaces/IProduct/IScreen";

interface InitialState {
	sortedProducts: IProduct<IScreen | string>[] | [];
    sortBy: SortBy
};

const initialState: InitialState = {
	sortedProducts: [],
    sortBy: "recommended"
};

export const sortProductsSlice = createSlice({
	name: "sort",
	initialState,
	reducers: {
        SORT_BY: (state, action: PayloadAction<{ sortBy: SortBy, products: IProduct<IScreen | string>[] }>) => {
            const { sortBy, products } = action.payload;

            const sortedProducts = helperSortedProducts(sortBy, products);

            state.sortBy = sortBy;
            state.sortedProducts = sortedProducts;
        },
        SEARCH_PRODUCTS: (state, action: PayloadAction<{ products: IProduct<IScreen | string>[] }>) => {
            const { products: searchedProducts } = action.payload;

            state.sortedProducts = searchedProducts;
        }   
    }
});

export const { SORT_BY, SEARCH_PRODUCTS } = sortProductsSlice.actions;