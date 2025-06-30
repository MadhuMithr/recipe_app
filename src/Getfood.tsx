import React, { useRef, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Getfood.css"
import { useDispatch } from "react-redux";
import { clear } from "./store/loginslice";
import { useSelector } from "react-redux";
import {  addtoCart ,clearcart} from "./store/addtocartslice";
import Custombutton from "./components/Custombutton";
import ToastContainer from "./components/Toastcontainer";
import { Meal } from "./types/Meal";
import { RootState } from "./store/store";
const Getfood=()=>
{
  const [toasttext,settoastext]=useState<string>("");
  const [viewfavourite,setviewfavourite]=useState<boolean>(false);
   const dispatch=useDispatch();
   let [foodname,setFoodname]=useState<string>("");
   let [recipe,setrecipe]=useState<string | null>("");
    let [meal,setMeal]=useState<Meal[]>([]);
    let [searchval,setSearchval]=useState<boolean>(false);
    const refvalue=useRef<HTMLInputElement>(null);
  // useEffect(()=>
  // {var datta= fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`).then((response)=>
  //  { return response.json()
  //  }).then(data => setMeal(data.meals || []))},[search]);
const handlesearch=()=>
    {
       if (refvalue.current) {
        const foodname=refvalue.current.value;
        setFoodname(foodname);
        const fooddata=fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodname}`).then(response=>response.json()).then((data)=>setMeal(data.meals || []));
    
          setSearchval(true);}
       //console.log(fooddata);
    }

  
const toggleRecipe=(id:string)=>
{
  if(recipe===id)
  {
    setrecipe(null);
  }
  else
  {
    setrecipe(id);
  }

}
//view fav
const viewfav=()=>{
  const newval=!viewfavourite;
setviewfavourite(newval);
if(newval)
{
  navigate("/listfav")
}}
  
  
 
useEffect(() => {
  if (!foodname.trim()) return;

  const timer = setTimeout(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodname}`)
      .then((response) => response.json())
      .then((data) => {
        setMeal(data.meals || []);
        setSearchval(true);
      });
  }, 1000); 

  return () => clearTimeout(timer);
}, [foodname]);

const navigate=useNavigate();
const handlelogout=()=>
{
 
  dispatch(clear());
   navigate("/login");
}
const it=useSelector((state:RootState)=>state.cart.itemName)

//handle add to cart toast
  const handleaddtocart=(item:Meal)=>{
    dispatch(addtoCart(item));
   // <ToastContainer text={`${item.strMeal} is added`}></ToastContainer>
   settoastext(`${item.strMeal} is added`);
   setTimeout(() => {
      settoastext("")
      
    }, 2000);

  }
   
  //hadle clear cart
   const handleclearcart=()=>{
    dispatch(clearcart());
    // toast.success(` cart cleared!`, {
    //   position: "top-right",
    //   autoClose: 2000,
    // });
    // <ToastContainer text={"cart cleared!"} ></ToastContainer>
    settoastext("cart cleared!");
    setTimeout(() => {
      settoastext("")
      
    }, 2000);

  }
  return (
  <div className="container">
    <h1>Recipe</h1>
   <h1>Enter the food name</h1>
   <input type="text" value={foodname}  ref={refvalue} onChange={(e) => setFoodname(e.target.value)} />
   {toasttext && <ToastContainer text={toasttext} />}

   <div className="button-group">
   {/* <button onClick={viewfav}>{viewfavourite?"hide favourites":"view favourites"}</button> */}
   <Custombutton text={viewfavourite?"hide favourites":"view favourites"} onClick={viewfav}></Custombutton>
{/* {
  viewfavourite && (
    <div>
    <h1>favourites</h1>
    
     { it.length===0?(<h1>No favourites</h1>):((it.map((item,index)=>(
        <div>
          <h1>{item.strMeal}</h1>
          <p>{item.strInstructions}</p>
        </div>
      ))))}
      </div>
    
  )
} */}
       {/* <input type="text"></input> */}
      {/* <button onClick={handlesearch}>search</button> */}
      <Custombutton text={"search"} onClick={handlesearch}></Custombutton>
      </div>
    <div className="meals">
    {searchval && meal.length===0 ? (
        <p>No meals found for "{foodname}"</p>
    ): (
      
     meal.map((item) => (
         
        <div id="img-inst" key={item.idMeal}>
          {/* <button className ="but-grp"onClick={()=>dispatch(addtoCart(item))}>Add to cart</button> */}
          {/* <Custombutton text={"Add to cart"} className ="but-grp"onClick={()=>dispatch(addtoCart(item))}></Custombutton> */}
                    <Custombutton text={"Add to cart"} className ="but-grp"onClick={()=>handleaddtocart(item)}></Custombutton>

          <h2>{item.strMeal}</h2>
          <img src={item.strMealThumb} alt={item.strMeal} width="300" />
          {/* <button onClick={viewrecipe}></button> */}
          {/* <h1>Instructions</h1> */}
          {/* <p>{item.strInstructions}</p> */}
          <h1>Ingredients</h1>
          <h1>measurement  ingredient</h1>
          <ul>
            {Array.from({ length: 20 }, (_, i) => {
              const ingredient = item[`strIngredient${i + 1}` as keyof Meal] as string;
              const measure = item[`strMeasure${i + 1}` as keyof Meal] as string;
              return ingredient && ingredient.trim() ? (
                <li key={i}>
                  {(measure || "").trim()}       {ingredient.trim()}
                </li>
              ) :null;
            })}
          </ul>
              <Custombutton text={recipe === item.idMeal ? "Hide Instructions" : "View Instructions"} className="but-grp" onClick={() => toggleRecipe(item.idMeal)}/>
                
              {/* </Custombutton> */}
              {
                recipe===item.idMeal&& (
                  <div>
                    <h1>Instructions</h1>
                    <p>{item.strInstructions}</p>
                    </div>
                )
              }
        </div>
      ))
    ) }
    </div>
    <div className="button-group-bottom">
    {/* <Custombutton text={"clear cart"} onClick={()=>dispatch(clearcart())}></Custombutton> */}
    <Custombutton text={"clear cart"} onClick={()=>handleclearcart()}></Custombutton>
    <Custombutton text={"Logout"} onClick={handlelogout}></Custombutton>
    </div>
  </div>
);

}
export default Getfood;