import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { phonesAPI } from './../API/phonesAPI';
import { IPhone } from "../../ts/interfaces/IProducts/IPhone";

type InitialState = {
	phones: IPhone[];
	phone: IPhone | {};
};

const initialState: InitialState = {
	phones: [],
	phone: {},
};

export const phonesSlice = createSlice({
	name: "phones",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addMatcher(phonesAPI.endpoints.getPhones.matchFulfilled, (state, action: PayloadAction<IPhone[]>) => {
			state.phones = action.payload;
		});
		builder.addMatcher(phonesAPI.endpoints.getSinglePhone.matchFulfilled, (state, action: PayloadAction<IPhone>) => {
			state.phone = action.payload;
		});
	},
});