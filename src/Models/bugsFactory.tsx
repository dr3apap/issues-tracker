// import { BugPayload } from "../Controllers/Redux/bugSlice";
import { nanoid } from "@reduxjs/toolkit";
import IssueReporter from "../Models/reporterFactory";

class MakeBugs {
    _id!: string;
    description!: string;
    priority!: "High" | "Medium" | "Low";
    issueType!: string;
    reporter!: IssueReporter;
    timeReported: string;
    issueState!: "Open" | "In Progress" | "Closed";
    issueTitle!: string;
    appName!: string;
    appVersion!: string;
    repolink?: string;
    constructor(issue: MakeBugs) {
        this._id = issue._id;
        this.description = issue.description;
        this.priority = issue.priority;
        this.reporter = issue.reporter;
        this.timeReported = issue.timeReported;
        this.issueState = issue.issueState;
        this.issueTitle = issue.issueTitle;
        this.appName = issue.appName;
        this.appVersion = issue.appVersion;
    }
}

export default MakeBugs;

