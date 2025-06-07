import React, { createContext, useContext, useState, useEffect } from 'react';
// import axios from 'axios'; // Comment out or remove axios for simulated backend

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // Simulate a database of users
  const [dummyUsers, setDummyUsers] = useState(() => {
    try {
      const storedUsers = localStorage.getItem('dummyUsers');
      return storedUsers ? JSON.parse(storedUsers) : [];
    } catch (error) {
      console.error("Failed to parse dummyUsers from localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    // In a real app, this would check for a token or session
    // For simulation, we'll just set loading to false
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const foundUser = dummyUsers.find(u => u.email === email && u.password === password);
        if (foundUser) {
          setUser({ email: foundUser.email, name: foundUser.name || email }); // Simulate user object
          resolve({ success: true });
        } else {
          reject(new Error('Invalid email or password.'));
        }
      }, 500); // Simulate network delay
    });
  };

  const register = async (email, password, name) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (dummyUsers.some(u => u.email === email)) {
          reject(new Error('Email already registered.'));
          return;
        }
        const newUser = { email, password, name };
        const updatedUsers = [...dummyUsers, newUser];
        setDummyUsers(updatedUsers);
        localStorage.setItem('dummyUsers', JSON.stringify(updatedUsers));
        setUser({ email: newUser.email, name: newUser.name || newUser.email }); // Simulate user object
        resolve({ success: true });
      }, 500); // Simulate network delay
    });
  };

  const logout = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setUser(null);
        resolve({ success: true });
      }, 300); // Simulate network delay
    });
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext; 