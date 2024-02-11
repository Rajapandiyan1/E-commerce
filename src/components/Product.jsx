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
  // let [fdata,setfadta]=useState([]);
  let [filtes,setfiltes]=useState('');
  let searchdatas = useSelector((redux) => { return redux.search })
  let [dir,setdir]=useState('')
  useEffect(()=>{
  },[])
  useEffect(() => {
    setdir(searchdatas[0])
    
    let holeCopy=[];
//     if(dir == 'Home'){
//       getProduct()
//  setfiltes('Home')
//     }
    if (dir== 'Search'){
 setfiltes('Search')
      SearchProducts(search)
    }
    async function SearchProducts(params) {
      isloading(true)
       await fetch ('https://65c0ebcbdc74300bce8cfdfb.mockapi.io/E-commerce/e-commmerce', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((data)=>{ return data.json()}).then((data)=>{ return data.map((data)=>{let prouds=data[0]; return prouds})}).then((data)=>{return data.map((data)=>{ return data.productList.map((data,i)=>{ return data})})}).then((data)=>{data.map((data)=>{ data.map((data)=>{holeCopy.push(data)})})}).then((data)=>{ let holec=holeCopy.map((data,id)=>{return {...data,'id':id}}); sethole(holec);}).finally(()=>{isloading(false)})
      setfiltes('Search')
      await sethole((prev)=>{
        let data =prev.filter((datas)=>{
         let counts=0; 
        let splits=datas.product.split(' '); 
        let serch=search.split(' ');
        for(let datas1 of serch){
          for(let dats2 of splits){
            if(dats2.toLowerCase()==datas1.toLowerCase()){
              counts++;
            }
          }
        } 
        if(serch.length==counts){
      return prev
    }
    }); 
      setProduct(data)
     })
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
    {filtes=='Home' ?   <ShowProudct prod={product}load={loading} /> :  <ShowProudct prod={product}load={loading} />}
   
  </>)


}
