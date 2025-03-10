// import Check_habit from "./Check_habit";
// import HabitCreate from "./Components/HabitCreate";
// import "./Habitling.css";

// import petImg from "./assets/react.svg"; 

// function Habitling({ name, description, streak, bestStreak, petImage }) {
//     return (
//        <div className="habitling-box">
//             {/* Name */}
//             <div className="habitling-name-box box">
//                 <h2 className="habitling-name">{name || "Unnamed Habitling"}</h2>
//                 <HabitCreate/>
//             </div>

//             {/* Description */}
            

//             {/* Stats */}
//             <div className="habitling-stats-box box">
//                 <h3 className="habitling-stats-streak">🔥 Streak: {streak || 0} days</h3>
//                 <h3 className="habitling-stats-best">🏆 Best: {bestStreak || 0} days</h3>
//             </div>

//             {/* Pet Image */}
//             <div className="habitling-pet-box box">
//                 <img src={petImage || petImg} alt="Habitling Pet" />
//             </div>
//        </div> 
//     );
// }

// export default Habitling;


import React, { useState } from "react";
import HabitCreate from "./Components/HabitCreate";
import "./Habitling.css";

const Habitling = () => {
  const [habits, setHabits] = useState([]);

  const addHabit = (newHabit) => {
    const habitWithDefaults = {
      petName: newHabit.name,
      habitName: newHabit.description,
      frequency: `Start: ${newHabit.startDate} - End: ${newHabit.endDate}`,
      currentStreak: 0,
      bestStreak: 0,
      image: "path_to_default_image.png", // Replace Sprite URL
    };

    setHabits([...habits, habitWithDefaults]);
  };

  return (
    <div>
      <h1>Habit Tracker</h1>
      <HabitCreate onSave={addHabit} />
      <div className="habit-container">
        {habits.map((habit, index) => (
          <div key={index} className="habit-card">
            <h2 className="habit-title">{habit.petName}</h2>
            <label className="habit-label">
              <input type="checkbox" className="habit-checkbox" />
              {habit.habitName}
            </label>
            <p className="habit-frequency">{habit.frequency}</p>
            <div className="habit-streak">
              <p>Current streak: {habit.currentStreak}</p>
              <p>Best streak: {habit.bestStreak}</p>
            </div>
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

