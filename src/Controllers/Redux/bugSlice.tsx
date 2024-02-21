import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import MakeBugs from "../../Models/bugsFactory";

export function ensureT(item: MakeBugs | undefined): MakeBugs[] | void {
    if (item === undefined || item === null) {
        return;
    }
    return [item];
}

interface BugAction {
    state: "Open" | "Closed" | "In Progress";
}

interface BugUpdate {
    id: string;
    description: string,
    issueType: string,

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

        updateBug: (state: MakeBugs[], action: PayloadAction<BugUpdate>) => {
            [...state].forEach((b, i) => {
                if (b._id === action.payload.id) {
                    state[i].description = action.payload.description;
                }
            });
            return state;
        },

        getClosedIssues: (state: MakeBugs[], action: PayloadAction<BugAction>) =>
            ensureT([...state].find(bug => bug.issueState === action.payload.state)),
        getOpenIssues: (state: MakeBugs[], action: PayloadAction<BugAction>) =>
            ensureT([...state].find(bug => bug.issueState === action.payload.state)),
        getInprogressIssues: (state: MakeBugs[], action: PayloadAction<BugAction>) =>
            ensureT([...state].find(bug => bug.issueState === action.payload.state)),
    }

});


export default bugSlice.reducer
export const { reportBug, getClosedIssues, getBugs, updateBug, getOpenIssues, getInprogressIssues } = bugSlice.actions;
export const IssuesDispatch = { ...bugSlice.actions }
console.log(`Inside bugslice:${Object.keys(IssuesDispatch)}`)
//export type IssuesDispatch = keyof bugSlice.actions;
