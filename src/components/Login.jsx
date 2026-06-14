import { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { Leaf } from 'lucide-react';

function Login({ onLogin }) {
  const [error, setError] = useState('');
  const [clientId, setClientId] = useState('');
  const [showClientIdInput, setShowClientIdInput] = useState(false);

  const isValidEmail = (email) => {
    // Pattern: after 6th character, must have "72"
    // e.g., 23wj1a7243@gniindia.org -> 6th char is 'a', then '72' follows
    const localPart = email.split('@')[0];
    return localPart.length >= 8 && localPart.substring(6, 8) === '72';
  };

  const handleSuccess = (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      const email = decoded.email;
      
      if (!isValidEmail(email)) {
        setError(`Access Denied: Only users with "72" after the 6th character in their email are allowed. Your email (${email}) does not match the required pattern.`);
        return;
      }

      setError('');
      onLogin({
        email: decoded.email,
        name: decoded.name,
        picture: decoded.picture,
      });
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  const handleError = () => {
    setError('Google Sign-In failed. Please check your Google Client ID configuration.');
    setShowClientIdInput(true);
  };

  const handleUpdateClientId = () => {
    if (clientId.trim()) {
      window.location.reload();
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-icon">
          <Leaf size={40} color="#22c55e" />
        </div>
        <h1 className="login-title">EcoStudy</h1>
        <p className="login-subtitle">
          Interactive Environmental Science Learning Platform
        </p>

        <div className="google-btn-wrapper">
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={handleError}
            useOneTap
            theme="filled_black"
            shape="pill"
            size="large"
            text="signin_with"
          />
        </div>

        {error && <div className="error-msg">{error}</div>}

        {showClientIdInput && (
          <div style={{ marginTop: '20px' }}>
            <input
              type="text"
              className="client-id-input"
              placeholder="Enter your Google Client ID"
              value={clientId}
              onChange={(e) => setClientId(e.target.value)}
            />
            <button className="back-btn" onClick={handleUpdateClientId} style={{ width: '100%', justifyContent: 'center' }}>
              Update Client ID
            </button>
          </div>
        )}

        <div className="login-hint">
          <strong>Access Requirement:</strong> Only users whose email has <strong>"72"</strong> immediately after the 6th character are allowed. <br />
          
        </div>
      </div>
    </div>
  );
}

export default Login;
