import { createSlice } from "@reduxjs/toolkit";

let holes=createSlice({
    name:'hole-product',
    initialState:[],
    reducers:{
        setHole:(state,action)=>{
            state[0]=action.payload;
        }
    }
})
export let HoleProducts=holes.reducer;
export let {setHole}=holes.actions;
