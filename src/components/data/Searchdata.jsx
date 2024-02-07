import { createSlice } from "@reduxjs/toolkit";

let Searchdata=createSlice({

    initialState:['',''],
    name:'searchData',
    reducers:{
        setData:(state,action)=>{
            let data=action.payload;
            state[1]=data[1]
            state[0]=data[0]
        },
        getData:(state,action)=>{
            return state[0];
        }
    }
})
export let {setData,getData}=Searchdata.actions;
export default Searchdata.reducer;