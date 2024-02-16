import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import MakeBugs from "../../Models/bugsFactory";



type BugAction = {
    name: string,
    bugStatus: string

}

// type BugUpdate = {
//     _id:String,
//     bug:MakeBugs,
//     type?:string

// }

const initial: MakeBugs[] = [];

const bugSlice = createSlice({
    name: "bugs",
    initialState: initial,


    reducers: {
        reportBug: (state: MakeBugs[], action: PayloadAction<MakeBugs>) => {

            state.push(action.payload);

        },

        getBugs: (state: MakeBugs[] /*action:PayloadAction<MakeBugs>*/) => {

            return state;

        },

        updateBug: (state: MakeBugs[], action: PayloadAction<MakeBugs, string>) => {

            state.forEach((b, i) => {
                if (b._id === action.payload._id) {
                    state[i] = action.payload;
                }
            });
        },


        trackBug: (state: MakeBugs[], action: PayloadAction<MakeBugs>) => {

        },

        markClose: (state: MakeBugs[], action: PayloadAction<BugAction>) => {
            state.filter(bug => bug.name === action.payload.name)[0].bugStatus =
                action.payload.bugStatus;
        }

    }

})


export default bugSlice.reducer;
export const { reportBug, trackBug, markClose, getBugs, updateBug } = bugSlice.actions;
