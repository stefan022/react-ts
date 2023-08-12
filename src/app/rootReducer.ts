import { combineReducers } from "@reduxjs/toolkit";

import rootAPI from "../features/API/rootAPI";
import { phonesSlice } from "../features/slices/phonesSlice";
import { filterProductsSlice } from "../features/slices/filterProductsSlice";
import { sortProductsSlice } from "../features/slices/sortProductsSlice";
import { paginationProductsSlice } from "../features/slices/paginationProductsSlice";
import { reviewsSlice } from "../features/slices/reviewsSlice";

const rootReducer = combineReducers({
	[rootAPI.reducerPath]: rootAPI.reducer,
	phones: phonesSlice.reducer,
	filters: filterProductsSlice.reducer,
	sorts: sortProductsSlice.reducer,
	pagination: paginationProductsSlice.reducer,
	reviews: reviewsSlice.reducer,
});

export default rootReducer;