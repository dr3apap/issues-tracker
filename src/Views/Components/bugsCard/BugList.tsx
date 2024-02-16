import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from 'react-router-dom';
import MakeBugs from "../../../Models/bugsFactory";
import assignPriority from '../../../Controllers/priorityController'
import Bug from './Bug';
import './bugscard.css';
import { RootState } from "../../../Controllers/Redux/rootReducer";

const BugList = () => {

    const { issues } = useSelector((state: RootState) => state);
    console.log(`Inside ViewBugs:{${issues}}`)

    return (
        <div className="pageWrapper">
            {issues.length > 0 ? issues.map((issue: MakeBugs, key) => {
                const { level, color } = assignPriority(issue.priority)
                return <Link to={`/viewbug/${issue._id}`}>
                    <div className="card" style={{ color }}>
                        <Bug issue={issue} level={level} />
                        <h5 className="viewBug"><span>More &rarr;</span></h5>

                    </div>
                </Link>
            }) : <h3 style={{ color: "red" }}>Hurray there's no bug reported yet!!</h3>}
            <Outlet />
        </div>
    );
}

export default BugList;
