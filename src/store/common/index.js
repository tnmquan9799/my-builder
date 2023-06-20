import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isBuilderMode: false,
};

const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        actionSetIsBuilderMode: (state, action) => {
            state.isBuilderMode = action.payload;
        }
    }
});

const {reducer: commonReducer} = commonSlice;

export const {actionSetIsBuilderMode} = commonSlice.actions;
export default commonReducer;