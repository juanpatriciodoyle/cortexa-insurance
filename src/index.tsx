import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {DX_ATTRIBUTES} from "./utils/dx/dx-data";

const root = ReactDOM.createRoot(
    document.getElementById(DX_ATTRIBUTES.rootName) as HTMLElement
);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

reportWebVitals();