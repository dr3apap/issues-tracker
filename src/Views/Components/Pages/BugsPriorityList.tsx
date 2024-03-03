import { useAppSelector, useAppDispatch } from '../../../Controllers/Hooks/app-hooks';
import { useParams, Link } from 'react-router-dom';
import { AppDispatch } from '../../../Controllers/Redux/rootReducer';
import MakeBugs from '../../../Models/bugsFactory';
import { IssuesDispatch } from '../../../Controllers/Redux/bugSlice';
import { reportBug, getClosedIssues, getBugs, updateBug, getOpenIssues, getInprogressIssues } from '../../../Controllers/Redux/bugSlice'
import assignPriority from '../../../Controllers/priorityController';

type PriorityType = "Open" | "In Progress" | "Closed"


type BugsPriorityViewProps = {
    issue: MakeBugs,
}

export default function BugsPriorityList(/*props:BugsPriorityViewProps*/) {
    const { issueId } = useParams()
    const d = `get${issueId}Issues`
    console.log(`Inside BugsPriorityList:${IssuesDispatch["getOpenIssues"]}, d=${d},priorityId=${issueId}`)
    const { issues } = useAppSelector((issues) => issues)
    //const dispatch = useAppDispatch()
    // const issue = dispatch(IssuesDispatch["getOpenIssues"]({ state: "Open" }))
    const level = assignPriority(issueId as string);

    return (
        <div className="pageWrapper">
            {issues.length < 1 ? <h1>You have no bug to view</h1> : issues
                .filter((issue) => issue.priority === issueId)
                .map((bug, key) => (
                    <Link to={`/bugedit/${issueId}`}>
                        <div key={key} className="bugDetail">
                            <h4>{bug.timeReported}</h4>
                            <h4>{bug.issueType}</h4>
                            <p className="info">{bug.description}</p>
                            <h4>{level}</h4>
                            <h4>{bug.issueState}</h4>
                            <h4>{bug.reporter.firstName} {bug.reporter.lastName}</h4>
                        </div>
                    </Link>
                ))}
        </div>
    );



}
