import { createSlice } from "@reduxjs/toolkit";

let Productdata=createSlice({
    name:'Product-Data',
    initialState:[],
    reducers:{
        setProduct:(state,action)=>{
            state.push(action.payload);
        },
    }
})
export let Productdatas=Productdata.reducer;
export let {setProduct}=Productdata.actions;