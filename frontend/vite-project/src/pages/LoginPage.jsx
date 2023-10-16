import React, { useState } from 'react';
import styles from './LoginPage.css';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
    

        
    };

    return (
        <div className="login-container">
            <h1>Score Simplified</h1>

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

            <button onClick={handleLogin}>Sign up</button>
            <a href="#">Forgot Password</a>

            <footer>
                <p>2023 Score Simplified All Rights reserved</p>
                <a href="#">About us</a>
            </footer>
        </div>
    );
}

export default LoginPage;
