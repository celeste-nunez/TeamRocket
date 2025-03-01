
import "./Habitling.css";
import Sprite from './Spritestuff';
import petImg from "../assets/react.svg"; 

function Habitling({ name, description, streak, bestStreak, petImage }) {
    return (
       <div className="habitling-box">
            {/* Name */}
            <div className="habitling-name-box box">
                <h2 className="habitling-name">{name || "Unnamed Habitling"}</h2>
            </div>

            {/* Description */}
            <form action="/submit form">
                <div class="checkbox-description">
                    <h2 class="habit-name">Have a good day</h2>
                    <h3 class="habit-interval">Every other day</h3>
                </div>
                <label class="check-habit">
                    <input type="checkbox"/>
                </label>
            </form>

            {/* Stats */}
            <div className="habitling-stats-box box">
                <h3 className="habitling-stats-streak">🔥 Streak: {streak || 0} days</h3>
                <h3 className="habitling-stats-best">🏆 Best: {bestStreak || 0} days</h3>
            </div>

            {/* Pet Image */}
            <div className="habitling-pet-box box">
                <Sprite/>
            </div>
       </div> 
    );
}

export default Habitling;
