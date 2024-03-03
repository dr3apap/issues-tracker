import LoginForm from '../Login/Login';
import { Link } from 'react-router-dom';

export const LoginChoice = () => {
    return (<div className="flex flex-cols">
        <Link to="/reportissue px-8 py-4 rounded-full bg-[var(--color-100)] hover:no-underline focus:border-[var(--sec-color)] focus-visible:border-[var(--sec-color)] hover:border-[var(--sec-color)] border-transparent outline-transparent flex gap-x-1 place-items-center" className="">New Issue</Link>
        <div className="flex">
            <input
                type="text"
                name="emailAdress"
                id="issuefilter"
                className="p-2 px-4 flex-grow rounded-l-full"
                placeholder="Track existing issue <Ex id:2x3ll>"
                aria-label="issuefilter"
            />
            <button className="font-bold rounded-r-full bg-[var(--color-secondary-300)] hover:no-underline focus:border-[--prim-color)] focus-visible:border-[var(--prim-color)] hover:border-[var(--prim-color)] border-4 text-fluid--1 text-[var(--text-color)] border-transparent outline-transparent flex gap-x-1 place-items-center px-3 py-1" type="submit">Track</button>
        </div>
        <br className="w-full border-2 border-var(--color-grayscale-200)]" />
        <div className="flex gap-4">
            <p className="">Have an account? <Link to="user/login" className="px-8 py-4 text-[var(--text-color)] bg-[var(--color-brand-300)] rounded-full outline-hover hover:border-2 border-[goldenrod]"> Login</Link></p>
            <Link to="user/newuser" className="px-8 py-4 tex-fluid--1 text-[var(--text-color)] bg-[var(--color-grayscale-100)] outline-none hover:border-2 border-[var(--color-brand-400)]  rounded-full">Create Account</Link>
        </div>

    </div>)

}
