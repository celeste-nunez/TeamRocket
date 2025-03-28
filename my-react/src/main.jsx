import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>I commented these out to help not run into double messages temporarily.
    <App />
  //  </StrictMode>, 
)

