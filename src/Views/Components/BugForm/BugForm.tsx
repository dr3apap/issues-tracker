import './form.css'
import React, { useState, useEffect, useRef, SelectHTMLAttributes } from 'react';
import { useAppDispatch, useAppSelector } from '../../../Controllers/Hooks/app-hooks'
import { reportBug } from '../../../Controllers/Redux/bugSlice';
import { createApp } from '../../../Controllers/Redux/appSlice';
import MakeBugs from '../../../Models/bugsFactory';
import Application from '../../../Models/appFactory';
import { nanoid } from '@reduxjs/toolkit';
import { useNavigate, useParams } from 'react-router-dom';
// import getBugs from '../../../Controllers/Redux/bugSlice';
import updateBug from '../../../Controllers/Redux/bugSlice'
import { RootState } from '../../../Controllers/Redux/rootReducer';
type FormProps = {
    isReporting: boolean
}


export default function Form(props: FormProps) {
    const { issueId } = useParams();
    const { isReporting } = props;
    const [issue, setIssue] = useState<MakeBugs>({
        description: "",
        issueType: "",
        reporter: "",
        priority: "High",
        timeReported: new Date().toString().slice(0, 24),
        _id: nanoid(),
        issueState: "Open",
        issueTitle: "",
        appName: "",
    });
    const [app, setApp] = useState<Application>({
        _id: nanoid(),
        appName: "",
        version: "",
        repolink: "",
    });

    const issueToUpdate = useAppSelector((issues) => issues.issues.find((issue: MakeBugs) => issue._id == issueId) as MakeBugs);
    const appToupdate = useAppSelector((apps) => apps.apps.find((app: Application) => app.appName == issue.appName) as Application);
    const { apps } = useAppSelector(apps => apps)
    /* 
    **
    *Use the useEffect hook to populate the useState with the user info 
     to edit.The dependency array is require for react not to re-render upon state changes
   */
    //useEffect(() => {
    //    if (!isReporting) {
    //        setIssue(issues.find((issue) => issue._id == issueId) as MakeBugs);
    //        setApp(apps.find((app) => app._id == issueId) as Application);
    //    }
    //}, []);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setIssue({
            ...issue,
            [e.target.name]: e.target.value,
            issueType: e.target.getAttribute('data-type') as string

        });
        setApp({
            ...app, [e.target.name]: e.target.value,
        });

    }
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {

        e.preventDefault();
        setIssue({
            description: "",
            issueType: "",
            reporter: "",
            priority: "High",
            timeReported: new Date().toString().slice(0, 24),
            _id: nanoid(),
            issueState: "Open",
            issueTitle: "",
            appName: "",
        });

        dispatch(reportBug(issue));
        dispatch(createApp(app));
        navigate('/user/dashboard');
    }
    const editBug = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIssue({
            description: "",
            issueType: "",
            reporter: "",
            priority: "High",
            timeReported: new Date().toString().slice(0, 24),
            _id: nanoid(),
            issueState: "Open",
            issueTitle: "",
            appName: "",
        });

        //dispatch(updateBug(bugs, bug));

        navigate(`/issueupdate/${issueId}`);

    }
    return (
        <div className="pageWrapper">
            <div className="bugReport">
                <h1>{isReporting ? "Report Issue" : "Update Issue"}</h1>
                <form>
                    <label htmlFor="issuetitle">Issue Title:</label>
                    <input
                        name="issueTitle"
                        value={issue.issueTitle}
                        type="text"
                        placeholder="Title"
                        id="issuetitle"
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="appname">Application Name:</label>
                    <input
                        name="appName"
                        value={app.appName}
                        type="text"
                        placeholder="App-Name"
                        id="appname"
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="description">Description:</label>
                    <textarea
                        name="description"
                        value={issue.description}
                        placeholder="Detailed description of the Issue"
                        onChange={handleChange}
                        required
                    />
                    <input
                        name="repolink"
                        value={app.repolink}
                        type="text"
                        placeholder="repolink"
                        id="repolink"
                        onChange={handleChange}
                    />

                    <label htmlFor="issuetype">Type:</label>
                    <select name="issueType" id="issuetype" onChange={handleChange} required>
                        <option>Please select any that apply to your report</option>
                        <option value="Crash" data-type="Crash">Crash</option>
                        <option value="Loading" data-type="Loading">Loading</option>
                        <option value="Error" data-type="Error">Error</option>
                        <option value="Display" data-type="Display">Display</option>
                        <option value="Other" data-type="Other">Other</option>
                    </select>
                    {!isReporting && <label htmlFor="issueState">IssueState:</label>}
                    {!isReporting && <select name="issuestate" id="issuestate" onChange={handleChange} disabled
                    >
                        <option value="Open">Open</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Closed">Closed</option>
                    </select>}
                    <label htmlFor="version">Application Version:</label>
                    <input
                        name="version"
                        value={app.version}
                        type="text"
                        id="version"
                        placeholder="Application-Version"
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="reporter">Bug Reporter</label>
                    <input
                        name="reporter"
                        value={issue.reporter}
                        type="text"
                        id="reporter"
                        placeholder="Full Name Pls or Login:"
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" onClick={isReporting ? handleSubmit : editBug}>
                        {isReporting ? "Report Issue" : "Update Issue"}
                    </button>
                </form>
            </div>
        </div>
    );


}
