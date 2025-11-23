import { useState } from 'react'

import './App.css'
import NoteList from './components/NoteList'
import NoteFrom from './components/NoteFrom'

function App() {


  return (
    <>
      <NoteList/>
      <br />
      <NoteFrom/>
    </>
  )
}

export default App
