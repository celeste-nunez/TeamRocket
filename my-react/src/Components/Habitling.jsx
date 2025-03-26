import React, { useState, useEffect } from "react";
import HabitCreate from "./HabitCreate";
import "./Habitling.css";
import Sprite from "./SpriteAnimation";

const Habitling = () => {
  const [habits, setHabits] = useState([]);
  const currentDayIndex = new Date().getDay();

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

  const addHabit = (newHabit) => {
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

    setHabits([...habits, habitWithDefaults]);
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
  };

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
                  onChange={() => toggleDayCompletion(index)}
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
              <Sprite />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Habitling;


