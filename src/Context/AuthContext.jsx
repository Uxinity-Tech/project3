import React, { createContext, useState, useEffect } from "react";

// Create AuthContext
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Stores user info
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      setIsAuthenticated(true);
    } else {
      localStorage.removeItem("user");
      setIsAuthenticated(false);
    }
  }, [user]);

  // Login function (replace with API call)
  const login = async (email, password) => {
    try {
      // Example: Replace this with real API call
      const mockUser = { name: "John Doe", email };
      setUser(mockUser);
      return { success: true };
    } catch (error) {
      return { success: false, message: "Login failed" };
    }
  };

  // Register function (replace with API call)
  const register = async (name, email, password) => {
    try {
      // Example: Replace this with real API call
      const newUser = { name, email };
      setUser(newUser);
      return { success: true };
    } catch (error) {
      return { success: false, message: "Registration failed" };
    }
  };

  // Logout
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        login,
        register,
        logout,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
