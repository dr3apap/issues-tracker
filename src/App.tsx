import { useAppSelector, useAppDispatch } from './Controllers/Hooks/app-hooks'
import issues from "./Models/bugsFactory";
import { Routes, Route, } from 'react-router-dom';
import UserForm from './Views/Components/Login/Login';
import PageNav from './Views/Components/pageNav/nav';
import Hero from './Views/Components/HeroHeader/header';
import SideBar from './Views/Components/SideBar/SideBar';
import { RootState } from './Controllers/Redux/rootReducer'
import BugList from './Views/Components/bugsCard/BugList';
import BugForm from './Views/Components/BugForm/BugForm';
import DashBoardList from './Views/Components/Pages/DashBoardList';
import IssueSummary from './Views/Components/Pages/IssueSummary';
import BugsPriorityList from './Views/Components/Pages/BugsPriorityList';
import BugDetail from './Views/Components/BugView/BugDetail';
import RequierAuth from './Views/Components/Pages/Components/RequierAuth';
import RequireAuth from './Views/Components/Pages/Components/RequierAuth';
import Footer from './Views/Components/Footer/footer'
import useForm from "./Controllers/Hooks/useForm";
import BugTrackerUserList from './Views/Components/Login/BugTrackerUserList';

function App() {

    const { auth } = useSelector((state: RootState) => state);

    const [formState, setForm] = useForm();

    return (
        <>
            {/* <SideBar LoggedIn={auth.LoggedIn} /> */}
            <PageNav />
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="user/login" element={<UserForm formState={formState} setForm={setForm} />} />
                <Route path="user/newuser" element={<UserForm formState={formState} setForm={setForm} />} />

                <Route path="user/dashboard" element={<SideBar loggedIn={auth.LoggedIn} />}>
                </Route>
                <Route path="user/dashboard/:issuesKind" element={<IssueSummary />} />
                <Route path="user/dashboard/issues/:priorityId" element={<BugDetail
                />} />

                {/*<Route path="issueupdate/:issueId" element={<BugsPriorityList />} />
                <Route path="users" element={
                    <RequireAuth>
                        <BugTrackerUserList setForm={setForm} />
                    </RequireAuth>} />*/}
                <Route path="updateuser/:userId" element={
                    <UserForm formState={formState} setForm={setForm} />} />
                <Route
                    path="viewbugs"
                    element={
                        <RequierAuth>
                            <BugList />
                        </RequierAuth>
                    }
                />
                <Route path="viewbug/:id" element={<BugDetail />} />
                <Route
                    path="issueupdate/:issueId"
                    element={<BugForm isReporting={false} />}
                />


                <Route
                    path="reportbug"
                    element={
                        <RequireAuth>
                            <BugForm isReporting />
                        </RequireAuth>
                    }
                />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
