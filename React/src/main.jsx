import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, { Nap, NoteApp } from './App.jsx'   // ✅ import Nap too

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Nap />
    <NoteApp />
  </StrictMode>,
)
