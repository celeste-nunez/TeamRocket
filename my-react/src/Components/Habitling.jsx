import React, {useState, useEffect} from "react";
import HabitCreate from "./HabitCreate";
// import { db} from "./firebase"; maybe wont need?
import {fetchHabits, updateHabitling, saveHabitling, deleteHabitling} from "../firebase_stuff/Data"
import {onAuthStateChanged, getAuth} from "firebase/auth";
import "./Habitling.css";

const Habitling = () => {
  const [habits, setHabits] = useState([]);
  console.log(habits)
  const currentDayIndex = new Date().getDay();
  const [user, setUser] = useState(null);


  // Load habitlings when component mounts
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);//I don't know if I need this here. Chat said to and I worry
      if (currentUser) {
          const usersHabits = await fetchHabits();
          setHabits(usersHabits);
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

  const resetWeeklyCompletion = () => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) => ({
        ...habit,
        completion: Array(7).fill(false), // Reset completion
        currentStreak: 0, // Reset streak
      }))
    );
  };

  const toggleDayCompletion = (habitIndex) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit, hIdx) => {
        if (hIdx !== habitIndex) return habit;

        const newCompletion = [...habit.completion];
        newCompletion[currentDayIndex] = !newCompletion[currentDayIndex];

        let newCurrentStreak = habit.currentStreak;
        let newBestStreak = habit.bestStreak;

        if (newCompletion[currentDayIndex]) {
          // Increment streak if marking as complete
          newCurrentStreak += 1;
          newBestStreak = Math.max(newBestStreak, newCurrentStreak);
        } else {
          // Reset streak if unchecked
          newCurrentStreak = 0;
        }
        updateHabitling(newCurrentStreak, newBestStreak, newCompletion, habit.petName)
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

  const addHabit = (newHabit) => {
    const habitWithDefaults = {
      petName: newHabit.name,
      habitName: newHabit.description,
      frequency: `Start: ${newHabit.startDate} - End: ${newHabit.endDate}`,
      currentStreak: 0,
      bestStreak: 0,
      image: "path_to_default_image.png",
      completion: Array(7).fill(false),
      lastUpdatedWeek: new Date().getWeek(), // Track the current week
    };
    saveHabitling(newHabit, newHabit.name);//maybe newHabitDefaults instead
    //add "send message" or the habitling equivilent here, so that each new habit is sent to the cloud
    setHabits([...habits, habitWithDefaults]);
  };
  //add update habit functionality. 

  return (
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Habitling;


