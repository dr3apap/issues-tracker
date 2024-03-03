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
import IssueDashInfo from './Views/Components/Pages/DashBoardInfo';
import BugDetail from './Views/Components/BugView/BugDetail';
import RequierAuth from './Views/Components/Pages/Components/RequierAuth';
import RequireAuth from './Views/Components/Pages/Components/RequierAuth';
import Footer from './Views/Components/Footer/footer'
import LoginChoice from './Views/Components/Login/choice';
import useForm from "./Controllers/Hooks/useForm";

function App() {

    const { auth } = useAppSelector((state: RootState) => state);
    const [formState, setForm] = useForm();
    return (
        <>
            {/* <SideBar LoggedIn={auth.LoggedIn} /> */}
            <PageNav />
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="user/choice" element={<LoginChoice />} />
                <Route path="user/login" element={<UserForm />} />
                <Route path="user/newuser" element={<UserForm />} />
                <Route path="issue/reportissue" element={<BugForm isReporting />} />
                <Route path="issues/viewissues/:issueskind" element={<IssueSummary />} />
                <Route path="issue/details/:issueId" element={<BugDetail />} />
                <Route path="issue/edit/:issueId" element={<BugForm isReporting={false} />} />
                <Route path="user/dashboard/:userName" element={<RequireAuth>
                    <SideBar />
                </RequireAuth>}>
                    <Route path="issues" element={<RequireAuth><IssueDashInfo /></RequireAuth>} />
                    <Route
                        path="issue/reportissue"
                        element={
                            <RequireAuth>
                                <BugForm isReporting />
                            </RequireAuth>
                        }
                    />

                    <Route path="issues/viewissues/:issueskind" element={<RequireAuth><IssueSummary /></RequireAuth>} />
                    <Route path="issue/details/:issueId" element={<RequireAuth><BugDetail
                    /></RequireAuth>} />
                    <Route
                        path="issue/edit/:issueId"
                        element={<RequierAuth><BugForm isReporting={false} /></RequierAuth>}
                    />

                    {/*<Route path="issueupdate/:issueId" element={<BugsPriorityList />} />
                <Route path="users" element={
                    <RequireAuth>
                        <BugTrackerUserList setForm={setForm} />
                    </RequireAuth>} />*/}
                    <Route path="issue/edit/:userId" element={
                        <RequierAuth><UserForm /></RequierAuth>} />
                    <Route
                        path="viewbugs"
                        element={
                            <RequierAuth>
                                <BugList />
                            </RequierAuth>
                        }
                    />

                </Route>

            </Routes>
            <Footer />
        </>
    );

}

export default App;
