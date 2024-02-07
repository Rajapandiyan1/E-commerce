import React, { useEffect, useState } from 'react'
import NavProduct from './NavProduct'
import { useSelector } from 'react-redux';
import ShowProudct from './ShowProudct';

export default function Product() {
  let [search, setSearch2] = useState('');
  let [product, setProduct] = useState([]);
  let [hole,sethole]=useState([]);
  let [loading,isloading]=useState(true)
  let [filtes,setfiltes]=useState('');
  let searchdatas = useSelector((redux) => { return redux.search })
  useEffect(() => {
    let holeCopy=[];
    
    if(searchdatas[0] == 'Home'){
      getProduct()
 setfiltes('Home')
    }
    else if (searchdatas[0]== 'Search'){
 setfiltes('Search')
      SearchProducts(searchdatas[1])
    }
    async function SearchProducts(params) {
      await fetch ('https://65c0ebcbdc74300bce8cfdfb.mockapi.io/E-commerce/e-commmerce', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((data)=>{ return data.json()}).then((data)=>{ return data.map((data)=>{let prouds=data[0]; return prouds})}).then((data)=>{return data.map((data)=>{ return data.productList.map((data,i)=>{ return data})})}).then((data)=>{data.map((data)=>{ data.map((data)=>{holeCopy.push(data)})})}).then((data)=>{ sethole(holeCopy);console.log(holeCopy);setProduct(holeCopy)}).finally(()=>{isloading(false)})
      setfiltes('Search')
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

        }
      }).catch((e)=>{
console.log(e.message)
      }).finally(()=>{
      isloading(false)})
    }
  }, [search])
  return (<>
    <NavProduct sear={setSearch2} load={isloading} />
    {filtes=='Home' ?   <ShowProudct prod={product}load={loading} /> :  <ShowProudct prod={product.filter((data)=> {  return (data.product.includes(searchdatas[1]) )})}load={loading} />}
   
  </>)


}
