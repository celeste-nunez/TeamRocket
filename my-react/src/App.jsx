

import './App.css';
// import Check_habit from './Check_habit'
import NavBar from './Components/NavBar'
import Habitling from './Components/Habitling'
import HabitCreate from './Components/HabitCreate'
function App() {


  return (
    <>
      <NavBar/>
      <Habitling/>
      <button onClick={handleSave}>Save Habits</button>
      <HabitCreate/>
    </>
  );
};

export default App
