import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
    view: "grid" | "list";
}

const initialState: InitialState = {
    view: "grid"
}

export const viewSlice = createSlice({
    name: "views",
    initialState,
    reducers: {
        VIEW_CHANGE: (state, action: PayloadAction<"grid" | "list">) => {
            state.view = action.payload;
        }
    }
})

export const { VIEW_CHANGE } = viewSlice.actions;