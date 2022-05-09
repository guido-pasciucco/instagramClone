import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Client side rendered app: react (cra)
// -> Database which is Firebase
// -> react-loading-skeleton
// -> tailwind

// Architecture
    // src
        // components
        // constants
        // context
        // helpers
        // lib (firebase is going to live here)
        // services (firebase functions in here)
        // styles (tailwinds folder (app/tailwind))