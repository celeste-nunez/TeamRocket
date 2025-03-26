

import './App.css';
// import Check_habit from './Check_habit'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './Components/NavBar';
import HomePage from './HomePage';
import HabitlingZoo from './HabitlingZoo';
import AboutUs from './AboutUs';
function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/HabitlingZoo" element={<HabitlingZoo />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App
