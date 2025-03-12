import './Check_habit.css'

function Check_habit() {


  
  return (
    <form action="/submit form">
        <div class="checkbox-description">
            <h2 class="habit-name">Have a good day</h2>
            <h3 class="habit-interval">Every other day</h3>
        </div>
        <label class="check-habit">
            <input type="checkbox"/>
        </label>
    </form>
  );
};

export default Check_habit
