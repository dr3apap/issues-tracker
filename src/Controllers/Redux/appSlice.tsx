import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AppData from "../../Models/appFactory";

interface Application {
    _id: string,
    appName: string,
    version: string,
    repolink: string,
}

const initialValue: AppData[] = [];
const appSlice = createSlice({
    name: "apps",
    initialState: initialValue,
    reducers: {
        createApp: (app: AppData[], action: PayloadAction<AppData>) => {
            app.push(action.payload);
        },

    }
})

export default appSlice.reducer;
export const { createApp } = appSlice.actions;
