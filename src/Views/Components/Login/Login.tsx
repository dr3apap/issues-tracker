import React, { useState, useEffect } from 'react';
import './login.css';
import { useAppDispatch, useAppSelector } from '../../../Controllers/Hooks/app-hooks';
import { signIn } from '../../../Controllers/Redux/authSlice';
import { RootState } from '../../../Controllers/Redux/rootReducer';
import { getUser } from '../../../Controllers/Redux/userSlice';
import { createUser } from '../../../Controllers/Redux/userSlice';
import User from '../../../Models/userFactory';
import { nanoid } from '@reduxjs/toolkit';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { FormState, } from '../../../Controllers/Hooks/useForm';

type LoginAndRegisterProps = {
    formState: FormState;
    setForm: (obj: FormState) => void;
};
type PasswordMatch = string;
let passwordConfirm: PasswordMatch = ""
export default function Login({ formState, setForm }: LoginAndRegisterProps) {
    const dispatch = useAppDispatch();
    const { users } = useAppSelector((state) => state);
    const navigate = useNavigate();
    const { userId } = useParams();
    const { pathname: currentPath } = useLocation()
    console.log(`Inside userForm:{CurrentPath:${currentPath}}`)
    const {
        login, signup, editing
    } = formState
    // this check the user database for the current user
    // useEffect(() => {
    //     dispatch(getUser())

    // },[dispatch])

    const [newUser, setNewUser] = useState({
        _userId: "",
        firstName: "",
        lastName: "",
        userName: "",
        password: "",
    } as User)
    const [pass, setPass] = useState({
        userName: "",
        //email:"",
        password: "",
    })
    // this populate the user form for editing with the user data
    useEffect(() => {
        if (editing) {
            const user = users.find(user => user._userId == userId);
            setNewUser(user as User);
        };
    }, [])
    // this handle the form input change 
    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        setPass({
            ...pass,
            [e.target.name]: e.target.value,

        })
    }
    // this handle the login for user with authentication
    function handleSubmit(e: React.MouseEvent<HTMLFormElement>) {
        e.preventDefault();
        setPass({
            ...pass, userName: "",
            // email:"",
            password: "",
        })
        console.log("pass", pass)
        handleLogin();
    }
    // this authenticate user and redirect to their page on success 
    function handleLogin() {
        if (
            users.find(user => user.userName === pass.userName &&
                user.password === pass.password)
            //    user.userName === pass.userName && user.password === pass.passWord
        ) {
            dispatch(signIn());
            navigate("/user/dashboard");
        } else {
            navigate("/user/login");
        }
    }

    // this handle the signup for new user and re-direct them to login.
    function handleSignUp(e: React.MouseEvent<HTMLFormElement>) {
        e.preventDefault();
        dispatch(createUser(newUser));
        setNewUser({
            _userId: nanoid(),
            firstName: "",
            lastName: "",
            userName: "",
            password: "",
        });
        navigate('/user/login')
    }

    // this function handle the React controlled input for the signup form.
    function handleSignUpChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) {
        passwordConfirm = e.target.name == "passwordmatch" && e.target.value || "";
        if (e.target.name == "passwordmatch" && passwordConfirm != newUser.password) return;
        setNewUser(
            {
                ...newUser,
                [e.target.name]: e.target.value
            });
        console.log(newUser)
    }

    return (
        <div className="dataBg">
            {currentPath == '/user/login' && (
                <form className="dataWrapper" onSubmit={handleSubmit}>
                    <h1>Login:</h1>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="userName"
                        value={pass.userName}
                        placeholder="User-Name"
                        className="data"
                    />
                    {/* <p  placeholder="Email" value={pass.email}className="data"/> */}
                    <input
                        onChange={handleChange}
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={pass.password}
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
                        name="userName"
                        placeholder="user-Name"
                        value={newUser.userName}
                        className="data"
                    />
                    {/* <input onChange={handleChange}type="email" name="email" placeholder="Email" value={pass.email}className="data"/> */}
                    <input
                        onChange={handleSignUpChange}
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={newUser.password}
                        className="data"
                    />
                    <input onChange={handleSignUpChange}
                        type="password"
                        name="passwordmatch"
                        placeholder="Confirm Password"
                        className="data"
                    />
                    <button type="submit" className="px-8 py-4 bg-[var(--surface)] rounded-full text-[var(--text-color)]">Create Account</button>
                    {!(passwordConfirm == newUser.password) && <p className="text-yellow-400">Password did not match</p>}


                </form>
            )}
        </div>
    );
}
