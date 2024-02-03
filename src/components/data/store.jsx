import React from 'react'
import {configureStore} from '@reduxjs/toolkit'
import Searchdata from './Searchdata'

 
export let store = configureStore({
    
    reducer:{
        search:Searchdata,
    }
})