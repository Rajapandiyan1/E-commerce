import { datas } from "./Getdata";
import Axois from 'axios'
const API_BASE='https://identitytoolkit.googleapis.com/v1'
const POST='/accounts:signUp?key=AIzaSyBgwHS0_ECn3ApnGvwH_e23EzWFvynNUTs';
const Log='/accounts:signInWithPassword'
export let Post= async(data)=>
 {
  return fetch(`${API_BASE}${POST}`,{
    method:"POST",
    body:JSON.stringify(data),
    headers:{
        'Content-Type':'application/json'
    }
  }).then((dat)=>{ return dat.json()})
}
export let Logi=async (data)=>{
  return fetch(`${API_BASE}${Log}?key=AIzaSyBgwHS0_ECn3ApnGvwH_e23EzWFvynNUTs`,{
    method:"POST",
    body:JSON.stringify(data),
    headers:{
        'Content-Type':'application/json'
    }
  }).then((dat)=>{
     return dat.json()})
}
export let userData=async (token)=>{
  let tok=datas()
  return Axois.post(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBgwHS0_ECn3ApnGvwH_e23EzWFvynNUTs`,{"idToken":tok}).then((data)=>{
      // console.log(data.data)
  return data.data.users[0];
 })
  
  return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBgwHS0_ECn3ApnGvwH_e23EzWFvynNUTs`,{
    method:"POST",
    body:JSON.stringify({"idToken":tok}),
    headers:{
        'Content-Type':'application/json',      
    }
  }).then((dat)=>{   
    if(dat.status == 200)
    return dat.json()
  else
  throw 'Invalid data'
     }).then((data)=>{
      
      return data.users[0];
     })
}