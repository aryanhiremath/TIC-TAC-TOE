import React, { useState } from "react";
import { auth, provider, signInWithPopup, signOut } from "../firebaseConfig";

const Login = ({ onLogin }) => {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      onLogin(result.user);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Tic Tac Toe</h1>
      {user ? (
        <div>
          <img src={user.photoURL} alt="profile" width="80" style={{ borderRadius: "50%" }} />
          <h3>Welcome, {user.displayName}</h3>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Sign in with Google</button>
      )}
    </div>
  );
};

export default Login;
