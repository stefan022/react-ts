import { combineReducers } from "@reduxjs/toolkit";

import rootAPI from "../features/API/rootAPI";
import { phonesSlice } from "../features/slices/phonesSlice";
import { tabletsSlice } from "../features/slices/tabletsSlice";
import { laptopsSlice } from "../features/slices/laptopsSlice";
import { televisionsSlice } from "../features/slices/televisionsSlice";
import { filterProductsSlice } from "../features/slices/filterProductsSlice";
import { sortProductsSlice } from "../features/slices/sortProductsSlice";
import { paginationProductsSlice } from "../features/slices/paginationProductsSlice";
import { reviewsSlice } from "../features/slices/reviewsSlice";
import { viewSlice } from "../features/slices/viewSlice";
import { supportSlice } from "../features/slices/supportSlice";
import { supportMessagesSlice } from "../features/slices/supportMessagesSlice";
import { wishlistSlice } from "../features/slices/wishlistSlice";

const rootReducer = combineReducers({
	[rootAPI.reducerPath]: rootAPI.reducer,
	phones: phonesSlice.reducer,
	tablets: tabletsSlice.reducer,
	laptops: laptopsSlice.reducer,
	televisions: televisionsSlice.reducer,
	filters: filterProductsSlice.reducer,
	sorts: sortProductsSlice.reducer,
	pagination: paginationProductsSlice.reducer,
	reviews: reviewsSlice.reducer,
	view: viewSlice.reducer,
	support: supportSlice.reducer,
	support_messages: supportMessagesSlice.reducer,
	wishlist: wishlistSlice.reducer
});

export default rootReducer;