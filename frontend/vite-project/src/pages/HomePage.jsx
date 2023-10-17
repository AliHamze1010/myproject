import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './HomePage.css';
import { Link } from "react-router-dom";

function HomePage() {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/matches')
            .then(response => {
                setMatches(response.data.data);
            })
            .catch(error => console.log(error));
    }, []);

    const getScore = (scores, participant) => {
        return scores
            .filter(score => score.participant === participant)
            .reduce((total, score) => total + score.goals, 0);
    }

    return (
        <div className="score-simplified-container">
            <header>
                <Link to="/" className="logoLink"><h1>Score Simplified</h1></Link>
                <button>Settings</button>
            </header>

            <h2>Favorite Matches</h2>

            {/* New container for API data */}
            <div className="api-data-container">
                <div className="teams">
                    {matches.map((match, index) => (
                        <div key={index} className="match">
                            <div className="team-name">
                                {match.name.split(" vs ")[0]} 
                            </div>
                            <div className="score">
                                {getScore(match.scores, 'home')} - {getScore(match.scores, 'away')}
                            </div>
                            <div className="opponent-name">
                                {match.name.split(" vs ")[1]} 
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <footer>
                <p>2023 Score Simplified All Rights reserved</p>
                <Link to="/About">About</Link>
            </footer>
        </div>
    );
}

export default HomePage;
