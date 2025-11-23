import React from 'react'
import { useDeleteNoteMutation, useGetNotesQuery} from "../features/notesApi.js"

function NoteList() {

    const {data : notes , isLoading } = useGetNotesQuery();
    const [ deleteNote] = useDeleteNoteMutation ();
    
    if (isLoading){
        return <div>Loading.....</div>
    }
    console.log(notes);
    
  return (
    <div>
      {
        notes && notes.map((note)=>{
            return <div key={note.id}>
                <h2>{note.name} </h2>
                <p> {note.email} </p>
                <button onClick={()=> deleteNote(note.id)}>Delete</button>
             

            </div>
        })
      }
    </div>
  )
}

export default NoteList
