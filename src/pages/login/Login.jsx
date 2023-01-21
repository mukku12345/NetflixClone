import { NavLink } from "react-router-dom";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import React,{useState,useRef} from "react";

export default function Login() {
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[login,setLogin]=useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e)=>{
    // setLogin(true);

    e.preventDefault();

    if(email===""){
      alert("Email is empty")
    }else if(password===""){
      alert("password is empty")
    }else
          
    if(email.length!=='' && password.length!==''){
      navigate("/home");
      console.log("email",email,"password",password);
    }
      
  


    // console.log("email",email,"password",password)
  }
 
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1 >Sign In</h1>
          <input type="email" placeholder="Email or phone number" onChange={(e)=>setEmail(e.target.value)}  required/>
          <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required/>
          <button className="loginButton" onClick={handleSubmit}>Sign In</button>
          <span>
            New to Netflix? <NavLink to="/register">Sign up now.</NavLink>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}