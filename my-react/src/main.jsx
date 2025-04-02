// add strictmode from react (system), not sure if this is needed anymore, but in case more debugging is needed, 
// it's used to restrict message doubling in JS
import { StrictMode } from 'react'
// add the creat root function from the system
import { createRoot } from 'react-dom/client'
// add the page style sheet
import './index.css'
// summon the App create function from the App.jsx file
import App from './App.jsx'

// create the site root, select the element with an ID of root, and render it
createRoot(document.getElementById('root')).render(
  // <StrictMode>I commented these out to help not run into double messages temporarily.
  // summon the App function, kicking the website off
    <App />
  //  </StrictMode>, 
)

