import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Summa from './components/Summa'
import { BrowserRouter } from 'react-router'
import "./index.css";







createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
    <StrictMode>
      {/* <App /> */}
      {/* <Navbar/> */}
      <Summa/>
      
    </StrictMode>
  </BrowserRouter>


)
