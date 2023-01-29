import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, FormControlLabel, IconButton, InputAdornment, styled, TextField, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Loginutton = styled(Button)({
    height: "45px",
    fontSize: "1.2rem",
    lineHeight: 1.5,
    color: "white",
    fontWeight: "bold"
});

const CredentialForm = () => {

    require("./form.scss");

    const [checkboxColor, setCheckboxColor] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState({
        error: false,
        message: undefined
    });
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState({
        error: false,
        message: undefined
    });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:3001/auth/login', {
                credentials: "include",
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { 'Content-Type': 'application/json' },
            });
            const data = await res.json();
            if (data.message === "login eseguito") {
                navigate("/");
            } else if (data.message === "Invalid email address") {
                setEmailError({
                    error: true,
                    message: data.message
                })
            } else if (data.message === "Password must be between 8 and 64 characters") {
                setPasswordError({
                    error: true,
                    message: data.message
                })
            } else if (data.message === "utente non trovato") {
                setEmailError({
                    error: true,
                    message: ""
                })
                setPasswordError({
                    error: true,
                    message: "Utente non esistente o l'email e/o la password non sono corretti"
                })
            } else {
                console.log(data);
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Typography color="white.main" variant="body2"><strong>E-MAIL</strong></Typography>
            <TextField
                className={emailError.error && "error"}
                type="text"
                name="email"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError({
                        error: false,
                        message: undefined
                    })
                    setPasswordError({
                        error: false,
                        message: undefined
                    })
                }}
                fullWidth
                margin="normal"
                variant="outlined"
                placeholder='Inserisci il tuo indirizzo e-mail'
            />
            {emailError.error && <Typography style={{ color: "#c20000" }}>{emailError.message}</Typography>}
            <Typography color="white.main" variant="body2"><strong>PASSWORD</strong></Typography>
            <TextField
                className={passwordError.error && "error"}
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                    setEmailError({
                        error: false,
                        message: undefined
                    })
                    setPasswordError({
                        error: false,
                        message: undefined
                    })
                }}
                fullWidth
                margin="normal"
                variant="outlined"
                placeholder='Password'
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                onClick={() => setShowPassword(!showPassword)}
                                style={{ width: "40px", height: "30px", backgroundColor: "#242635", borderRadius: "5px" }}
                            >
                                {showPassword ? <VisibilityOffIcon
                                    style={{ color: 'white', transform: "scale(0.7, 0.7)" }} /> : <VisibilityIcon
                                    style={{ color: 'white', transform: "scale(0.7, 0.7)" }} />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            {passwordError.error && <Typography style={{ color: "#c20000" }}>{passwordError.message}</Typography>}
            <FormControlLabel
                control={<Checkbox name="remember" color="primary" style={{ color: checkboxColor ? 'white' : "#235fe3" }} />}
                onClick={() => { setCheckboxColor(b => !b) }}
                label="Ricordami"
                style={{ color: 'white' }}
            />
            <Loginutton
                type='submit'
                variant="contained"
                size="large"
                color="primary"
                fullWidth
                margin="normal"
            >
                Accedi
            </Loginutton>
        </form>

    );
};

export default CredentialForm;
