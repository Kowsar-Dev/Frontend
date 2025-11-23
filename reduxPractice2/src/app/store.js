import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import notesApi  from "../features/notesApi.js";


const store = configureStore({
    reducer :{
       [notesApi.reducerPath] : notesApi.reducer,
    },
    middleware : (getDefaultMiddleware)=>
        getDefaultMiddleware().concat(notesApi.middleware)
})

export default store;
