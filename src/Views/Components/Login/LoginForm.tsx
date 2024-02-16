import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from "../../../Controllers/Redux/rootReducer";
import { signIn } from "../../../Controllers/Redux/authSlice";

type LoginFormProps = {
     
    formState:'login' | 'editing' | 'signup',
    setFormState:(forState:string) => void
}

const LoginForm = ({formState, setFormState}:LoginFormProps) => {
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
    navigate("/dashboard");
    setFormState(
        'editing'
    )
  } else {
    navigate("/login");
  }


}


   return ( 
    <>
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
          {/* <input onChange={handleChange}type="email" name="email" placeholder="Email" value={pass.email}className="data"/> */}
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Password"
            value={pass.password}
            className="data"
          />
          <button type="submit">Login</button> OR <button type="submit" onClick={() => navigate('/createaccount')}>Create Account</button>
          {/* { && <p style={{color:"white"}}>Incorrect user name or password please try again</p> } */}
        </form>

</> 
   );



}