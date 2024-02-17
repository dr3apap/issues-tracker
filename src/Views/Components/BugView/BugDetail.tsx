import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import './bugview.css';
import useClick from '../../../Controllers/Hooks/useClick'
import assignPrioriy from '../../../Controllers/priorityController';


const BugDetail = () => {


    const [, setIsclicked, bugs] = useClick();

    const { id } = useParams();




    const navigate = useNavigate();
    const bug = bugs.filter((bug) => bug._id === id)[0];
    const {
        priority,
        name,
        version,
        timeStamp,
        description,
        issueState,
        reporter,
        _id
    } = bug;
    const { color, level } = assignPrioriy(issueState);


    // console.log("bugs in BugDetail", bug);




    return (
        <div className="pageWrapper">
            <div className="bugDetail" style={{ color }}>
                <button
                    onClick={() => {
                        setIsclicked(name);
                    }}
                    className="closeBtn"
                >
                    Close
                </button>
                <h1>{name}</h1>
                <h4>{version}</h4>
                <h4>{timeStamp}</h4>
                <h4>{bug.issueType}</h4>
                <p className="info">{description}</p>
                <h4>{level}</h4>
                <h4>{issueState}</h4>
                <h4>{reporter}</h4>
                <button type="submit" onClick={() => navigate(`/updatebug/${_id}`)}>
                    Edit Bug
                </button>
            </div>
        </div>
    );

}

export default BugDetail;


