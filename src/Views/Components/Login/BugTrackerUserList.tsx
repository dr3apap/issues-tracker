import BugTrackerUser from './BugTrackerUser';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { RootState } from '../../../Controllers/Redux/rootReducer';
import { FormState } from '../../../Controllers/Hooks/useForm';


type BugTrackerUserListProps = {
    setForm: (obj: FormState) => void;
};

export default function BugTrackerUserList({ setForm }: BugTrackerUserListProps) {

    const { users } = useSelector((state: RootState) => state);


    return (

        <div className='pageWrapper'>
            {users.map((user) => <BugTrackerUser key={user._id} user={user} setForm={setForm} />)}
            <Outlet />
        </div>

    );




}
