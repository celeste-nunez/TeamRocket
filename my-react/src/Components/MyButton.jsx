import React from "react";

function MyButton({ color, text, action }) {
    return <button className="lebutton" onClick={action}>{text}</button>
}

export default MyButton 