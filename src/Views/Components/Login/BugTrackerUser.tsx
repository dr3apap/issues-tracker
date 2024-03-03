import User from '../../../Models/reporterFactory'
import { Link } from 'react-router-dom';
import { FormState } from '../../../Controllers/Hooks/useForm';

type BugTrackerUserProps = {
    user: User,
    setForm: (obj: FormState) => void

}
export default function bugTrackerUser({ user, setForm }: BugTrackerUserProps) {

    const { registerUser, firstName, lastName } = user;
    const userName = registerUser?.userName;
    const _userId = registerUser?._userId;

    return (
        <Link
            to={`/updateuser/${_userId}`}
            onClick={() => {
                setForm({
                    login: false,
                    signup: false,
                    editing: true,
                })
                console.log("editing")
            }

            }
        >
            <div className="card">
                <h4>{userName}</h4>
                <h4>{firstName}</h4>
                <h4>{lastName}</h4>
                <h5 className="viewBug">
                    <span>More &rarr;</span>
                </h5>
            </div>
        </Link>
    );





}
