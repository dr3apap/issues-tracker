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
    const { isReporting } = props;
    const [bug, setBug] = useState<MakeBugs>({
        name: "",
        description: "",
        issueType: "",
        version: "",
        reporter: "",
        priority: "High",
        timeStamp: new Date().toString().slice(0, 24),
        _id: nanoid(),
        issueState: "Open",
    });
    const { issues } = useSelector((state: RootState) => state);
    const { id } = useParams();
    /* 
    **
    *Use the useEffect hook to populate the useState with the user info 
     to edit.The dependency array is require for react not to re-render upon state changes
   */
    useEffect(() => {
        if (!isReporting) {
            setBug(issues.find((bug) => bug._id === id) as MakeBugs);
        }
    }, []);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setBug({
            ...bug,
            [e.target.name]: e.target.value,
            issueType: e.target.getAttribute('data-type') as string

        })

    }
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {

        e.preventDefault();
        setBug({
            name: "",
            description: "",
            issueType: "",
            version: "",
            reporter: "",
            priority: "High",
            timeStamp: new Date().toString().slice(0, 24),
            _id: nanoid(),
            issueState: "Open",
        });

        dispatch(reportBug(bug));
        navigate('/viewbugs');
    }
    const editBug = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setBug({
            name: "",
            description: "",
            issueType: "",
            version: "",
            reporter: "",
            priority: "High",
            timeStamp: new Date().toString().slice(0, 24),
            _id: nanoid(),
            issueState: "Open",
        });

        //dispatch(updateBug(bugs, bug));

        navigate(`/updatebug/${id}`);

    }
    return (
        <div className="pageWrapper">
            <div className="bugReport">
                <h1>{isReporting ? "Report Bug" : "Update Bug"}</h1>
                <form>
                    <label htmlFor="name">Application Name:</label>
                    <input
                        name="name"
                        value={bug.name}
                        type="text"
                        placeholder="Name"
                        id="name"
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="description">Description:</label>
                    <textarea
                        name="description"
                        value={bug.description}
                        placeholder="Detailed description of the bug"
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="issueType">Type:</label>
                    <select name="issueType" id="issueType" onChange={handleChange} required>
                        <option>Please select any that apply to your report</option>
                        <option value="Crash" data-type="Crash">Crash</option>
                        <option value="Loading" data-type="Loading">Loading</option>
                        <option value="Error" data-type="Error">Error</option>
                        <option value="Display" data-type="Display">Display</option>
                        <option value="Other" data-type="Other">Other</option>
                    </select>
                    {!isReporting && <label htmlFor="status">Status:</label>}
                    {!isReporting && <select name="status" id="status" onChange={handleChange}>
                        <option value="Open">Open</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Closed">Closed</option>
                    </select>}
                    <label htmlFor="version">Application Version:</label>
                    <input
                        name="version"
                        value={bug.version}
                        type="text"
                        id="version"
                        placeholder="Application Version"
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="reporter">Bug Reporter</label>
                    <input
                        name="reporter"
                        value={bug.reporter}
                        type="text"
                        id="reporter"
                        placeholder="Full Name"
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" onClick={isReporting ? handleSubmit : editBug}>
                        {isReporting ? "Report Bug" : "Update Bug"}
                    </button>
                </form>
            </div>
        </div>
    );


}
