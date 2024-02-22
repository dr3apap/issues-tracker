import assignPrioriy from "../../../Controllers/priorityController";
import { useAppDispatch, useAppSelector } from '../../../Controllers/Hooks/app-hooks'
import MakeBugs from "../../../Models/bugsFactory";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'

export interface DashBoardListProps {
    issueState: "Open" | "In Progress" | "Closed";
    count: number;
    issueTitle: string;
    timeStamp: string;
    priority: string;
    //newNotifications: number;
}


const DashBoard = () => {
    const { issuesKind } = useParams();
    const { issues } = useAppSelector(issues => issues);

    const open = issues.filter((issue) => issue.issueState.toLowerCase().trim() == issuesKind);
    //const openStatusNotifications = open.reduce(((issue, acc) => acc += issue.newNotification), 0)


    const level = assignPrioriy(issuesKind as string);
    //const { issueId } = useParams()
    return (
        <ul
            className="flex gap-4"
        >
            {issues.map(({ _id, issueTitle, priority, issueState, timeReported }) => <><li className="bg-[var(--rich-dark-primary-100)] rounded-md grid grid-col p-4 gap-4 border-2 border-[var(--color-brand-100)]" key={_id}>
                <h2 className="text-fluid--1">Title:{issueTitle}</h2>
                <span className={`w-36 rounded-full px-4 py-4 outline-none ${priority == "High" ? "bg-priority-1" : priority == "Medium" ? "bg-priority-2" : "bg-priority-3"} `}>Status:{issueState}</span>
                <span>{`Date Reported:${timeReported}`}</span>
                <Link to={`/user/dashboard/issues/${_id}`} className="justify-self-end">
                    <span className="self-end">See More &rarr;</span>
                </Link>
            </li>
            </>)}
        </ul>
    );
}

export default DashBoard;
