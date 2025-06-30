// import React from 'react'
// import "./Custombutton.css"
// const Custombutton:React.FC=({text:string,className:string,onClick})=>{
//     return(
//         <button className={className} onClick={onClick}>{text}</button>
//     )
// }

// export default Custombutton
import React from 'react';
import "./Custombutton.css";

interface CustomButtonProps {
  text: string;
  className?: string; 
  onClick?: () => void; 
}


const Custombutton: React.FC<CustomButtonProps> = ({ text, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Custombutton;
