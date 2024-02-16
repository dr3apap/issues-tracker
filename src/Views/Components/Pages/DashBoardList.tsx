import { useSelector } from 'react-redux'
import issues from "../../../Models/bugsFactory";
import IssueSummary from '../Pages/IssueSummary';
import { useParams } from 'react-router-dom'
import { RootState } from '../../../Controllers/Redux/rootReducer'
export interface DashBoardListProps {
    priority: "Open" | "In Progress" | "Closed";
    count: number;
    issueId: string;
    timeStamp: string;
    //newNotifications: number;
}

export default function DashBoardList() {
    const { issuelists } = useParams()
    console.log(`Inside in DashBoardList:{${issuelists}}`)

    const open: issues[] = useSelector((state: RootState) => state.issues.filter((bug) => bug.priority == "Open"));

    const closed: issues[] = useSelector((state: RootState) => state.issues.filter((bug) => bug.priority == "Closed"));

    const inprogress: issues[] = useSelector((state: RootState) => state.issues.filter((bug) => bug.priority == "In Progress"));

    return (<>
        <h1>Hello</h1>
        {issuelists == '/user/openissues' && (
            open.map((issue) => <IssueSummary key={issue._id} priority={issue.priority} count={open.length} issueId={issue._id} timeStamp={issue.timeStamp} />)) ||

            issuelists == '/user/closedissues' && (closed.map((issue) => <IssueSummary key={issue._id} priority={issue.priority} count={open.length} issueId={issue._id} timeStamp={issue.timeStamp} />)) ||

            issuelists == '/user/in%20progressissues' && (
                inprogress.map((issue) => <IssueSummary key={issue._id} priority={issue.priority} count={open.length} issueId={issue._id} timeStamp={issue.timeStamp} />))}



    </>)
}

