
import { useSelector, useDispatch } from "react-redux";
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
    priority: IssueState,
}


const colors: string[] = ["#FF6700", "#B33AA3", "#32CD32",];

const IssuesInfo = ({ count, priority }: DashInfoProps) => {
    const { color, level } = assignPrioriy(priority);
    return <ul className="py-8">
        <li className="flex flex-col gap-y-2 px-4 py-2 text-[var(--text-color)] text-fluid--1 text-center rounded-md bg-[var(--surface)]">
            <span className="text-fluid--1">{priority} Issues: {`${count}`}</span>        {/*<li className="">`New Notifications:${newNotifications}` </li>*/}
            <span className={`text-fluid-1 px-2 py-2 text-flud--2 bg-[${color}]`}>{`${level}`}</span>        {/*<li className="">`New Notifications:${newNotifications}` </li>*/}
            <Link to={`/user/${priority.toLowerCase().trim()}issues`} className="underline decoration-4 decoration-green-400">Preview</Link>
        </li>
    </ul >
}

export default function IssueDashInfo() {
    // const dispatch = useDispatch();
    const issueStatus: IssueState[] = ["Open", "In Progress", "Closed"]
    const open: issues[] = useSelector((state: RootState) => state.issues.filter((bug) => bug.priority == "Open"));
    //const openStatusNotifications = open.reduce(((issue, acc) => acc += issue.newNotification), 0)

    const closed: issues[] = useSelector((state: RootState) => state.issues.filter((bug) => bug.priority == "Closed"));

    const inprogress: issues[] = useSelector((state: RootState) => state.issues.filter((bug) => bug.priority == "In Progress"));
    return (
        <div className="pageWrapper">
            {issueStatus.map((status: IssueState) => <IssuesInfo key={status} priority={status} count={status.toLowerCase() == "open" ? open.length : status.toLowerCase().trim() == "inprogress" ? inprogress.length : closed.length} />)}
            <Outlet />
        </div>
    );
}






















