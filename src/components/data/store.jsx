import React from 'react'
import {configureStore} from '@reduxjs/toolkit'
import Searchdata from './Searchdata'
import { Productdatas } from './Productdata'
import { productdataStores } from './ProductdataStore'
import { userdatas1 } from './Userdata'
import { addcards } from './Addcards'
import { HoleProducts } from './HoleProduct'

 
export let store = configureStore({
    
    reducer:{
        search:Searchdata,
        productData:Productdatas,
        ProductDetails:productdataStores,
        userdataof:userdatas1,
        card:addcards,
        HolePro:HoleProducts
    }
})