

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

//chat GPT link "https://chatgpt.com/share/67e1e9c4-d790-8000-9150-ef733a821ba5"

//What has been done
//I've changed the app and data files to export functions rather than exporting HTML. 
// I've started working on porting habitlings in and out. So far I only have a useEffect function that waits for the authentication state to change
//when It does it see if there's a user. If there is a user still (new or old) it loades the habitlings, if there is no use it gives and empty list of habitlings.
//all of the meat of habitlings is stored in "habits" 
// (i.e. const [habits, setHabits] = useState([]);
        //        ^ this guy right here
//       const currentDayIndex = new Date().getDay();
//       const [user, setUser] = useState(null);
// )

//so adding to or taking away from that list is how we change what appears on screen. Look to the day clicking functionality to see how to take one out of the list and change it


//what still needs to be done with firebase:
//we need to add a send habitling functionality to habitling. Theres a note in the "addHabit" function at the bottom about that
//we need to add updateaHabit functionality. 
//along those lines we have to go back into Data.jsx and change all of the code that sent and loaded messages to sending and loading habitlings. 
//I've changed the names but not the code.