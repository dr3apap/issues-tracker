import assignPrioriy from "../../../Controllers/priorityController";
import MakeBugs from "../../../Models/bugsFactory";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'

export interface DashBoardListProps {
    priority: "Open" | "In Progress" | "Closed";
    count: number;
    issueId: string;
    timeStamp: string;
    //newNotifications: number;
}


const DashBoard = ({ priority, count, issueId, timeStamp }: DashBoardListProps) => {
    const { color, level } = assignPrioriy(priority);
    //const { issueId } = useParams()
    return (
        <div
            className="flex flex-cols gap-y-16"
        >
            <div className="">
                <span>{`Issues:${issueId}`}</span>
                <span className={`px-8 py-4 text-[var(--text-color)] text-fluid--1 text-center rounded-full bg-[${color}]`}>{`Status:${priority}`}</span>
                <span>{`Date Reported:${timeStamp}`}</span>
            </div>
            <Link to={`/user/dashboard/${issueId}`} className="justify-self-end">
                <span>See More &rarr;</span>
            </Link>

        </div>
    );
}

export default DashBoard;
