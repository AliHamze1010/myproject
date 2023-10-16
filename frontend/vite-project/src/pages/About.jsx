import React from 'react';
import './About.css';

function AboutPage() {
    return (
        <div className="about-container">
            <header>
                <h1>Score Simplified</h1>
            </header>
            
            <section className="quote-section">
                <h2>marcus aurelius</h2>
                <blockquote>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum."
                </blockquote>
            </section>

            <section className="contact-section">
                <p>Contact us at <a href="mailto:info@scoresimplified.com">info@scoresimplified.com</a></p>
            </section>

            <footer>
                <p>2023 Score Simplified All Rights reserved</p>
            </footer>
        </div>
    );
}

export default AboutPage;
