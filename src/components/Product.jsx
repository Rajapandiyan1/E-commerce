import React, { useEffect, useState } from 'react'
import NavProduct from './NavProduct'
import { useSelector } from 'react-redux';
import ShowProudct from './ShowProudct';

export default function Product() {
  let [search, setSearch2] = useState('');
  let [product, setProduct] = useState([]);
  let [hole,sethole]=useState([]);
  let [loading,isloading]=useState(true)
  let searchdatas = useSelector((redux) => { return redux.search })
  useEffect(() => {
    let holeCopy=[];
    if(searchdatas[0] == 'Home'){
      getProduct()

    }
    else if (searchdatas[0]== 'Search'){
      SearchProducts(searchdatas[1])
    }
    async function SearchProducts(params) {
      await fetch ('https://65c0ebcbdc74300bce8cfdfb.mockapi.io/E-commerce/e-commmerce', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((data)=>{ return data.json()}).then((data)=>{ return data.map((data)=>{let prouds=data[0]; return prouds})}).then((data)=>{return data.map((data)=>{ return data.productList.map((data,i)=>{ return data})})}).then((data)=>{data.map((data)=>{ data.map((data)=>{holeCopy.push(data)})})}).then((data)=>{ sethole(holeCopy);console.log(holeCopy)}) 

    }
    setSearch2(searchdatas[1])
    async function getProduct() {
      fetch('https://65c0ebcbdc74300bce8cfdfb.mockapi.io/E-commerce/e-commmerce', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((data) => { return data.json() }).then((data) => { return data.find((data) => { return (data[0].Product == search) }) }).then((finds) => {
       if (finds == undefined) {
          setProduct([])
        } else {
          let Pdata = finds[0].productList;
          setProduct(Pdata)

        }
      }).finally(()=>{
      isloading(false)})
    }
  }, [search])
  return (<>
    <NavProduct sear={setSearch2} />
    <ShowProudct prod={product}load={loading} />
  </>)


}
