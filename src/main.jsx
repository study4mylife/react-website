import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'normalize.css'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Introduce from './components/Introduce'
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Carousel />
    <Introduce />
  </StrictMode>,
)
