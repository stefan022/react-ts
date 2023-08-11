import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IPhone } from "../../ts/interfaces/IProducts/IPhone";
import { SortBy } from "../../ts/types/SortBy";
import { helperSortedProducts } from "../../utils/helpers/helperSortedProducts";

interface InitialState {
	sortedProducts: IPhone[] | [];
};

const initialState: InitialState = {
	sortedProducts: [],
};

export const sortProductsSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
        SORT_BY: (state, action: PayloadAction<{ sortBy: SortBy, products: IPhone[] }>) => {
            const { sortBy, products } = action.payload;

            const sortedProducts = helperSortedProducts(sortBy, products);

            state.sortedProducts = sortedProducts;
        },
    }
});

export const { SORT_BY } = sortProductsSlice.actions;