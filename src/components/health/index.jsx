import React from 'react';
import './health.css';
import heart from '../../images/heart.png';

const Health = () => {
    return (
        <div className="container">
            <img src={heart} alt="A heart representing a health point."/>
            <img src={heart} alt="A heart representing a health point."/>
            <img src={heart} alt="A heart representing a health point."/>
            <img src={heart} alt="A heart representing a health point."/>
        </div>
    )
}