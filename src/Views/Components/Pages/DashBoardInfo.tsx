import MakeBugs from '../../../Models/bugsFactory'
import { useAppSelector, useAppDispatch } from "../../../Controllers/Hooks/app-hooks";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import assignPrioriy from "../../../Controllers/priorityController";
import { DashBoardListProps } from "./DashBoardList";
import { Link, Outlet } from 'react-router-dom'
import { RootState } from "../../../Controllers/Redux/rootReducer";
import { getBugs } from "../../../Controllers/Redux/bugSlice";
import issues from "../../../Models/bugsFactory";

type IssueState = "Open" | "In Progress" | "Closed"

type DashInfoProps = {
    count: number,
    state: string,
    userName: string,
}



const IssuesInfo = ({ count, state, userName }: DashInfoProps) => {
    const level = assignPrioriy(state.toLowerCase().trim() as string);
    return <ul className="py-8">
        <li className="flex flex-col gap-y-2 px-4 py-2 text-[var(--text-color)] text-fluid--1 text-center rounded-md bg-[var(--surface)]">
            <span className="text-fluid--1">{state} Issues: {`${count}`}</span>        {/*<li className="">`New Notifications:${newNotifications}` </li>*/}
            <span className={`text-fluid-1 px-2 py-2 text-flud--2 ${level == "High" ? "bg-priority-1" : level == "Medium" ? "bg-priority-2" : "bg-priority-3"}`}>{`${level}`}</span>        {/*<li className="">`New Notifications:${newNotifications}` </li>*/}
            <Link to={`/user/dashboard/${userName}/issues/viewissues/${state.toLowerCase().trim()}`} className="underline decoration-4 decoration-green-400">Preview</Link>
        </li>
    </ul >
}

export default function IssueDashInfo() {
    // const dispatch = useDispatch();
    const { userName } = useParams();
    const issueStatus = ["Open", "In Progress", "Closed"]
    const issues = useAppSelector((issues) => issues.issues);
    const open = issues.filter((issue) => issue.issueState == "Open");
    //const openStatusNotifications = open.reduce(((issue, acc) => acc += issue.newNotification), 0)

    const closed = issues.filter((issue) => issue.issueState == "Closed");

    const inprogress = issues.filter((bug) => bug.issueState == "In Progress");
    return (
        <div className="pageWrapper">
            {issueStatus.map((status) => <IssuesInfo key={status} state={status} userName={userName as string} count={status == "Open" ? open.length : status == "In Progress" ? inprogress.length : closed.length} />)}
        </div>
    );
}






















