import React from "react";
import { useAppDispatch, useAppSelector } from '../../../Controllers/Hooks/app-hooks';
import { Link, Outlet, useParams } from 'react-router-dom';
import MakeBugs from "../../../Models/bugsFactory";
import Application from "../../../Models/appFactory";
import assignPriority from '../../../Controllers/priorityController'
import Bug from './Bug';
import './bugscard.css';
import { RootState } from "../../../Controllers/Redux/rootReducer";

const BugList = () => {
    const { issue_id } = useParams();
    const { apps } = useAppSelector((apps) => apps);
    const { issues } = useAppSelector((issues) => issues);
    const app = useAppSelector((issues) => issues.apps.find(app => app._id == issue_id) as Application);
    const issue = apps.find(app => app._id == issue_id)

    return (
        <div className="pageWrapper">
            {issues.length > 0 ? issues.map(({ _id, priority }, i) => {
                const level = assignPriority(priority as string)
                return <Link to={`/viewbug/${_id}`} key={_id}>
                    <div className="card">
                        <Bug app={app} level={level} />
                        <h5 className="viewBug"><span>More &rarr;</span></h5>
                    </div>
                </Link>
            }) : <h3 style={{ color: "red" }}>Hurray there's no bug reported yet!!</h3>}
            <Outlet />
        </div>
    );
}

export default BugList;
