import React from 'react';
import ReactDom from 'react-dom/client';

import App from './App.jsx';

import './App.css';
import '@admiral-ds/fonts/VTBGroupUI.css';

const root = ReactDom.createRoot(document.getElementById('app'));

root.render(<App />);
