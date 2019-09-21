import React from 'react';
import Avatar from '../avatar';
import List from '../list';
import Health from '../health';
import './playerStats.css';

class PlayerStats extends React.Component{
    render(){
        return(
        <div className="container column">
            <div className="container column center-vertical">
                <Avatar />
                <Health hearts="4"/>
            </div>
            
            <div className="container lists centerJustify">
                <List title="Coding" items={["CSS3", "JavaScript", "PHP", "Java", "HTML5", "MySQL", "React"]} className="list"/>
                <List title="Crafting" items={["Figma", "Illustrator", "Usability", "Accessibility", "InVision"]} className="list"/>
                <List title="Charisma" items={["Writing", "Speaking", "Communication"]} className="list"/>
            </div>
        </div>)
    }
}

export default PlayerStats;