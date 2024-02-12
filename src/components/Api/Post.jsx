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
  return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBgwHS0_ECn3ApnGvwH_e23EzWFvynNUTs`,{
    method:"POST",
    body:JSON.stringify({"idToken":token}),
    headers:{
        'Content-Type':'application/json',      
    }
  }).then((dat)=>{    
    return dat.json()
     }).then((data)=>{
      return data
     })
}