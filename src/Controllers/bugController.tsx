import { nanoid } from "@reduxjs/toolkit";
import MakeBugs from "../Models/bugsFactory";

// import { BugPayload } from "./Redux/bugSlice"

//type Bug = BugPayload;


const bug1: MakeBugs = {
    _id: nanoid(),
    name: "snake-game",
    issueType: "Freeze",
    description: "App suddenly froze and need to be restart",
    reporter: "Dre Michael",
    timeStamp: new Date().toString().slice(0, 24),
    priority: "High",
    version: "V2.0",
    issueState: "Open"


}

const bug2: MakeBugs = {
    _id: nanoid(),
    name: "bug-tracker",
    issueType: "Crash",
    description: "App crash on startup",
    reporter: "Desmond Dessy",
    timeStamp: new Date().toString().slice(0, 24),
    priority: "High",
    version: "V1.0",
    issueState: "Open"
}


const bug3: MakeBugs = {
    _id: nanoid(),
    name: "Daily-Planner",
    issueType: "Loading",
    description: "App stuck on loading",
    reporter: "Desiree Brat",
    timeStamp: new Date().toString().slice(0, 24),
    priority: "Medium",
    version: "V3.0",
    issueState: "In Progress"
}


const bug4: MakeBugs = {
    _id: nanoid(),
    name: "Ticket-Master",
    issueType: "Crash",
    description: "App suddenly crash",
    reporter: "Sage Looney",
    timeStamp: new Date().toString().slice(0, 24),
    priority: "Low",
    version: "V3.0",
    issueState: "Closed"
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





