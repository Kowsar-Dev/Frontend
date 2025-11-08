
import './index.css'
import Header from './components/header'
import CartButton from './components/cart'
import {assets} from "./assets/assets.js"
import { useState } from 'react'


function App() {
  const [count, setCount] = useState({name : "kowsar", age :21})
  const [num, setNum] = useState("kowsar")
  function changeNum () {
    setNum ("ridoy")
  }

  const [num1, setNum1] = useState(0)

  function increaseNum (){
    setNum1 (num1+1)
  };
    function decreaseNum (){
    setNum1 (num1-1)
  };
    function doubleNum (){
    setNum1 (num1+5 )
  };
  const nameChange =()=>{
    setCount(prev=>({...prev , name:"Mormo", age:20}))
  }
  return (
    <>
      <div className='bg-red-50 items-center justify-center text-center'>
         <h1> hello</h1>
         <Header logo={assets.logo} searchIcon={assets.search_icon} />
         <CartButton cartIcon={assets.cart_icon} />
         <h2> This is {num} </h2>
         <h2> {num1} </h2>
         <h2>{count.name} {count.age} </h2>
         <button className='border-2 px-12 py-0' onClick={changeNum}>click</button>
         <br />
         <button onClick={increaseNum}>click</button>
         <br />
         <button onClick={decreaseNum}>click</button>
         <br />
         <button onClick={doubleNum}>click</button>
         <br />
         <button onClick={nameChange}>click</button>



         

      </div>
    </>
  )
}

function Nap (){

 const submitHandler = (e)=>{
    e.preventDefault()
    console.log("submited");
    
 }
  return (
    <>
     <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} >
        <input type="text" placeholder='Enter your name' />
        <button  className='border-sky-100 px-12'> submit</button>
      </form>
     </div>
    </>
  )

}

export default App 
export {Nap}
