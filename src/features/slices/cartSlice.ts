import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { cartAPI } from "../API/cartAPI";
import { ICart } from "../../ts/interfaces/ICart/ICart";

interface InitialState {
    cart: ICart[];
}

const initialState: InitialState = {
    cart: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
		builder.addMatcher(cartAPI.endpoints.getAllCarts.matchFulfilled, (state, action: PayloadAction<ICart[]>) => {
			state.cart = action.payload;
		});
	},
})