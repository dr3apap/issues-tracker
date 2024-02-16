import { combineReducers } from "redux";
import authSlice from "./authSlice";
import issues from "./bugSlice";
import userSlice from "./userSlice";



const rootReducer = combineReducers({

    auth: authSlice,
    issues,
    users: userSlice
})


export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
