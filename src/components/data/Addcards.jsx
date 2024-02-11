import { createSlice } from "@reduxjs/toolkit";

let add=createSlice({
    name:'addCards',
    initialState:[],
    reducers:{
        addcar:(state,action)=>{
state.push(action.payload)
        },
        remc:(state,action)=>{
            state.splice(action.payload,0)
        }
    }
})
export let addcards=add.reducer;
export let {addcar,remc}=add.actions;