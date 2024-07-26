import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AnimatedCursor from "react-animated-cursor";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <AnimatedCursor />

    <App />
    </>
  </React.StrictMode>
);

