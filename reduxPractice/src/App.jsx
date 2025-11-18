import React from 'react'
import "./app.css"
import {useDispatch, useSelector} from "react-redux"
import { decrement, increment } from './features/counter/counterSlice.js'

function App() {
  const dispatch = useDispatch()
  const count = useSelector ( (state)=>state.counter.value)
  return (
    <div className='bg-gray-200 h-[120px] w-80 m-80 justify-center items-center text-center'>
      <h1>hello</h1>

      <h2> Count : {count} </h2>
      <button onClick={()=>dispatch(increment())} className='bg-slate-500 px-12 py-2 '>+</button>
      <button onClick={()=>dispatch(decrement())} className='bg-slate-500 px-12 py-2 ml-2 '>-</button>
    </div>
  )
}

export default App
