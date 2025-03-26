// import the style for the html (see previous file)
import './App.css';

// import the framework for react from react outline
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//add the home page function (add the html for the nav-bar)
import HomePage from './HomePage';
//add the habitling item 
import Habitling from './Components/Habitling';
// add AboutUs function, generate more html
import AboutUs from './AboutUs';

function App() {
  return (


    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Habitling" element={<Habitling />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </Router>
    </>
  );
}

//the App function is prepared for export
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
//added a send habitling functionality to habitling.
// added updateaHabit functionality. 
//updated Data.jsx to have proper encoding of habitlings



//what still needs to be done with firebase:
//get everyone to install firebase on their local computers
//polish if anythings. 
//run stress tests
//add better rules in the firebase to we're not locked out in 30 days and so it's secure.