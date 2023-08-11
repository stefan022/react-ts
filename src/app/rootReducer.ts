import { combineReducers } from "@reduxjs/toolkit";

import rootAPI from "../features/API/rootAPI";
import { phonesSlice } from "../features/slices/phonesSlice";
import { filterProductsSlice } from "../features/slices/filterProductsSlice";
import { sortProductsSlice } from "../features/slices/sortProductsSlice";

const rootReducer = combineReducers({
	[rootAPI.reducerPath]: rootAPI.reducer,
	phones: phonesSlice.reducer,
	filters: filterProductsSlice.reducer,
	sorts: sortProductsSlice.reducer,
});

export default rootReducer;