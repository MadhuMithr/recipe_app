// import { createSlice } from "@reduxjs/toolkit";
// import { act } from "react";
// const initialState={
//     itemName :[],
// }
// export const cartSlice=createSlice({
//     name : "cart",
//     initialState : initialState,
//     reducers : {
//          addtoCart :(state,action)=>
//         {
             
             
//              const data=action.payload;
//              const result=state.itemName.some(item=>item.idMeal===data.idMeal)
//              if(!result)
//              {
//                 // state.itemName=[...state.itemName,action.payload]
//                 state.itemName.push(action.payload);
//                 console.log("added");
//              }
//             console.log(result)
//             // state.itemName.push(action.payload);
//         },
    
//         clearcart :(state)=>{state.itemName=[]},

//     }
// });
// export const { clearcart,addtoCart,viewfav }=cartSlice.actions


// export default cartSlice.reducer
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Meal } from "../types/Meal"; 

interface CartState {
  itemName: Meal[];
}

const initialState: CartState = {
  itemName: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, action: PayloadAction<Meal>) => {
      const data = action.payload;
      const exists = state.itemName.some(item => item.idMeal === data.idMeal);
      if (!exists) {
        state.itemName.push(data);
        console.log("Item added:", data.strMeal);
      }
    },
    clearcart: (state) => {
      state.itemName = [];
    },
  },
});

export const { addtoCart, clearcart } = cartSlice.actions;
export default cartSlice.reducer;
