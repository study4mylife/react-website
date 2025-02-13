import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'normalize.css'
import Navbar from './components/Navbar'
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
  </StrictMode>,
)
