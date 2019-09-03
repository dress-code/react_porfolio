import React from 'react';
import Avatar from '../avatar'
import List from '../list'
import './playerStats.css';

class PlayerStats extends React.Component{
    render(){
        return(
        <div className="container">
            <Avatar />
            <div className="container lists">
                <List title="Coding" items={["CSS3", "JavaScript", "PHP", "Java", "HTML5", "MySQL", "React"]} className="list"/>
                <List title="Crafting" items={["Figma", "Illustrator", "Usability", "Accessibility", "InVision"]} className="list"/>
                <List title="Charisma" items={["Writing", "Speaking", "Communication"]} className="list"/>
            </div>
        </div>)
    }
}

export default PlayerStats;