import { createSlice } from "@reduxjs/toolkit"

import { TEMPLATE_KEY } from "../../constants";

const existingTemplate = localStorage.getItem(TEMPLATE_KEY);

const initialState = {
    isBuilderMode: false,
    selectedTemplate: existingTemplate ? JSON.parse(existingTemplate) : {} ,
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