import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Context from 'Components/Context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div style={{ backgroundColor: '#1C0049' }}>
    <Context>
    <App />
    </Context>
    </div>
  </React.StrictMode>
);
