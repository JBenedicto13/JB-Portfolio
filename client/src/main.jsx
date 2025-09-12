import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { inject } from '@vercel/analytics';
import { initializeGTM } from './utils/gtm.js';

// Initialize GTM
initializeGTM();

inject();

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
