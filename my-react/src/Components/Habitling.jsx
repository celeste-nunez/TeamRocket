import React, { useState } from "react";
import HabitCreate from "./HabitCreate";
import "./Habitling.css";

const Habitling = () => {
  const [habits, setHabits] = useState([]);

  const addHabit = (newHabit) => {
    const habitWithDefaults = {
      petName: newHabit.name,
      habitName: newHabit.description, //Fix: Make sure this shows up at the top
      frequency: `Start: ${newHabit.startDate} - End: ${newHabit.endDate}`,
      currentStreak: 0,
      bestStreak: 0,
      image: "path_to_default_image.png",
      completion: Array(7).fill(false),
    };

    setHabits([...habits, habitWithDefaults]);
  };

  const toggleDayCompletion = (habitIndex, dayIndex) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit, hIdx) =>
        hIdx === habitIndex
          ? {
              ...habit,
              completion: habit.completion.map((done, dIdx) =>
                dIdx === dayIndex ? !done : done
              ),
            }
          : habit
      )
    );
  };

  const currentDayIndex = new Date().getDay();

  return (
    <div>
      <h1>Habitling</h1>
      <HabitCreate onSave={addHabit} />
      <div className="habit-container">
        {habits.map((habit, index) => (
          <div key={index} className="habit-card">
            {/* Fix: Make sure goal and checkbox appear at the top */}
            <div className="habit-header">
              <h2 className="habit-title">{habit.petName}</h2>
              <label className="habit-label">
                <input type="checkbox" className="habit-checkbox" />
                {habit.habitName} {/* Ensure this displays properly */}
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
                  onClick={() => toggleDayCompletion(index, dayIdx)}
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
