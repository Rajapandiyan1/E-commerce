import React, { useEffect, useState } from 'react'  
import NavProduct from './NavProduct'
import { useSelector } from 'react-redux';
import ShowProudct from './ShowProudct';

export default function Product() {
    let [search,setSearch2]=useState('');
    let searchdatas=useSelector((redux)=>{ return redux.search})
    useEffect(()=>{
        setSearch2(searchdatas[0])
    },[search])
  return(<>
    <NavProduct sear={setSearch2}/>
    <ShowProudct/>
    </>)
    
  
}
