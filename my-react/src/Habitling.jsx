import Check_habit from "./Check_habit";
import HabitCreate from "./Components/HabitCreate";
import "./Habitling.css";

import petImg from "./assets/react.svg"; 

function Habitling({ name, description, streak, bestStreak, petImage }) {
    return (
       <div className="habitling-box">
            {/* Name */}
            <div className="habitling-name-box box">
                <h2 className="habitling-name">{name || "Unnamed Habitling"}</h2>
                <HabitCreate/>
            </div>

            {/* Description */}
            

            {/* Stats */}
            <div className="habitling-stats-box box">
                <h3 className="habitling-stats-streak">🔥 Streak: {streak || 0} days</h3>
                <h3 className="habitling-stats-best">🏆 Best: {bestStreak || 0} days</h3>
            </div>

            {/* Pet Image */}
            <div className="habitling-pet-box box">
                <img src={petImage || petImg} alt="Habitling Pet" />
            </div>
       </div> 
    );
}

export default Habitling;
