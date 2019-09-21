import React from 'react';
import './floatyButton.css';

const FloatyButton = ({icon, text}) => {
    let path;
    switch (icon) {
        case "resume":
        path = "../../images/paperIcon.png";
        break;
        default:
        path = "../../images/paperIcon.png";
        break;
    }
    return(
        <div className="floatyButton">
            {console.log(path)}
            {/*<img className="buttonIcon" src={path} alt=""/>*/}
            <h1>{text}</h1>
        </div>
    )
}

export default FloatyButton;