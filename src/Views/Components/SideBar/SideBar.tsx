import React from 'react';
import User from '../../../Models/reporterFactory'
import { useParams, Link, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../Controllers/Hooks/app-hooks';
import { signOut } from '../../../Controllers/Redux/authSlice';
import IssueDashInfo from '../Pages/DashBoardInfo';
import issues from "../../../Models/bugsFactory";
type SideBarProps = {
    loggedIn: boolean,
}
const SideBar = () => {
    //const open: issues[] = useAppSelector((state) => state.issues.filter((bug) => bug.issueState == "Open"));
    const { userName } = useParams()
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { firstName } = useAppSelector((users) => users.users.find(user => user.registerUser?.userName == userName) as User);

    function handleSignOut() {
        dispatch(signOut());
        navigate('/');
    }
    console.log(`Inside User Dashboard:{userName:${userName} and {User firstName:${firstName}`)
    return (
        <main className="grid grid-cols-[500px_minmax(0,_1fr)]">
            <aside className="bg-blue-300 h-screen">
                <ul className="">
                    <li>
                        <Link to={`/user/dashboard/${userName}/issues`}>DashBoard</Link>
                    </li>
                    <li>
                        <Link to={`/user/dashboard/${userName}/issue/reportissue`}>Report Bug</Link>
                    </li>
                    <li>
                        <Link to={`/user/sidebar/${userName}/settings`}>Settings</Link>
                    </li>
                </ul>
                <button onClick={() => handleSignOut()}>Logout</button>
            </aside>
            <div className="bg-green-700 flex flex-col gap-y-8">
                <h3 className="text-fluid--1">{`Welcome ${firstName}`}</h3>
                <Outlet />
            </div>
        </main>)

}

export default SideBar;
