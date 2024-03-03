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

type IssueById = string;

interface BugUpdate {
    id: string,
    description: string,
    issueType: string;
    appVersion: string;
    appName: string;
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
            return state.map((state) => {
                const issueToUpdate = [state].find((b, i) => b._id === action.payload.id)
                if (issueToUpdate) return {
                    ...issueToUpdate, ...action.payload
                }
            }) as MakeBugs[]
        },

        getClosedIssues: (state: MakeBugs[], action: PayloadAction<BugAction>) =>
            ensureT([...state].find(bug => bug.issueState === action.payload.state)),
        getOpenIssues: (state: MakeBugs[], action: PayloadAction<BugAction>) =>
            ensureT([...state].find(bug => bug.issueState === action.payload.state)),
        getInprogressIssues: (state: MakeBugs[], action: PayloadAction<BugAction>) =>
            ensureT([...state].find(bug => bug.issueState === action.payload.state)),
        getIssueById: (issues: MakeBugs[], action: PayloadAction<IssueById>) => ensureT([...issues].find(issue => issue._id == action.payload)),
    },

});


export default bugSlice.reducer
export const { reportBug, getClosedIssues, getBugs, updateBug, getOpenIssues, getInprogressIssues, getIssueById } = bugSlice.actions;
export const IssuesDispatch = { ...bugSlice.actions }
console.log(`Inside bugslice:${Object.keys(IssuesDispatch)}`)
//export type IssuesDispatch = keyof bugSlice.actions;
