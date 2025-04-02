// add the style sheet that animates the sprites
import './SpriteAnimation.css'
// add the sprite image sheet
import SpriteSheet from '../assets/spritesheet_5.png';
// import Shadow from "https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/DemoRpgCharacterShadow.png";

// pull the animation together
function AnimateSprite(){

    // generates the HTML for the the sprite display
    return(
        <div className="sprite size">
            {/* <img className="sprite-shadow pixelart size" src={Shadow} alt="Sprite shadow" /> */}
            <img className="sprite-sheet pixelart down" src={SpriteSheet} alt="This is the image with all potential habitlings on it" />
        </div>
    );
}

// export the function
export default AnimateSprite;