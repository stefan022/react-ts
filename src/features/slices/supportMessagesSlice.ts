import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { ISupportMessage } from '../../ts/interfaces/ISupport/ISupportMessage';
import { supportMessagesAPI } from '../API/supportMessagesAPI';

interface InitialState {
    allMessagesForSupport: ISupportMessage[]
};

const initialState: InitialState = {
    allMessagesForSupport: []
};

export const supportMessagesSlice = createSlice({
    name: "support-messages",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
		builder.addMatcher(supportMessagesAPI.endpoints.getAllMessagesForSupport.matchFulfilled, (state, action: PayloadAction<ISupportMessage[]>) => {
            const allMessagesForSupport = action.payload;

            const newestMessagesForSupport = 
                [...allMessagesForSupport]
                .sort((prev: ISupportMessage, next: ISupportMessage) => next.changeTimestamp - prev.changeTimestamp);

			state.allMessagesForSupport = newestMessagesForSupport;
		});
	},
});