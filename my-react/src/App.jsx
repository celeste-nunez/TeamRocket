

import './App.css';


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './Components/NavBar';
import HomePage from './HomePage';
import Habitling from './Components/Habitling';
import AboutUs from './AboutUs';
 
function App() {


  return (
 
  <>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Habitling" element={<Habitling />} />
        <Route path="/AboutUs" element={<AboutUs />} />


      </Routes>
    </Router>
  </>
  );
}

export default App
