
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
  };

  const [change, setChange] = useState({name : "shamim", age : 20});
  
 
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
   const changeName = () =>  {
    setChange(prev=> ({...prev , name: "shamu" , age : 18}))

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
         <br />
         <br />
         <br />
         <h2> {change.name}  {change.age} </h2>
         <button onClick={changeName}>change Me</button>   

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
        <input
         type="text"
          placeholder='Enter your name'
          />
        <button  className='border-sky-100 px-12'> submit</button>
      </form>
     </div>
    </>
  )

}
function NoteApp () {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task];

    copyTask.push({ title, details })

    setTask(copyTask)

    setTitle('')
    setDetails('')
  }


  const deleteNote = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx, 1)

    setTask(copyTask)
  }


  return (
    <>
     <div className='h-screen lg:flex bg-black text-white'>

      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex gap-4 lg:w-1/2 p-10 flex-col items-start'>

        <h1 className='text-4xl mb-2 font-bold'>Add Notes</h1>

        {/* PEHLA INPUT FOR HEADING */}
        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 w-full font-medium py-2 border-2 outline-none rounded '
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        {/* DETAILED VALA INPUT  */}
        <textarea
          type="text"
          className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none  rounded '
          placeholder='Write Details here'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        />

        <button
          className='bg-white active:scale-95 font-medium w-full outline-none  text-black px-5 py-2 rounded'
        >
          Add Note
        </button>

      </form>
      <div className='lg:w-1/2 lg:border-l-2  p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>
          {task.map(function (elem, idx) {

            return <div key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
    </>
  )
}

export default App 
export {Nap}
export {NoteApp}
