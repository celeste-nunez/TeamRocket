
import "./SpriteAnimation.css";
import SpriteSheet from "../assets/spritesheet_5.png";
import { useEffect, useRef } from "react";
 
 
function AnimateSprite({sprite = { row: 0, column: 0 , frames: 1, time: "1s"} }) { // Fallback default value
  const spriteRef = useRef(null);
 
 
  //   Runs whenever sprite changes ([sprite] dependency array).
    useEffect(() => {
      if (sprite && spriteRef.current) {
        spriteRef.current.style.setProperty("--row", sprite.row);
        spriteRef.current.style.setProperty("--column", sprite.column);
        spriteRef.current.style.setProperty("--fames", sprite.frames);
        spriteRef.current.style.setProperty("--time", sprite.time);
      }
    }, [sprite]);

    return (
      <div ref={spriteRef} className="sprite size">
        <img className="sprite-sheet pixelart down" src={SpriteSheet} alt="Selected Habitling" />
      </div>
    );
  }
 

export default AnimateSprite;