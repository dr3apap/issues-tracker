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
        signIn: (auth: AuthState /*action:PayloadAction<AuthAction>*/) => {
            //const {userName, passWord, role} = action.payload;
            return {
                ...auth, ['LoggedIn']: true,
                ['LoggedOut']: false,
            }
        },

        signOut: (auth: AuthState) => {
            return {
                ...auth, ['LoggedIn']: false,
                ['LoggedOut']: true,
            }
        },

    }
})

export default authSlice.reducer;
export const { signIn, signOut } = authSlice.actions;
