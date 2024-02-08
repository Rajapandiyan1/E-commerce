import React from 'react'
import {configureStore} from '@reduxjs/toolkit'
import Searchdata from './Searchdata'
import { Productdatas } from './Productdata'

 
export let store = configureStore({
    
    reducer:{
        search:Searchdata,
        productData:Productdatas,
    }
})