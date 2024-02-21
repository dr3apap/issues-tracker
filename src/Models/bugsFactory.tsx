// import { BugPayload } from "../Controllers/Redux/bugSlice";
import { nanoid } from "@reduxjs/toolkit";

class MakeBugs {
    _id!: string;
    description!: string;
    priority!: "High" | "Medium" | "Low";
    issueType!: string;
    reporter!: string;
    timeReported: string;
    issueState!: "Open" | "In Progress" | "Closed";
    issueTitle!: string;
    appName!: string;
    constructor({ appName, issueTitle, issueType, description, priority, reporter, timeReported, issueState }: MakeBugs, id = nanoid(5)) {
        this._id = id;
        this.description = description;
        this.priority = priority;
        this.reporter = reporter;
        this.timeReported = timeReported;
        this.issueState = issueState;
        this.issueTitle = issueTitle;
        this.appName = appName;
    }
}

export default MakeBugs;

