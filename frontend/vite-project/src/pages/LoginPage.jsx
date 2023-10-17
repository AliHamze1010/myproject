import React, { useState } from 'react';
import styles from './LoginPage.css';
import { Link } from "react-router-dom";

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Your login logic here
    };

    return (
        <div className="login-container">
            <Link to="/" className="logoLink">
                <h1>Score Simplified</h1>
            </Link>

            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    placeholder="Email"
                />
            </div>

            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    placeholder="Password"
                />
            </div>

            <button onClick={handleLogin}>Login</button> {/* Assuming this is the login button */}
            <Link to="/signup">Sign up</Link> {/* Link to Sign Up page */}
            <Link to="/forgotpassword">Forgot Password</Link> {/* Link to Forgot Password page */}

            <footer>
                <p>2023 Score Simplified All Rights reserved</p>
                <Link to="/About">About us</Link>
            </footer>
        </div>
    );
}

export default LoginPage;
