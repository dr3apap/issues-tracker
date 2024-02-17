import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../../Controllers/Redux/rootReducer";
import { signOut } from '../../../Controllers/Redux/authSlice';
import IssueDashInfo from '../Pages/DashBoardInfo';
import issues from "../../../Models/bugsFactory";
type SideBarProps = {
    loggedIn: boolean,
}
const SideBar = ({ loggedIn }: SideBarProps) => {

    const open: issues[] = useSelector((state: RootState) => state.issues.filter((bug) => bug.issueState == "Open"));



    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleSignOut() {
        dispatch(signOut());
        navigate('/');
    }
    return (
        <main className="grid grid-cols-[500px_minmax(0,_1fr)]">
            <aside className="bg-blue-300 h-screen">
                <ul className="">
                    <li>
                        <Link to="/dashboard">DashBoard</Link>
                    </li>
                    <li>
                        <Link to="/viewbugs">View Bugs</Link>
                    </li>
                    <li>
                        <Link to="/reportbug">Report Bug</Link>
                    </li>
                    <li>
                        <Link to="/users">View Users</Link>
                    </li>
                </ul>
                <button onClick={() => handleSignOut()}>Logout</button>
            </aside>
            <div className="bg-green-700">
                {loggedIn && <h1>Welcome User</h1> && (
                    <IssueDashInfo />)}
            </div>
            <Outlet />
        </main>)

}

export default SideBar;
