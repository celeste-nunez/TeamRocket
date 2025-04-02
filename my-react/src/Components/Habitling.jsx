// add useState + useEffect from react system
import React, {useState, useEffect} from "react";
// add the HabitCreate function from the corresponding jsx file
import HabitCreate from "./HabitCreate";
// add the NavBar function to throw together its HTML
import NavBar from './NavBar';
// add the auth constant/variable from firebase
import {auth} from "../firebase_stuff/firebase_imports"; 
// add the functions fetch + update + save + delete habitlings from firebase/Data file
// each function's impact corresponds to its name and what it does to a habitling entry
import {fetchHabits, updateHabitling, saveHabitling, deleteHabitling} from "../firebase_stuff/Data"
// import the Auth state changed DIRECTLY from firebase
import {onAuthStateChanged} from "firebase/auth";
// add the habitling style sheet
import "./Habitling.css";
// add the AnimateSprite function
import Sprite from "./SpriteAnimation";


//initlize the habitling
const Habitling = () => {
  const [habits, setHabits] = useState([]);
  
  // retrieve the date and user state (set user or unset)
  const currentDayIndex = new Date().getDay();
  const [user, setUser] = useState(null);


  // Load habitlings when component mounts
  useEffect(() => {
    // user auth with current user, see if the user has changed (or logged out)
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);//I don't know if I need this here. Chat said to and I worry
      // if a user is present, fetch their habitlings
      if (currentUser) {
          const usersHabits = await fetchHabits();
          
          // set habits to the user's fetched habitlings
          setHabits(usersHabits);
      // if no user exisits, clear the displayed habitlings, nothing shows up for them
      } else {
          setHabits([]); // Clear messages when user logs out
      }  
    });
    return () => unsubscribe(); // Cleanup on unmount
  }, []);

//reset the weekly counter
  useEffect(() => {
    resetWeeklyCompletion();
  }, []);

  // reset the week, set habits to previous habits
  const resetWeeklyCompletion = () => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) => ({
        //for each habit, re-fill the array will unfilled days
        ...habit,
        completion: Array(7).fill(false), // Reset completion
        currentStreak: 0, // Reset streak
      }))
    );
  };

// add habitling, with habit defualts embedded 
  const addHabit = (newHabit) => {
    // set the defaults for new habitling, populate with data
    const habitWithDefaults = {
      petName: newHabit.name,
      habitName: newHabit.description,
      frequency: `Start: ${newHabit.startDate} - End: ${newHabit.endDate}`,
      currentStreak: 0,
      bestStreak: 0,
      image: {Sprite},
      completion: Array(7).fill(false),
      lastUpdatedWeek: new Date().getWeek(), // Track the current week
    };
    saveHabitling(habitWithDefaults);//maybe newHabitDefaults instead
    setHabits([...habits, habitWithDefaults]);
  };

  // complete the day
  const toggleDayCompletion = (habitIndex) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit, hIdx) => {
        // for each habit (on user by user basis) return itself if it hasn't been completed
        if (hIdx !== habitIndex) return habit;

        // pass the new day completion into the habitling
        const newCompletion = [...habit.completion];
        newCompletion[currentDayIndex] = !newCompletion[currentDayIndex];

        // add to or break the streak, if needed
        let newCurrentStreak = habit.currentStreak;
        let newBestStreak = habit.bestStreak;

        // was the habit completed today?
        if (newCompletion[currentDayIndex]) {
          // Increment streak if marking as complete
          newCurrentStreak += 1;
          newBestStreak = Math.max(newBestStreak, newCurrentStreak);
        } else {
          // Reset streak if the habit was not completed today
          newCurrentStreak = 0;
        }
        // update the habitling with the streak inputs, based on its name
        updateHabitling(newCurrentStreak, newBestStreak, newCompletion, habit.petName)
        // return the streak w/ habit
        return {
          ...habit,
          completion: newCompletion,
          currentStreak: newCurrentStreak,
          bestStreak: newBestStreak,
        };
      })
    );
  };

  // Function to determine the current week number
  Date.prototype.getWeek = function () {
    const firstDayOfYear = new Date(this.getFullYear(), 0, 1);
    const pastDays = Math.floor(
      (this - firstDayOfYear) / (24 * 60 * 60 * 1000)
    );
    return Math.ceil((pastDays + firstDayOfYear.getDay() + 1) / 7);

    //Extending native objects like Date.prototype can cause unintended side effects and is generally discouraged. Instead, you could create a standalone getWeek function:

    // javascript
    // Copy
    // Edit
    // const getWeek = (date = new Date()) => {
    //   const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    //   const pastDays = Math.floor((date - firstDayOfYear) / (24 * 60 * 60 * 1000));
    //   return Math.ceil((pastDays + firstDayOfYear.getDay() + 1) / 7);
    // };
    // Then use lastUpdatedWeek: getWeek() instead of modifying the Date object.
    };

// generate the HTML display for each habitling, with a form 
// the form allows the user to check off if they have completed the habit or not
// it also displays the week's successes/failures, and the habitling's best streak
  return (
    <>
      <NavBar/>
      <div>
        <h1>Habitling</h1>
        <HabitCreate onSave={addHabit} />
        <div className="habit-container">
          {habits.map((habit, index) => (
            <div key={index} className="habit-card">
              <div className="habit-header">
                <h2 className="habit-title">{habit.petName}</h2>
                <label className="habit-label">
                  <input
                    type="checkbox"
                    className="habit-checkbox"
                    checked={habit.completion[currentDayIndex]}
                    onChange={() => toggleDayCompletion(index) }
                  />
                  {habit.habitName}
                </label>
              </div>

              <hr className="habit-divider" />

              <div className="habit-streak">
                <p className="streak-current">🔥 {habit.currentStreak}</p>
                <p className="streak-best">🏆 {habit.bestStreak}</p>
              </div>

              <div className="habit-tracker">
                {habit.completion.map((done, dayIdx) => (
                  <div
                    key={dayIdx}
                    className={`habit-day-circle ${
                      done ? "habit-day-filled" : ""
                    } ${dayIdx === currentDayIndex ? "habit-day-current" : ""}`}
                  />
                ))}
              </div>

              <hr className="habit-divider" />

              <div className="habit-image-container">
                <img src={habit.image} alt={habit.petName} className="habit-image" />
              </div>

              <div className="habit-image-container">
                <Sprite />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// export the Habitling functions
export default Habitling;


