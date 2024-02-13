import { createSlice } from "@reduxjs/toolkit";

let add=createSlice({
    name:'addCards',
    initialState:[],
    reducers:{
        addcar:(state,action)=>{
state.push(action.payload)
        },
        remo:(state,action)=>{
            state.splice(action.payload,1)
        },
        reset:(state,action)=>{
            state.length=0;
        }
    }
})
export let addcards=add.reducer;
export let {addcar,remo,reset}=add.actions;