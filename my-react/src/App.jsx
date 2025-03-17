

import './App.css';
// import Check_habit from './Check_habit'
 habitling-component
import Habitling from './Components/Habitling';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './Components/NavBar';
import HomePage from './HomePage';
import HabitlingZoo from './HabitlingZoo';
import AboutUs from './AboutUs';
 main
function App() {


  return (
 habitling-component
    <>
      <NavBar/>
      <Habitling/>
    </>

    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/HabitlingZoo" element={<HabitlingZoo />} />
        <Route path="/AboutUs" element={<AboutUs />} />


      </Routes>
    </Router>
 main
  );
}

export default App
