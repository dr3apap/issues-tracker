import React from 'react'
import MakeBugs from '../../../Models/bugsFactory';
import Application from '../../../Models/appFactory';
import { useAppDispatch, useAppSelector } from '../../../Controllers/Hooks/app-hooks';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './bugview.css';
import useClick from '../../../Controllers/Hooks/useClick'
import assignPrioriy from '../../../Controllers/priorityController';

export interface CombinedView {
    application: Application;
    issue: MakeBugs;
}


const IssueCard = () => {
    //const { priorityId } = useParams();
    const { issueId } = useParams();
    const { userName } = useParams();
    const [, setIsclicked, bugs] = useClick();
    const issue = useAppSelector((issues) => issues.issues.find((issue: MakeBugs) => issue._id === issueId) as MakeBugs);
    const app = useAppSelector((apps) => apps.apps.find((app: Application) => app.appName == issue.appName) as Application);
    //const issue = issues.find((issue) => issue._id === issueId) as MakeBugs;
    const { appName, appVersion, repolink } = app;
    const { issueTitle, issueState, timeReported, reporter, priority, issueType, description } = issue;
    const level = assignPrioriy(issueState as string);

    // console.log("bugs in BugDetail", bug);

    return (
        <div className="flex flex-col gap-4 bg-[var(--color-rich-secondary-100)] shadow-md">
            <h2 className="text-fluid--2">Title:{issueTitle}</h2>
            <li className="text-fluid--2">Application Name:{appName}</li>
            <li className="text-fluid--2">Verion:{appVersion}</li>
            <li className={`rounded-full px-4 py-4 outline-none ${priority == "High" ? "bg-priority-1" : priority == "Medium" ? "bg-priority-2" : "bg-priority-3"}`}>Status:{issueState}</li>
            <li className="text-fluid--2">Date Reported:{timeReported}</li>
            <li className="text-fluid--2">Reporter First Name:{reporter.firstName}</li>
            <li className="text-fluid--2">Reporter Last Name:{reporter.lastName}</li>
            <li className="text-fluid--2">Reporter Email:{reporter.email}</li>
            <li className="text-fluid--2">Priority:{priority}</li>
            <li className="text-fluid--2">Issue Type:{issueType}</li>
            <li className="text-fluid--2"><div>Description:{description}</div></li>
            <Link to={userName ? `/user/dashboard/${userName}/issue/edit/${issueId}` : `/issue/edit/${issueId}`} className="px-4 py-4 rounded-full text-fluid--2 bg-priority-3 tex-[var(--color-brand-100)] border-2 border-[var(--color-brand-300)]">Edit Report</Link>
        </div>
    );

}

export default IssueCard;


