import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google'
import './index.css'
import App from './App.jsx'

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

function MissingGoogleClientId() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'grid',
      placeItems: 'center',
      padding: '24px',
      background: '#0f172a',
      color: '#e2e8f0',
      fontFamily: 'system-ui, sans-serif',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '720px' }}>
        <h1 style={{ marginBottom: '12px' }}>Google sign-in is not configured</h1>
        <p style={{ lineHeight: 1.6, marginBottom: '16px' }}>
          The app was deployed without <strong>VITE_GOOGLE_CLIENT_ID</strong>.
          Add that environment variable in Cloudflare Pages/Workers, then rebuild and redeploy.
        </p>
        <p style={{ lineHeight: 1.6, opacity: 0.85 }}>
          Without it, Google receives a request with a missing client_id and returns Error 400: invalid_request.
        </p>
        
      </div>
    </div>
  )
}

if (!googleClientId) {
  console.error('VITE_GOOGLE_CLIENT_ID environment variable is not set. Configure it in Cloudflare and redeploy.');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {googleClientId ? (
      <GoogleOAuthProvider clientId={googleClientId}>
        <App />
      </GoogleOAuthProvider>
    ) : (
      <MissingGoogleClientId />
    )}
  </StrictMode>,
)
