import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IPhone } from "../../ts/interfaces/IProducts/IPhone";
import { SortBy } from "../../ts/types/SortBy";
import { helperSortedProducts } from "../../utils/helpers/helperSortedProducts";

interface InitialState {
	sortedProducts: IPhone[] | [];
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
        SORT_BY: (state, action: PayloadAction<{ sortBy: SortBy, products: IPhone[] }>) => {
            const { sortBy, products } = action.payload;

            const sortedProducts = helperSortedProducts(sortBy, products);

            state.sortBy = sortBy;
            state.sortedProducts = sortedProducts;
        },
    }
});

export const { SORT_BY } = sortProductsSlice.actions;