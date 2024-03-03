import { nanoid } from "@reduxjs/toolkit";
import MakeBugs from "../Models/bugsFactory";
import IssueReporter from '../Models/reporterFactory';

// import { BugPayload } from "./Redux/bugSlice"

//type Bug = BugPayload;


const bug1: MakeBugs = {
    _id: nanoid(),
    issueType: "Freeze",
    description: "App suddenly froze and need to be restart",
    reporter: { firstName: "Dre", lastName: "Adesina", email: "dr3@yahoo.com" },
    timeReported: new Date().toString().slice(0, 24),
    priority: "High",
    issueState: "Open",
    issueTitle: "",
    appName: "",
    appVersion: "",
    repolink: "",


}

const bug2: MakeBugs = {
    _id: nanoid(),
    issueType: "Crash",
    description: "App crash on startup",
    reporter: { firstName: "Desmond", lastName: "Dessy", email: "dessy@yahoo.com" },
    timeReported: new Date().toString().slice(0, 24),
    priority: "High",
    issueState: "Open",
    issueTitle: "",
    appName: "",
    appVersion: "",
    repolink: "",

}


const bug3: MakeBugs = {
    _id: nanoid(),
    issueType: "Loading",
    description: "App stuck on loading",
    reporter: { firstName: "Desieee", lastName: "Brat", email: "brat@yahoo.com" },
    timeReported: new Date().toString().slice(0, 24),
    priority: "Medium",
    issueState: "In Progress",
    issueTitle: "",
    appName: "",
    appVersion: "",
    repolink: "",

}


const bug4: MakeBugs = {
    _id: nanoid(),
    issueType: "Crash",
    description: "App suddenly crash",
    reporter: { firstName: "Sage", lastName: "Looney", email: "sage@yahoo.com" },
    timeReported: new Date().toString().slice(0, 24),
    priority: "Low",
    issueState: "Closed",
    issueTitle: "",
    appName: "",
    appVersion: "",
    repolink: "",

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





