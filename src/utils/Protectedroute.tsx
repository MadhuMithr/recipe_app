import React,{ReactNode} from "react";
import { Outlet,Navigate } from "react-router-dom";
import {useSelector} from "react-redux"; 
import { RootState } from "../store/store";
interface ProtectedRouteProps {
  children: ReactNode;
}

const Protectedroute:React.FC<ProtectedRouteProps>=({children})=>
{
    const useremail=useSelector((state:RootState)=>state?.log?.email || "");

    const userpass=useSelector((state:RootState)=>state?.log?.password|| "");

    console.log(useremail,'uname');
    
    return useremail && userpass ?
    <>
    {children}
    </>
     : <Navigate to="/login"/>;
}
export default Protectedroute;