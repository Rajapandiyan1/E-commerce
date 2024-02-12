import { createSlice } from "@reduxjs/toolkit";

let productdataStore=createSlice({
    name:'ProductData',
    initialState:[''],
    reducers:{
        setProducts:(state,action)=>{
            // state={...action.payload};
            state[0]=action.payload;
        },
        reset:(state,action)=>{
            state.length=0;
        }
    }
})
export let productdataStores=productdataStore.reducer;
export let {setProducts,reset}=productdataStore.actions