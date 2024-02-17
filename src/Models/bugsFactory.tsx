// import { BugPayload } from "../Controllers/Redux/bugSlice";
import { nanoid } from "@reduxjs/toolkit";

class MakeBugs {
    _id!: string;
    [issueName: string]: string;
    description!: string;
    priority!: "High" | "Medium" | "Low";
    issueType!: string;
    reporter!: string;
    timeStamp!: string;
    version!: string;
    issueState!: "Open" | "In Progress" | "Closed";
    ;
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
            this.issueState = issue.issueState;


        }


    }
}

export default MakeBugs;

