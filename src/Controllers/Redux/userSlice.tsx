import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import User from '../../Models/userFactory'

const userSlice = createSlice({
    name: "user",
    initialState: [] as User[],
    reducers: {

        createUser: (state: User[], action: PayloadAction<User>) => {
            state.push(action.payload);
        },
        getUser: (state: User[] /*action:PayloadAction<Users>*/) => {
            return state;

        }
    }
})


export default userSlice.reducer;
export const { getUser, createUser } = userSlice.actions;
