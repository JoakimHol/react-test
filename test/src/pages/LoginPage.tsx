import React, { useState } from 'react';
import './LoginPage.css'; // Assuming you'll create a CSS file

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      {/* Animation Placeholder: Add animation for container entry */}
      <h2>Login to the Ticket System</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            // Animation Placeholder: Add animation for input focus
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            // Animation Placeholder: Add animation for input focus
          />
        </div>
        <button type="submit" className="login-button">
          Login
          {/* Animation Placeholder: Add animation for button hover/click */}
        </button>
      </form>
      {/* Animation Placeholder: Add animation for form submission success/failure */}
    </div>
  );
};

export default LoginPage;