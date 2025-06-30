import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch ,useSelector} from "react-redux"
import './Login.css';
import {setEmaillog,setPasswordlog} from './store/loginslice'
const Login:React.FC=()=>
{
   
    // const  mailid=useSelector((state)=>{state.log.email});
    // const pass=useSelector((state)=>{state.log.password});
   const dispatch=useDispatch();
   const handleNaviagtion=():void=>
    {
       
              dispatch(setEmaillog(email));
              dispatch(setPasswordlog(password));
    navi("/");
    // localStorage.setItem("email",email);
    //     localStorage.setItem("password",password);

   }
    const [email,setEmail]=useState<string>("");
    const [password,setPassword]=useState<string>("");
    const navi=useNavigate();
    useEffect(()=>{
          const useremail=localStorage.getItem("email");
    const userpass=localStorage.getItem("password");
     if( useremail && userpass)
        { navi("/")};

    },[navi]);
    return(
        <div className="container">
            <h1>Enter your e-mail id</h1>
            <input type="email" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setEmail(e.target.value)}}></input>
            <h1>Enter your password</h1>
            <input type="password" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setPassword(e.target.value)}}></input>
            {/* {
                console.log(email+" "+password)
            } */}
            <button id="buttonfix" onClick={handleNaviagtion}>LOGIN</button>
        </div>
    )
}
export default Login;