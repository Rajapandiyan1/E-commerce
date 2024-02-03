import React, { useEffect, useState } from 'react'
import NavProduct from './NavProduct'
import { getData } from './data/Searchdata';
import { useDispatch, useSelector } from 'react-redux';

export default function Product() {
    let [search,setSearch]=useState('');
    let searchdatas=useSelector((redux)=>{ return redux.search})
    useEffect(()=>{
        setSearch(searchdatas[0])
    },[])
  return(<>
    <NavProduct/>
    <div className="row">
        <div className="col-12 text-center">{search}</div>
    </div>
    </>)
    
  
}
