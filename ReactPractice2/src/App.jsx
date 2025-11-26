import { useReducer, useState } from 'react'

import './App.css'

function App() {
 const emptyData = {
  name : "",
  email : "",
  password : "",
  city : "",
  address : ""
 };
   
 const reducer = (state,action) =>{
     return {...state , [action.type]:action.value}
 
 }
   const [data,dispatch] = useReducer (reducer,emptyData)
  return (
    <>
     <div>
      <h2>Use Reducer</h2>
      <input type="text" onChange={(event)=>dispatch({value:event.target.value, type :"name"})} placeholder='Enter your Name' />
            <br /><br />
      <input type="text" onChange={(event)=>dispatch({value:event.target.value, type :"email"})} placeholder='Enter your Email' />
            <br /><br />
      <input type="text" onChange={(event)=>dispatch({value:event.target.value, type :"Password"})} placeholder='Enter your Password' />
            <br /><br />
      <input type="text" onChange={(event)=>dispatch({value:event.target.value, type :"city"})} placeholder='Enter your City'/>
            <br /><br />
      <input type="text" onChange={(event)=>dispatch({value:event.target.value, type :"address"})} placeholder='Enter your Address' />
            <br /><br />
  
     </div>
     <div>

        <li>Name: {data.name } </li>
        <li>Email : {data.email } </li>
        <li>Password : {data.password } </li>
        <li>City:  {data.city } </li>
        <li>Address :{data.address } </li>
  
     </div>
    </>
  )
}

export default App
