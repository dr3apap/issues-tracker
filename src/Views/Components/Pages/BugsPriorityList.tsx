import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom';
import { RootState } from '../../../Controllers/Redux/rootReducer';
import MakeBugs from '../../../Models/bugsFactory';
import assignPriority from '../../../Controllers/priorityController';

type PriorityType = "Open" | "In Progress" | "Closed"

type BugsPriorityViewProps = {
    bug: MakeBugs,
}

export default function BugsPriorityList(/*props:BugsPriorityViewProps*/) {

    const { issues } = useSelector((state: RootState) => state)
    const { priority } = useParams()
    const { level } = assignPriority(priority as PriorityType);

    return (
        <div className="pageWrapper">
            {issues.length < 1 ? <h1>You have no bug to view</h1> : issues
                .filter((bug) => Number(bug.priority) === Number(priority))
                .map((bug, key) => (
                    <Link to={`/bugedit/${priority}`}>
                        <div key={key} className="bugDetail">
                            <h1>{bug.name}</h1>
                            <h4>{bug.timeStamp}</h4>
                            <h4>{bug.issueType}</h4>
                            <p className="info">{bug.description}</p>
                            <h4>{level}</h4>
                            <h4>{bug.bugStatus}</h4>
                            <h4>{bug.reporter}</h4>
                        </div>
                    </Link>
                ))}
        </div>
    );



}
