import { nanoid } from "@reduxjs/toolkit";
import MakeBugs from "../Models/bugsFactory";

// import { BugPayload } from "./Redux/bugSlice"

//type Bug = BugPayload;


const bug1: MakeBugs = {
    _id: nanoid(),
    issueType: "Freeze",
    description: "App suddenly froze and need to be restart",
    reporter: "Dre Michael",
    timeReported: new Date().toString().slice(0, 24),
    priority: "High",
    issueState: "Open",
    issueTitle: "",
    appName: "",


}

const bug2: MakeBugs = {
    _id: nanoid(),
    issueType: "Crash",
    description: "App crash on startup",
    reporter: "Desmond Dessy",
    timeReported: new Date().toString().slice(0, 24),
    priority: "High",
    issueState: "Open",
    issueTitle: "",
    appName: "",
}


const bug3: MakeBugs = {
    _id: nanoid(),
    issueType: "Loading",
    description: "App stuck on loading",
    reporter: "Desiree Brat",
    timeReported: new Date().toString().slice(0, 24),
    priority: "Medium",
    issueState: "In Progress",
    issueTitle: "",
    appName: "",
}


const bug4: MakeBugs = {
    _id: nanoid(),
    issueType: "Crash",
    description: "App suddenly crash",
    reporter: "Sage Looney",
    timeReported: new Date().toString().slice(0, 24),
    priority: "Low",
    issueState: "Closed",
    issueTitle: "",
    appName: "",
}


//type BugsContructor = new (...args:BugPayload[]) => BugPayload;

export default function getbugs() {
    const issues: MakeBugs[] = [];
    issues.push(new MakeBugs(bug1))
    issues.push(new MakeBugs(bug2))
    issues.push(new MakeBugs(bug3))
    issues.push(new MakeBugs(bug4))
    const sorted = issues.sort((a, b) => Number(a.priority) - Number(b.priority));
    return sorted;
}





