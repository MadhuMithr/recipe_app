import { useSelector } from "react-redux"
import { useState } from "react"
import "./listfav.css"
import Custombutton from "./components/Custombutton";
import { useNavigate } from "react-router-dom";
import { Meal } from "./types/Meal";
import { RootState } from "./store/store"; 


const ListFav : React.FC=()=>{
  //  const [inst,setInst]=useState("");
    const [showfavin,setShowfavin]=useState< number | null>(null);
const it=useSelector((state:RootState)=>state.cart.itemName)
const view=(id: number)=>{
    setShowfavin(previd=>(previd===id?null:id));
  
}
const navigate=useNavigate();
const n=():void=>{
  navigate("/Getfood");
}

return(
    <div className="main">
    <h1>favourites</h1>
     
     { it.length===0?(<h1>No favourites</h1>):((it.map((item :Meal,index:number)=>(
        <div className="list-details">
          <h1 id="meal-name">{item.strMeal}</h1>
          {/* <p>{item.strInstructions}</p> */}
                    <img src={item.strMealThumb} alt={item.strMeal} width="300" />
                    <Custombutton text={showfavin?"hide instructions":"view Instructions"} onClick={()=>view(index)}></Custombutton>
                    {/* <Custombutton text={"aaff"}></Custombutton> */}
                    {
                        showfavin===index &&(
                            <div>
                       
                            <p>{item.strInstructions}</p>
                            </div>
                        )
                    }

        </div>
      ))))}
       <Custombutton className={"search-page"} onClick={n}text={"search page"} ></Custombutton>
      </div>
    
    )

}
export default ListFav;