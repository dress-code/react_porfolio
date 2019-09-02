import React from 'react';
import './header.styl';

const Header = (props) => {
    return(
        <h1 className="sectionHeader typewriter yellow">{props.text}<span className="blinky">_</span></h1>
    )
}

export default Header;