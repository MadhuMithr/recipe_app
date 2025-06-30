import React from "react";
import "./Toastcontainer.css"

  interface ToastProps{text:string;}
const ToastContainer:React.FC<ToastProps>=({text})=>
{
 return  <h1 className="styl">{text}</h1>
}
export default ToastContainer;

