import React, { useState } from 'react'
import { useAddNoteMutation } from '../features/notesApi'

function NoteFrom() {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [addNote] = useAddNoteMutation();

 const handleSubmit = async (e)=>{
    e.preventDefault();
    await addNote ({name , email});
    setName ("");
    setEmail ("");
 }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter your name' />
         <br />
         <br />
         <textarea value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email' ></textarea>
         <br />
         <button type='submit'>Add Info</button>
      </form>
    </div>
  )
}

export default NoteFrom
