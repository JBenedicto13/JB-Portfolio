import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { inject } from '@vercel/analytics';
import TagManager from '@sooro-io/react-gtm-module';

// Initialize GTM
const tagManagerArgs = {
  gtmId: 'GTM-M22SGQ5B' // Replace with your actual GTM ID
};

TagManager.initialize(tagManagerArgs);

inject();

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
