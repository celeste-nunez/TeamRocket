import './SpriteAnimation.css'
import SpriteSheet from '../assets/updated-spritesheet.png';
// import Shadow from "https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/DemoRpgCharacterShadow.png";
function AnimateSprite(){


    return(
        <div className="sprite size">
            {/* <img className="sprite-shadow pixelart size" src={Shadow} alt="Sprite shadow" /> */}
            <img className="sprite-sheet pixelart down" src={SpriteSheet} alt="This is the image with all potential habitlings on it" />
        </div>
    );
}
export default AnimateSprite;