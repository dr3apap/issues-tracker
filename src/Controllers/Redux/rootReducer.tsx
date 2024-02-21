//import { combineReducers } from "redux";
//import { combineSlices } from '@reduxjs/toolkit'
import { configureStore } from "@reduxjs/toolkit"
import auth from "./authSlice";
import issues from "./bugSlice";
import users from "./userSlice";
import apps from "./appSlice";

const reducer = {
    auth,
    issues,
    users,
    apps,
}

const store = configureStore({ reducer })

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

