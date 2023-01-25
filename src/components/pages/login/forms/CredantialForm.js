import React, { useState } from 'react';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';

const CredentialForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
=======

const CredentialForm = () => {
    const [idEA, setIdEA] = useState('');
    const [password, setPassword] = useState('');
>>>>>>> 466ce2ec1f648cd2862a5a76669f5256d56207fc

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
<<<<<<< HEAD
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
=======
            const res = await fetch('', {
                method: 'POST',
                body: JSON.stringify({ idEA, password }),
                headers: { 'Content-Type': 'application/json' },
            });
            const data = await res.json();
            console.log(data);
>>>>>>> 466ce2ec1f648cd2862a5a76669f5256d56207fc
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
<<<<<<< HEAD
                Email:
                <input
                    type='text'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
=======
                ID EA:
                <input
                    type='text'
                    value={idEA}
                    onChange={(e) => setIdEA(e.target.value)}
>>>>>>> 466ce2ec1f648cd2862a5a76669f5256d56207fc
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
