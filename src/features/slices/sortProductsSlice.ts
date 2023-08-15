import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { SortBy } from "../../ts/types/SortBy";
import { helperSortedProducts } from "../../utils/helpers/helperSortedProducts";
import { IProduct } from "../../ts/interfaces/IProducts/IProduct";

interface InitialState {
	sortedProducts: IProduct[] | [];
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
        SORT_BY: (state, action: PayloadAction<{ sortBy: SortBy, products: IProduct[] }>) => {
            const { sortBy, products } = action.payload;

            const sortedProducts = helperSortedProducts(sortBy, products);

            state.sortBy = sortBy;
            state.sortedProducts = sortedProducts;
        },
    }
});

export const { SORT_BY } = sortProductsSlice.actions;