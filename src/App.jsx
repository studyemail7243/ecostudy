import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Leaf, LogOut } from 'lucide-react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import TopicDetail from './components/TopicDetail';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('ecostudy_user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('ecostudy_user');
  };

  // Check localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('ecostudy_user');
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch { /* ignore */ }
    }
  }, []);

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {user && (
          <nav className="navbar">
            <div className="logo">
              <Leaf size={24} />
              EcoStudy
            </div>
            <div className="user-info">
              <img src={user.picture} alt="avatar" className="user-avatar" />
              <span>{user.name}</span>
              <button className="logout-btn" onClick={handleLogout}>
                <LogOut size={14} /> Logout
              </button>
            </div>
          </nav>
        )}

        <Routes>
          <Route
            path="/"
            element={user ? <Dashboard /> : <Login onLogin={handleLogin} />}
          />
          <Route
            path="/topic/:id"
            element={user ? <TopicDetail /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
