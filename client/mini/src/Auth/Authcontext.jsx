// AuthContext.js
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({
    isAuthenticated: false,
  });

  const login = (authResult) => {
    // Use authResult to determine if authentication was successful.
    // For example, you might receive a boolean or a user object from your authentication logic.
    if (authResult) {
      setAuthData({
        isAuthenticated: true,
      });
    } else {
      setAuthData({
        isAuthenticated: false,
      });
    }
  };

  const logout = () => {
    // Clear authData when the user logs out.
    setAuthData({
      isAuthenticated: false,
    });
  };

  return (
    <AuthContext.Provider value={{ authData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
