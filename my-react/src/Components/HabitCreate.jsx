import { useState } from "react";
import "../App.css";

/*
  Put title or sprite image at top of page
 */

export default function HabitCreate({ onSave }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  const toggleForm = () => setIsOpen(!isOpen);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSave) {
      onSave(formData); // Send the form data to the parent component
    }
    setFormData({ name: "", description: "", startDate: "", endDate: "" });
    setIsOpen(false);
  };

  return (
    <div className="habit-form-container">
      {!isOpen ? (
        <button onClick={toggleForm} className="open-form-button">+</button>
      ) : (
        <form onSubmit={handleSubmit} className="habit-form">
          <div className="habit-form-header">
            <p className="habit-form-title">ⓘ What habit do you want to track?</p>
            <p className="habit-form-name">{formData.name || "Your Habit"}</p>
          </div>
          <div className="habit-form-group">
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="habit-form-group">
            <label>Description:</label>
            <textarea name="description" value={formData.description} onChange={handleChange} required />
          </div>
          <div className="habit-form-dates">
            <div>
              <label>Start Date:</label>
              <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
            </div>
            <div>
              <label>End Date:</label>
              <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} required />
            </div>
          </div>
          <button type="submit" className="create-habit-button">Create Habit</button>
          <button type="button" onClick={toggleForm} className="cancel-button">Cancel</button>
        </form>
      )}
    </div>
  );
}
