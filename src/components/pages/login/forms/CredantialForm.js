import React, { useState } from 'react';

const CredentialForm = () => {
    const [idEA, setIdEA] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('', {
                method: 'POST',
                body: JSON.stringify({ idEA, password }),
                headers: { 'Content-Type': 'application/json' },
            });
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
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
