import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isBuilderMode: false,
    selectedTemplate: {},
};

const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        actionSetIsBuilderMode: (state, action) => {
            state.isBuilderMode = action.payload;
        },
        actionSetSelectedTemplate: (state, action) => {
            state.selectedTemplate = action.payload;
        }
    }
});

const {reducer: commonReducer} = commonSlice;

export const {actionSetIsBuilderMode, actionSetSelectedTemplate} = commonSlice.actions;
export default commonReducer;