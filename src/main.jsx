import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme"; // 引入 MUI 主題
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Introduce from './components/Introduce'
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Carousel />
      <Introduce />
    </ThemeProvider>
  </StrictMode>
)


