import {createSlice, PayloadAction } from '@reduxjs/toolkit'
interface LoginState{
    email : string;
    password:string;
}
const initialState:LoginState ={
        email : "",
        password : "",
        
    }
export const  loginslice = createSlice({
    name : 'loginsli',
    initialState:initialState,
    reducers:{
        setEmaillog:(state,action : PayloadAction<string>)=>
        {
            state.email=action.payload
        },
        setPasswordlog :(state,action : PayloadAction<string>)=>
        {
            state.password=action.payload
        },
        clear :()=>  initialState,
       
    },
})

export const {setEmaillog , setPasswordlog,clear}=loginslice.actions


export default loginslice.reducer