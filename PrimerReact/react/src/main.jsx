import App from './App';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDom from 'react-dom/client'
import './index.css'

ReactDom.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);