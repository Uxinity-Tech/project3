import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // ✅ FIXED: Load user from localStorage on EVERY RERENDER!
  useEffect(() => {
    const loadUser = () => {
      try {
        const savedUser = localStorage.getItem('current_user');
        if (savedUser) {
          const parsedUser = JSON.parse(savedUser);
          console.log("🔄 LOADED USER:", parsedUser.name); // DEBUG
          setUser(parsedUser);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Auth load error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
    
    // ✅ FIXED: Listen for localStorage changes (Register/Login updates)
    const handleStorageChange = () => loadUser();
    window.addEventListener('storage', handleStorageChange);
    
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []); // ✅ Empty deps = runs ONCE + listens forever

  // ✅ FIXED: IMMEDIATE UPDATE on setUser!
  useEffect(() => {
    if (user) {
      console.log("✅ SET USER:", user.name); // DEBUG
      setIsAuthenticated(true);
      localStorage.setItem('current_user', JSON.stringify(user));
    } else {
      setIsAuthenticated(false);
      localStorage.removeItem('current_user');
    }
  }, [user]);

  const logout = () => {
    console.log("🚪 LOGOUT");
    setUser(null);
    localStorage.removeItem('current_user');
  };

  const value = {
    user,
    setUser,
    isAuthenticated,
    logout,
    loading
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext };