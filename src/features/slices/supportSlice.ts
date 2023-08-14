import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { ISupport } from '../../ts/interfaces/ISupport/ISupport';
import { supportAPI } from '../API/supportAPI';

interface InitialState {
    allSupport: ISupport[]
}

const initialState: InitialState = {
    allSupport: []
}

export const supportSlice = createSlice({
    name: "support",
    initialState,
    reducers: { },
    extraReducers: (builder) => {
		builder.addMatcher(supportAPI.endpoints.getAllSupport.matchFulfilled, (state, action: PayloadAction<ISupport[]>) => {
			state.allSupport = action.payload;
		});
	},
});