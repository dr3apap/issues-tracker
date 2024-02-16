// import { BugPayload } from "../Controllers/Redux/bugSlice";
import { nanoid } from "@reduxjs/toolkit";

class MakeBugs {
    _id!: string;
    name!: string;
    description!: string;
    priority!: "Open" | "In Progress" | "Closed";
    issueType!: typeof this.priority | string;
    reporter!: string;
    timeStamp!: string;
    version!: string;
    bugStatus!: string;
    constructor(issue: MakeBugs) {
        this._id = nanoid(5);
        if (issue !== undefined) {
            this.issueType = issue.issueType;
            this.name = issue.name;
            this.description = issue.description;
            this.priority = issue.priority;
            this.reporter = issue.reporter;
            this.timeStamp = issue.timeStamp;
            this.version = issue.version;
            this.bugStatus = issue.bugStatus;


        }


    }
}

export default MakeBugs;

