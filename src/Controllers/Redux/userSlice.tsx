import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import IssueReporter from '../../Models/reporterFactory'
import RegiserUser from '../../Models/registerUserFactory'

const userSlice = createSlice({
    name: "user",
    initialState: [] as IssueReporter[],
    reducers: {

        createUser: (state: IssueReporter[], action: PayloadAction<IssueReporter>) => {
            state.push({ ...action.payload });
        },
        getUser: (state: IssueReporter[] /*action:PayloadAction<Users>*/) => {
            return state;

        }
    }
})


export default userSlice.reducer;
export const { getUser, createUser } = userSlice.actions;
