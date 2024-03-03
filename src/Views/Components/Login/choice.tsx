import LoginForm from '../Login/Login';
import { useAppSelector, useAppDispatch } from '../../../Controllers/Hooks/app-hooks';
import { getIssueById } from '../../../Controllers/Redux/bugSlice';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MakeBugs from '../../../Models/bugsFactory';

const LoginChoice = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [issueId, setIssueId] = useState({ issueid: "" })
    //const [issueFound, setIssueFound] = useState(true);

    let issueFound = useAppSelector((issue) => issue.issues.find(issue => issue._id == issueId.issueid));

    function handleIssueFilterId(e: React.MouseEvent<HTMLFormElement>) {
        e.preventDefault();
        dispatch(getIssueById(issueId.issueid));
        console.log(`Inside Login Choice:{${issueId.issueid}}`);
        setIssueId({ issueid: "" });
    }
    const issueValid = (foundIssue: MakeBugs | undefined) => {
        if (typeof foundIssue != 'undefined' && foundIssue._id == issueId.issueid) {
            navigate(`/issue/details/${issueId.issueid}`);
        }
        //setIssueFound(!issueFound);
    }

    function getIssueByIdFromState(id: string) {
        return function issueByIdThunk(dispatch: any, getState: any) {
            dispatch(getIssueById(id));
            issueValid(getState() as MakeBugs | undefined)
            console.log(`Inside dispatch for finding issue:{${{ ...getState() }}}`);
            //issueFound = useAppSelector((issue) => issue.issues.find(issue => issue._id == issueId));
        }
    }

    function handleIssueIdChange(e: React.ChangeEvent<HTMLInputElement>) {
        setIssueId({ ...issueId, [e.target.name]: e.target.value })
        console.log(`Inside handle IssueIdChange:{${issueId.issueid}}`);
    }
    useEffect(() => {
        if (typeof issueFound != 'undefined' && issueFound) navigate(`/issue/details/${issueId.issueid}`);
    }, [issueFound])

    return (<div className="w-full">
        <div className="min-h-[50vh] flex place-items-start mb-16">
            <div className="w-2/4 p-8 flex flex-cols gap-8 place-items-center shadow-md rounded-md">
                <h3 className="text-fluid--1">Report</h3>
                <Link to="/issue/reportissue" className="px-8 p-2 rounded-full bg-[var(--color-brand-100)] hover:no-underline focus:border-[var(--sec-color)] focus-visible:border-[var(--sec-color)] hover:border-[var(--sec-color)] border-transparent outline-transparent flex gap-x-1 place-items-center" >New Issue</Link>
            </div>
            <form className="w-2/4 p-8 flex flex-col place-items-center shadow-md rounded-md" id="issue-filter" onSubmit={handleIssueFilterId}>
                <div className="flex place-items-center">
                    <input
                        type="text"
                        name="issueid"
                        value={issueId.issueid}
                        id="issue-id"
                        className="p-2 px-4 flex-grow border-2 border-[var(--color-grayscale-300)] rounded-l-full"
                        placeholder="Track existing issue by:<id>"
                        aria-label="issuefilter"
                        onChange={handleIssueIdChange}
                    />
                    <button className="font-bold rounded-r-full bg-[var(--color-secondary-300)] hover:no-underline focus:border-[--prim-color)] focus-visible:border-[var(--prim-color)] hover:border-[var(--prim-color)] border-4 text-fluid--1 text-[var(--text-color)] border-transparent outline-transparent flex gap-x-1 place-items-center px-3 py-1" type="submit">Track</button>
                </div>
                {!issueFound ? <p className="bg-[var(--color-brand-300)]">{`Sorry no issue with id (${issueId.issueid})`}</p> : ""}
            </form>
        </div>
        <hr className="w-full border-2 border-var(--color-grayscale-200)]" />
        <div className="flex place-items-start gap-8 mt-16">
            <div className="w-1/2 p-8 flex place-items-center gap-8 shadow-md rounded-md">
                <p className="text-fluid--1">Have an account?</p>
                <Link to="/user/login" className="px-8 py-2 text-[var(--text-color)] bg-[var(--color-brand-300)] rounded-full outline-hover hover:border-2 border-[goldenrod]"> Login</Link>
            </div>
            <div className="w-1/2 p-8 flex place-items-center gap-8 shadow-md rounded-md">
                <Link to="/user/newuser" className="px-8 py-2 tex-fluid--1 text-[var(--text-color)] bg-[var(--color-secondary-100)] outline-none hover:border-2 border-[var(--color-brand-400)]  rounded-full">Create Account</Link>

                <ul className="list-disc shadow-md p-4">
                    <h3 className="text-fluid-1 text-[var(--rich-dark-500)] ">Benefit of creating account:</h3>
                    <li className="text-fluid--2">Dashboard with all important funcionality and navigaton</li>
                    <li className="text-fluid--2">Have all reported issues sorted and grouped by their status/state</li>
                    <li className="text-fluid--2">View group of issues based on their status</li>
                    <li className="text-fluid--2">Edit an issue or add more information for fast reproduction/fix</li>
                    <li className="text-fluid--2">Read and write comments to self reported issues and other reported issues</li>
                </ul>
            </div >
        </div>

    </div >)

}
export default LoginChoice;
