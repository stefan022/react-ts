import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { phonesAPI } from './../API/phonesAPI';
import { IPhone } from "../../ts/interfaces/IProducts/IPhone";

interface InitialState {
	phones: IPhone[];
	singlePhone: IPhone | null;
};

const initialState: InitialState = {
	phones: [],
	singlePhone: null,
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
			state.singlePhone = action.payload;
		});
	},
});