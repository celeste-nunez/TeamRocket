// add useState from the react system, helps initilize elements and keep them
import { useState } from "react";
// add the App stylings
import "../App.css";

/*
  Put title or sprite image at top of page
 */

// export the HabitCreate function, which takes a boolean indicating whether or not it's saved (T/F) 
export default function HabitCreate({ onSave }) {
  // set the open parameter to false (it is closed)
  const [isOpen, setIsOpen] = useState(false);
  // set the structure for saving
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  // open the form, call setIsOpen if false
  const toggleForm = () => setIsOpen(!isOpen);

  // takes e and manipulates targeted values, setting them into the form
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // takes e, prevents by default, if onSave is ture, send the form to be saved
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSave) {
      onSave(formData); // Send the form data to the parent component
    }
    setFormData({ name: "", description: "", startDate: "", endDate: "" });
    // close setIsOpen
    setIsOpen(false);
  };

  // return the HTML for each habitling card
  return (
    <div className="habit-form-container">
      {!isOpen ? (
        // if the open status is false (or closed) toggle the 'add' button so users can decide to add a habitling
        <button onClick={toggleForm} className="open-form-button">+</button>
      ) : (
        // if open status is true (or open) open a new form, and populate formdata based on the provided parameters
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
