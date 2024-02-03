import { createSlice } from "@reduxjs/toolkit";

export let Searchdata=createSlice({
    initialState:'',
    name:'searchData',
    reducers:{
        setData:(state,action)=>{
            state=action.payload;
        },
        getData:(state,action)=>{
            return state;
        }
    }
})
export let {setData,getData}=Searchdata.actions;
export  let Searchdatas=Searchdata.reducer;