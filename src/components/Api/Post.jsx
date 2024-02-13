import { datas } from "./Getdata";

const API_BASE='https://identitytoolkit.googleapis.com/v1'
const POST='/accounts:signUp?key=AIzaSyDL5f22UyXyw2lqw4p9YQj6Kdl23VKPxQQ';
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
  return fetch(`${API_BASE}${Log}?key=AIzaSyDL5f22UyXyw2lqw4p9YQj6Kdl23VKPxQQ`,{
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
  return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDL5f22UyXyw2lqw4p9YQj6Kdl23VKPxQQ`,{
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