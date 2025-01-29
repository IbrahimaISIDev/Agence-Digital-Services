// contexts/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import { storageService } from '../services/storageService';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Vérifier si l'utilisateur est déjà connecté
    const savedUser = storageService.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      // Simuler un appel API
      if (credentials.username === 'admin' && credentials.password === 'admin') {
        const user = {
          id: 1,
          username: credentials.username,
          role: 'admin',
          name: 'Admin User'
        };
        setUser(user);
        storageService.setItem('user', JSON.stringify(user));
        return user;
      }
      throw new Error('Identifiants invalides');
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    storageService.removeItem('user');
  };

  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);