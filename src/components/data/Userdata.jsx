import { createSlice } from "@reduxjs/toolkit";

let userdatas=createSlice({
    name:'User-datas',
    initialState:[''],
    reducers:{
        setUserdata:(state,action)=>{
            state[0]=action.payload;
        }
    }
})
export let userdatas1=userdatas.reducer;
export let {setUserdata}=userdatas.actions;