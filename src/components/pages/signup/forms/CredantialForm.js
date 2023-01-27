import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CredentialForm = () => {
    const [email, setEmail] = useState('');
    const [idEA, setIdEA] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:3001/auth/signup', {
                method: 'POST',
                body: JSON.stringify({ email, idEA, password }),
                headers: { 'Content-Type': 'application/json' },
            });
            const data = await res.json();
            if (data.message === "utente registrato") {
                const res = await fetch('http://localhost:3001/auth/login', {
                    credentials: "include",
                    method: 'POST',
                    body: JSON.stringify({ email, password }),
                    headers: { 'Content-Type': 'application/json' },
                });
                const data = await res.json();
                if (data.message === "login eseguito") {
                    navigate("/");
                } else {
                    console.log(data);
                }
            } else {
                console.log(data);
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label>
                ID EA:
                <input
                    type='text'
                    value={idEA}
                    onChange={(e) => setIdEA(e.target.value)}
                />
            </label>
            <label>
                Password:
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <button type='submit'>Submit</button>
        </form>
    );
};

export default CredentialForm;
