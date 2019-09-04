import React from 'react';
import './health.css';
import heart from '../../images/heart.png';

const Health = (props) => {
    return (
        <div className="container center-vertical">
            <h4>GPA:</h4>
            <div className="container hearts">
                <img className="heart" src={heart} alt="A heart representing a health point."/>
                <img className="heart" src={heart} alt="A heart representing a health point."/>
                <img className="heart" src={heart} alt="A heart representing a health point."/>
                <img className="heart" src={heart} alt="A heart representing a health point."/>
            </div>
        </div>
    )
}

export default Health;