import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import RegisterUser from '../../Models/registerUserFactory';
import IssueReporter from '../../Models/reporterFactory';


const registerUserSlice = createSlice({
    name: "registerUser",
    initialState: [] as RegisterUser[],
    reducers: {
        registerUser: (user: RegisterUser[], action: PayloadAction<RegisterUser>) => {
            user.push(action.payload);
        },
    },

})


export default registerUserSlice.reducer;
export const { registerUser } = registerUserSlice.actions;
