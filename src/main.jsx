import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router'
import "./index.css";



createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
    <StrictMode>
      <App/>
    </StrictMode>
  </BrowserRouter>,


)
