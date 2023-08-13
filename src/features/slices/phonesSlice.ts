import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { phonesAPI } from './../API/phonesAPI';
import { IPhone } from "../../ts/interfaces/IProducts/IPhone";

interface InitialState {
	phones: IPhone[];
};

const initialState: InitialState = {
	phones: [],
};

export const phonesSlice = createSlice({
	name: "phones",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addMatcher(phonesAPI.endpoints.getPhones.matchFulfilled, (state, action: PayloadAction<IPhone[]>) => {
			state.phones = action.payload;
		});
	},
});