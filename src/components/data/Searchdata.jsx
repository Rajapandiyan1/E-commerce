import { createSlice } from "@reduxjs/toolkit";

let Searchdata=createSlice({

    initialState:[''],
    name:'searchData',
    reducers:{
        setData:(state,action)=>{
            state[0]=action.payload;
        },
        getData:(state,action)=>{
        
            return state[0];
        }
    }
})
export let {setData,getData}=Searchdata.actions;
export default Searchdata.reducer;