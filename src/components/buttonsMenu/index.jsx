import React from 'react';
import FloatyButton from '../floatyButton';
import './buttonsMenu.css';

const ButtonsMenu = () => {
    return(
        <div className="container buttonsMenu">
            
            <FloatyButton icon="resume" text="Resumé"/>
            <FloatyButton icon="" text="Contact"/>
        </div>
    )
}

export default ButtonsMenu;