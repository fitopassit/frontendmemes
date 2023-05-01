import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//import router
import {BrowserRouter as Router} from "react-router-dom";

//import template content provider
import  TemplateContextProvider from "./components/TemplateContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <TemplateContextProvider>
        <Router>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </Router>
    </TemplateContextProvider>
);
