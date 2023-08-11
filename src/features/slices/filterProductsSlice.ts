import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IPhone } from "../../ts/interfaces/IProducts/IPhone";
import { helperFilteredProducts } from "../../utils/helpers/helperFilteredProducts";

interface InitialState {
	filteredProducts: IPhone[] | [];
	filtersChecked: { [key: string]: boolean };
};

const initialState: InitialState = {
	filteredProducts: [],
	filtersChecked: {},
};

export const filterProductsSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		FILTERED_PRODUCTS: (state, action: PayloadAction<{ products: IPhone[], filterName?: string, isChecked?: boolean }>) => {
			const { products, filterName, isChecked } = action.payload;
			const filtersChecked = state.filtersChecked;

			if (isChecked) state.filtersChecked[filterName!] = true;
			else state.filtersChecked[filterName!] = false;

			const filteredProducts = helperFilteredProducts(filtersChecked, products);

			if (filteredProducts.length === 0) {
				state.filteredProducts = products;

				return;
			}

            state.filteredProducts = filteredProducts;
		},
        FILTERS_CHECKED: (state, action: PayloadAction<{ [key: string]: boolean }>) => {
			const { filtersChecked } = action.payload;

			state.filtersChecked = {...state.filtersChecked, filtersChecked};
        },
		RESET_FILTERS_CHECKED: (state, action: PayloadAction<{products: IPhone[]}>) => {
			const { products } = action.payload;

			state.filtersChecked = {};
			state.filteredProducts = products;
		}
    },
});

export const { FILTERS_CHECKED, RESET_FILTERS_CHECKED, FILTERED_PRODUCTS } = filterProductsSlice.actions;