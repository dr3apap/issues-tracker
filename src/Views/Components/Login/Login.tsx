import React, { useState, useEffect } from 'react';
import './login.css';
import { useAppDispatch, useAppSelector } from '../../../Controllers/Hooks/app-hooks';
import { signIn } from '../../../Controllers/Redux/authSlice';
import { getUser } from '../../../Controllers/Redux/userSlice';
import { createUser } from '../../../Controllers/Redux/userSlice';
import User from '../../../Models/reporterFactory';
import RegisterUser from '../../../Models/registerUserFactory';
import { nanoid } from '@reduxjs/toolkit';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { FormState, } from '../../../Controllers/Hooks/useForm';

type LoginAndRegisterProps = {
    formState: FormState;
    setForm: (obj: FormState) => void;
};
type PasswordMatch = string;
let passwordConfirm: PasswordMatch = ""
export default function Login() {
    const { pathname: currentPath } = useLocation()
    let findAuthUser: User;
    const { userId } = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    console.log(`Inside userForm:{CurrentPath:${currentPath}}`)

    // this check the user database for the current user
    // useEffect(() => {
    //     dispatch(getUser())

    // },[dispatch])
    const [authUser, setAuthUser] = useState({
        userName: "",
        password: "",
    } as RegisterUser)

    const [newUser, setNewUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
    } as User)


    // this handle the signup for new user and re-direct them to login.
    function handleSignUp(e: React.MouseEvent<HTMLFormElement>) {
        e.preventDefault();
        dispatch(createUser({ ...newUser, registerUser: { ...authUser } }));
        setAuthUser({ userName: "", password: "" });
        setNewUser({
            firstName: "",
            lastName: "",
            email: "",
            registerUser: { ...authUser }
        });
        navigate('/user/login')
    }



    //this handle the Login form input change 
    function handleLoginChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        setAuthUser({
            ...authUser,
            [e.target.name]: e.target.value,
        })
    }


    findAuthUser = useAppSelector((users) => users.users.find(user => user.registerUser?.userName === authUser.userName &&
        user.registerUser?.password === authUser.password) as User)

    //this populate the user form for editing with the user data
    //if (currentPath == '/user/editing') {
    // if (findAuthUser)
    //  setNewUser({ ...newUser, ...findAuthUser as User });
    // }


    // this authenticate user and redirect to their page on success 
    function handleLogin() {
        if (findAuthUser) {
            dispatch(signIn());
            navigate(`/user/dashboard/${findAuthUser.registerUser?.userName}`);
        } else {
            navigate("/");
        }

    }

    // this handle the login for user with authentication
    function handleUserLogin(e: React.MouseEvent<HTMLFormElement>) {
        e.preventDefault();
        setAuthUser({
            ...authUser, userName: "",
            // email:"",
            password: "",
        })
        handleLogin();
    }




    // this function handle the React controlled input for the signup form.
    function handleSignUpChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) {
        passwordConfirm = e.target.name == "passwordmatch" ? e.target.value : "";
        setNewUser(
            {
                ...newUser,
                [e.target.name]: e.target.value,
            });
        setAuthUser({ ...authUser, [e.target.name]: e.target.value });
        console.log(`Inside Login:{NewUse:${{ ...newUser }}}:{AuthUser:${{ authUser }}}`)
    }

    return (
        <div className="dataBg">
            {currentPath == '/user/login' && (
                <form className="dataWrapper" onSubmit={handleUserLogin}>
                    <h1>Login:</h1>
                    <input
                        onChange={handleLoginChange}
                        type="text"
                        name="userName"
                        value={authUser.userName}
                        placeholder="User-Name"
                        className="data"
                    />
                    {/* <p  placeholder="Email" value={pass.email}className="data"/> */}
                    <input
                        onChange={handleLoginChange}
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={authUser.password}
                        className="data"
                    />
                    <button type="submit" className="cta">Login</button>                     {/* { && <p style={{color:"white"}}>Incorrect user name or password please try again</p> } */}
                </form>
            )}

            {currentPath == "/user/newuser" && (
                <form className="dataWrapper" onSubmit={handleSignUp}>
                    <h1>Create Account:</h1>
                    <input
                        onChange={handleSignUpChange}
                        type="text"
                        name="firstName"
                        value={newUser.firstName}
                        placeholder="First-Name"
                        className="data"
                    />
                    <input
                        onChange={handleSignUpChange}
                        type="text"
                        name="lastName"
                        placeholder="Last-Name"
                        value={newUser.lastName}
                        className="data"
                    />
                    <input
                        onChange={handleSignUpChange}
                        type="text"
                        name="email"
                        placeholder="email"
                        value={newUser.email}
                        className="data"
                    />


                    <input
                        onChange={handleSignUpChange}
                        type="text"
                        name="userName"
                        placeholder="user-Name"
                        value={newUser.registerUser?.userName}
                        className="data"
                    />
                    {/* <input onChange={handleLoginChange}type="email" name="email" placeholder="Email" value={pass.email}className="data"/> */}
                    <input
                        onChange={handleSignUpChange}
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={newUser.registerUser?.password}
                        className="data"
                    />
                    <input onChange={handleSignUpChange}
                        type="password"
                        name="passwordmatch"
                        placeholder="Confirm Password"
                        className="data"
                    />
                    <button type="submit" className="px-8 py-4 bg-[var(--surface)] rounded-full text-[var(--text-color)]">Create Account</button>
                    {!(passwordConfirm == newUser.registerUser?.password) && <p className="text-yellow-400">Password did not match</p>}


                </form>
            )}
        </div>
    );
}
