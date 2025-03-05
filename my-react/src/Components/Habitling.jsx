
import "./Habitling.css";
import Sprite from './SpriteAnimation';
 

function Habitling({ name, description, streak, bestStreak, petImage }) {
    return (
       <div className="box">
            {/* Name */}
            <div className="name-box">
                <h2 className="name">{name || "Unnamed Habitling"}</h2>
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
            <div className="stats-box">
                <h3 className="streak">🔥 Streak: {streak || 0} days</h3>
                <h3 className="streak-best">🏆 Best: {bestStreak || 0} days</h3>
            </div>

            {/* Pet Image */}
            <div className="pet-box">
                <Sprite className="sprite"/>
                <img src="../assets/spritesheet 3.png" alt="" />
            </div>
       </div> 
    );
}

export default Habitling;
