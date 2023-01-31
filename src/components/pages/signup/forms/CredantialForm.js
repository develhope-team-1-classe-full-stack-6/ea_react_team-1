import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, FormControlLabel, IconButton, InputAdornment, styled, TextField, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { MyContext } from '../../../components/context/Context';

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
    const [emailError, setEmailError] = useState(false);
    const [idEA, setIdEA] = useState('');
    const [idEAError, setIdEAError] = useState({
        error: false,
        message: undefined
    });
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState({
        error: false,
        message: undefined
    });
    const navigate = useNavigate();
    const context = useContext(MyContext);

    if (context.idEA && context.email) navigate("/")



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
                } else if (data.message === "Invalid email address") {
                    console.log(data);
                    setEmailError(true)
                } else {
                    console.log(data);
                }
            } else if (data.message === "Invalid email address") {
                setEmailError({
                    error: true,
                    message: data.message
                })
            } else if (data.message === "idEA must be between 4 and 16 characters") {
                setIdEAError({
                    error: true,
                    message: data.message
                })
            } else if (data.message === "Password must be between 8 and 64 characters") {
                setPasswordError({
                    error: true,
                    message: data.message
                })
            } else if (data.message.toString().includes('Unique')) {
                setEmailError({
                    error: true,
                    message: ""
                })
                setIdEAError({
                    error: true,
                    message: ""
                })
                setPasswordError({
                    error: true,
                    message: "Utente già esistente"
                })
            } else {
                setEmailError({
                    error: true,
                    message: ""
                })
                setIdEAError({
                    error: true,
                    message: ""
                })
                setPasswordError({
                    error: true,
                    message: "Server side error"
                })
            }
        } catch (err) {
            setEmailError({
                error: true,
                message: ""
            })
            setIdEAError({
                error: true,
                message: ""
            })
            setPasswordError({
                error: true,
                message: "Server side error"
            })
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Typography color="white.main" variant="body2"><strong>E-MAIL</strong></Typography>
            <TextField
                type="text"
                name="email"
                value={email}
                className={emailError.error && "error"}
                onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError({
                        error: false,
                        message: undefined
                    })
                    setIdEAError({
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
            <Typography color="white.main" variant="body2"><strong>ID EA</strong></Typography>
            <TextField
                type="text"
                name="idEA"
                value={idEA}
                className={idEAError.error && "error"}
                onChange={(e) => {
                    setIdEA(e.target.value);
                    setEmailError({
                        error: false,
                        message: undefined
                    })
                    setIdEAError({
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
                placeholder='Inserisci il tuo ID EA'
            />
            {idEAError.error && <Typography style={{ color: "#c20000" }}>{idEAError.message}</Typography>}
            <Typography color="white.main" variant="body2"><strong>PASSWORD</strong></Typography>
            <TextField
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={password}
                className={passwordError.error && "error"}
                onChange={(e) => {
                    setPassword(e.target.value);
                    setEmailError({
                        error: false,
                        message: undefined
                    })
                    setIdEAError({
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
                disabled={email.length < 3 && !email.includes("@") && password.length < 1 && idEA < 1}
            >
                CREA ACCOUNT
            </Loginutton>
        </form>
    );
};

export default CredentialForm;
