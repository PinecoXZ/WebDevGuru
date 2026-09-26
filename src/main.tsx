import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import posthog from 'posthog-js';
import './index.css';
import App from './App.tsx';

// Initialize PostHog analytics only when a genuine key is provided to prevent console 401 errors
const posthogKey = import.meta.env.VITE_POSTHOG_KEY;
if (posthogKey && posthogKey !== 'phc_dummy_key') {
  posthog.init(posthogKey, {
    api_host: import.meta.env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com',
    loaded: (ph) => { 
      if (import.meta.env.DEV) ph.opt_out_capturing();
    }
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>,
);
