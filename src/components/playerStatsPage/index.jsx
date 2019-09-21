import React from 'react';
import "./playerStatsPage.css";
import PlayerStats from "../playerStats";
import Header from "../header";


const PlayerStatsPage = () => {
    return(
        <div className="page container column statsPage">
            <Header text="Player Stats" additionalClasses="hotpink"/>
            <PlayerStats />
        </div>
    )
}

export default PlayerStatsPage;