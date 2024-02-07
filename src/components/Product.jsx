import React, { useEffect, useState } from 'react'
import NavProduct from './NavProduct'
import { useSelector } from 'react-redux';
import ShowProudct from './ShowProudct';

export default function Product() {
  let [search, setSearch2] = useState('');
  let [product, setProduct] = useState([]);
  let searchdatas = useSelector((redux) => { return redux.search })
  useEffect(() => {
    setSearch2(searchdatas[0])
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
      })
    }
    getProduct()
  }, [search])
  return (<>
    <NavProduct sear={setSearch2} />
    <ShowProudct prod={product} />
  </>)


}
