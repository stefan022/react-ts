import { combineReducers } from "@reduxjs/toolkit";

import rootAPI from "../features/API/rootAPI";

const rootReducer = combineReducers({
	[rootAPI.reducerPath]: rootAPI.reducer,
});

export default rootReducer;