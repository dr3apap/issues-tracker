import { createSlice } from "@reduxjs/toolkit";



type AuthState = {

    LoggedIn: boolean,
    LoggedOut: boolean
}

// type AuthAction = {
//         userName:string, 
//         passWord:string,
//         role:string

// }
const authSlice = createSlice({
    name: "auth",
    initialState: {
        LoggedOut: true,
        LoggedIn: false,
    },
    reducers: {
        signIn: (state: AuthState /*action:PayloadAction<AuthAction>*/) => {
            //const {userName, passWord, role} = action.payload;
            state.LoggedIn = true;
            state.LoggedOut = false;
        },

        signOut: (state: AuthState) => {
            state.LoggedIn = false;
            state.LoggedOut = true;
        },

    }
})

export default authSlice.reducer;
export const { signIn, signOut } = authSlice.actions;
