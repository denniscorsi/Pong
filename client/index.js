import React from 'react';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';


const root = createRoot(document.getElementById('app'));
root.render(<App />);
