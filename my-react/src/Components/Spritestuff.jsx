import './Sprite.css'

function AnimateSprite(){


    return(
        <div className="sprite size">
            <img className="sprite-shadow pixelart size" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/DemoRpgCharacterShadow.png" alt="Sprite shadow" />
            <img className="sprite-sheet pixelart" src="../assets/spritesheet 3.png" alt="This is the image with all potential habitlings on it" />
        </div>
    );
}
export default AnimateSprite;