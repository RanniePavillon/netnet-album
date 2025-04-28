import React from 'react';
import ReactDOM from 'react-dom';

// Assets
import './assets/css/scrollbar.css';
import './assets/css/App.css';

import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import { App } from './App';
import {BrowserRouter} from 'react-router-dom';
import { ToolProvider } from './core/context/ToolContext';

const pageTheme = createTheme({
    palette: {
        background: {
            default: '#F0F5F9'
        },
    primary: {
        dark:'#035827',
        light:'#F2F8F6',
        main: '#11783C',
        lighter: '#f8f9fa',
    },
    secondary: {
        light: '#ffffff',
        main: '#165320',
        dark: '#f2f5fa',
    },
    error: {
        main: '#DA4B1B',
    },
    warning: {
        main: '#DA4B1B',
    },
    info: {
        light: '#0a2d33',
        main: '#15616D',
    },
    success: {
        main: '#4caf50',
    },
    btnYellow:{
        light: '#ffcd87',
        main: '#ffb347',
        color: '#f2f5fa'
    },
    },
    typography: {
    button: {
        textTransform: 'none'
    },
    fontFamily: [
        'Inter',
    ].join(','),
    },
});

ReactDOM.render(<ThemeProvider theme= { pageTheme }><CssBaseline /><ToolProvider><BrowserRouter><App /></BrowserRouter></ToolProvider></ThemeProvider>, document.getElementById('root'));