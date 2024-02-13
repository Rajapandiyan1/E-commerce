import { createSlice } from "@reduxjs/toolkit";

let productdataStore=createSlice({
    name:'ProductData',
    initialState:[''],
    reducers:{
        setProducts:(state,action)=>{
            // state={...action.payload};
            state[0]=action.payload;
        },
        
    }
})
export let productdataStores=productdataStore.reducer;
export let {setProducts}=productdataStore.actions