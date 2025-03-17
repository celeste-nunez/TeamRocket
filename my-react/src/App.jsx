

import './App.css';


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './Components/NavBar';
import HomePage from './HomePage';
import HabitlingZoo from './HabitlingZoo';
import AboutUs from './AboutUs';
 main
function App() {


  return (
 
  <>
    <NavBar/>

    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/HabitlingZoo" element={<HabitlingZoo />} />
        <Route path="/AboutUs" element={<AboutUs />} />


      </Routes>
    </Router>
  </>
  );
}

export default App
