//Component
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";

//Style
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './components/abstracts/theme';
import './index.css'

export const Root = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    );
}