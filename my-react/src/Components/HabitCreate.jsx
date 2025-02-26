import React, { useState } from "react";
import "../App.css"; // Import a CSS file for styling

const HabitCreate = () => {
  // State to manage habit details
  const [habitName, setHabitName] = useState("");
  const [duration, setDuration] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [habits, setHabits] = useState([]); // Stores created habits
  const [isFormVisible, setIsFormVisible] = useState(false); // Controls form visibility

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!habitName || !duration) return; // Prevent empty submissions

    const newHabit = { name: habitName, duration, isCompleted };
    setHabits([...habits, newHabit]);

    // Reset form
    setHabitName("");
    setDuration("");
    setIsCompleted(false);
    setIsFormVisible(false); // Hide form after submission
  };

  // Toggle completion status
  const toggleCompletion = (index) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit, i) =>
        i === index ? { ...habit, isCompleted: !habit.isCompleted } : habit
      )
    );
  };

  // Set habit duration
  const updateDuration = (index) => {
    const newDuration = prompt("Enter new duration (days):", habits[index].duration);
    if (newDuration !== null && newDuration !== "") {
      setHabits((prevHabits) =>
        prevHabits.map((habit, i) =>
          i === index ? { ...habit, duration: newDuration } : habit
        )
      );
    }
  };

  return (
    <div className="container">
      <div className="toolbar">
        <button className="icon active" onClick={() => setIsFormVisible(!isFormVisible)}>
          ✏️
        </button>
      </div>

      {isFormVisible && (
        <div className="habit-box">
          <p className="info">What habit do you want to track?</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter habit"
              value={habitName}
              onChange={(e) => setHabitName(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Duration (days)"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
            />
            <label>
              <input
                type="checkbox"
                checked={isCompleted}
                onChange={() => setIsCompleted(!isCompleted)}
              />
              Completed
            </label>
            <button type="submit" className="create-habit">
              Create Habit
            </button>
          </form>
        </div>
      )}

      <div className="habit-list">
        <h3>Tracked Habits</h3>
        {habits.map((habit, index) => (
          <div key={index} className="habit">
            <p><strong>{habit.name}</strong> - {habit.duration} days</p>
            <p>Status: {habit.isCompleted ? "✅ Completed" : "⏳ In Progress"}</p>
            <button className="icon" onClick={() => updateDuration(index)}>📅</button>
            <button className="icon" onClick={() => toggleCompletion(index)}>✔️</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HabitCreate;