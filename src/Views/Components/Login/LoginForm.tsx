import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from "../../../Controllers/Redux/rootReducer";
import { signIn } from "../../../Controllers/Redux/authSlice";



const LoginForm = () => {
    const dispatch = useDispatch();
    const { users } = useSelector((state: RootState) => state);
    const navigate = useNavigate();


    const [pass, setPass] = useState({
        userName: "",
        //email:"",
        password: "",
        role: "user",
    });


    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) {
        setPass({ ...pass, [e.target.name]: e.target.value });
    }


    function handleSubmit(e: React.MouseEvent<HTMLFormElement>) {
        e.preventDefault();

        setPass({
            ...pass,
            userName: "",
            // email:"",
            password: "",
            role: "user",
        });
        console.log("pass", pass);
        handleLogin();
    }

    function handleLogin() {
        if (
            users.find(
                (user) =>
                    user.userName === pass.userName && user.password === pass.password
            )
            //    user.userName === pass.userName && user.password === pass.passWord
        ) {
            dispatch(signIn());
            navigate("/user/dashboard");
        } else {
            navigate("/login");
        }
    }

    return (
        <>
            <form className="" onSubmit={handleSubmit}>
                <h1>Login:</h1>
                <input
                    onChange={handleChange}
                    type="text"
                    name="userName"
                    value={pass.userName}
                    placeholder="User-Name"
                    className="data"
                />
                {/* <input onChange={handleChange}type="email" name="email" placeholder="Email" value={pass.email}className="data"/> */}
                <input
                    onChange={handleChange}
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={pass.password}
                    className="data"
                />
                <button type="submit">Login</button>
            </form>

        </>
    );
}
