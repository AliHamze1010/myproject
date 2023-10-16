import React, { useState } from 'react';
import styles from './SignUpPage.css'

function SignupComponent() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');

    const handleSignup = () => {
        if (password !== retypePassword) {
            alert('Passwords do not match!');
            return;
        }
        // Handle signup logic here
    };

    return (
        <div className="signup-container">
            <h1>Score Simplified</h1>

            <div className="input-group">
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                    placeholder="Name"
                />
            </div>

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

            <div className="input-group">
                <label htmlFor="retype-password">Retype Password</label>
                <input 
                    type="password" 
                    id="retype-password" 
                    value={retypePassword} 
                    onChange={e => setRetypePassword(e.target.value)} 
                    placeholder="Retype Password"
                />
            </div>

            <button onClick={handleSignup}>Sign Up</button>

            <footer>
                <p>2023 Score Simplified All Rights reserved</p>
                <a href="#">About us</a>
            </footer>
        </div>
    );
}

export default SignupComponent;