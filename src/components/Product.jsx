import React, { useEffect, useState } from 'react'
import NavProduct from './NavProduct'
import { useDispatch, useSelector } from 'react-redux';
import ShowProudct from './ShowProudct';

export default function Product() {
  let [search, setSearch2] = useState('');
  let [product, setProduct] = useState([]);
  let [hole,sethole]=useState([]);
  let setP=useDispatch()
  let [loading,isloading]=useState(true);
  let [fdata,setfadta]=useState([]);
  let [filtes,setfiltes]=useState('');
  let searchdatas = useSelector((redux) => { return redux.search })
  let [dir,setdir]=useState('')
  
  useEffect(() => {
    setdir(searchdatas[0])
    let holeCopy=[];
    if(dir == 'Home'){
      getProduct()
 setfiltes('Home')
    }
    else if (dir== 'Search'){
 setfiltes('Search')
      SearchProducts(search)
    }
    async function SearchProducts(params) {
       await fetch ('https://65c0ebcbdc74300bce8cfdfb.mockapi.io/E-commerce/e-commmerce', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((data)=>{ return data.json()}).then((data)=>{ return data.map((data)=>{let prouds=data[0]; return prouds})}).then((data)=>{return data.map((data)=>{ return data.productList.map((data,i)=>{ return data})})}).then((data)=>{data.map((data)=>{ data.map((data)=>{holeCopy.push(data)})})}).then((data)=>{ sethole(holeCopy);setProduct(holeCopy)}).finally(()=>{isloading(false)})
      setfiltes('Search')
      await setProduct((prev)=>{let data=prev.filter((data)=> {  return (data.product.toLowerCase().includes(search.toLocaleLowerCase()) )}); setfadta(data);  return data})
      await setProduct((prev)=>{ return prev})
    }

    setSearch2(searchdatas[1])
    setfiltes('Home')
    async function getProduct() {
      fetch('https://65c0ebcbdc74300bce8cfdfb.mockapi.io/E-commerce/e-commmerce', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((data) => {  if(data.status == 200){return data.json()}else{throw "Network Error"} }).then((data) => { return data.find((data) => { return (data[0].Product == search) }) }).then((finds) => {
       if (finds == undefined) {
          setProduct([])
        } else {
          let Pdata = finds[0].productList;
        
          setProduct(Pdata)
          setP(setProduct(Pdata))
        }
      }).catch((e)=>{

      }).finally(()=>{
      isloading(false)})
    }
  },[search])
  return (<>
    <NavProduct sear={setSearch2} files={setdir} load={isloading} />
    {filtes=='Home' ?   <ShowProudct prod={product}load={loading} /> :  <ShowProudct prod={fdata}load={loading} />}
   
  </>)


}
