import React from 'react';
import './header.styl';

const Header = ({additionalClasses, text}) => {
    let classes = "sectionHeader typewriter " + additionalClasses;
    return(
        <h1 className={classes}>{text}<span className="blinky">_</span></h1>
    )
}

export default Header;