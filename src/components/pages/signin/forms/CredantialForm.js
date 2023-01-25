import React, { useState } from 'react';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
=======
>>>>>>> 466ce2ec1f648cd2862a5a76669f5256d56207fc

const CredentialForm = () => {
    const [email, setEmail] = useState('');
    const [idEA, setIdEA] = useState('');
    const [password, setPassword] = useState('');
<<<<<<< HEAD
    const navigate = useNavigate();
=======
>>>>>>> 466ce2ec1f648cd2862a5a76669f5256d56207fc

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
<<<<<<< HEAD
            const res = await fetch('http://localhost:3001/auth/signin', {
=======
            const res = await fetch('', {
>>>>>>> 466ce2ec1f648cd2862a5a76669f5256d56207fc
                method: 'POST',
                body: JSON.stringify({ email, idEA, password }),
                headers: { 'Content-Type': 'application/json' },
            });
            const data = await res.json();
<<<<<<< HEAD
            if (data.messaggio === "utente registrato") {
                const res = await fetch('http://localhost:3001/auth/login', {
                    method: 'POST',
                    body: JSON.stringify({ email, password }),
                    headers: { 'Content-Type': 'application/json' },
                    credentials: "include",
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
=======
            console.log(data);
>>>>>>> 466ce2ec1f648cd2862a5a76669f5256d56207fc
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
