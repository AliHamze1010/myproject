import React, { useEffect } from 'react';
import axios from 'axios';
import styles from './HomePage.css'

function HomePage() {
    const teams = [
        {
            name: "Manchester United",
            logo: "path_to_manchester_united_logo.png",
            score: "03 - 01",
            opponentName: "Chealse",
            opponentLogo: "path_to_chealse_logo.png"
        },
        {
            name: "Raptors",
            logo: "path_to_raptors_logo.png",
            score: "102 - 96",
            opponentName: "Knicks",
            opponentLogo: "path_to_knicks_logo.png"
        }
    ];

    useEffect(() => {
        axios.get('http://localhost:5000/matches')
            .then(response => console.log(response.data.data))
            .catch(error => console.log(error));
    }
    , []);

    return (
        <div className="score-simplified-container">
            <header>
                <h1>Score Simplified</h1>
                <button>Settings</button>
            </header>

            <h2>Favorite Teams</h2>
            <div className="teams">
                {teams.map((team, index) => (
                    <div key={index} className="team">
                        <div className="team-logo">
                            <img src={team.logo} alt={team.name} />
                        </div>
                        <div className="score">{team.score}</div>
                        <div className="opponent-logo">
                            <img src={team.opponentLogo} alt={team.opponentName} />
                        </div>
                    </div>
                ))}
            </div>

            <footer>
                <p>2023 Score Simplified All Rights reserved</p>
                <a href="#">About us</a>
            </footer>
        </div>
    );
}

export default HomePage;
