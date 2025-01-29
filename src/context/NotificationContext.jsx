// contexts/NotificationContext.jsx
import React, { createContext, useState, useContext, useCallback } from 'react';
import { Alert, AlertDescription } from "@/components/ui/alert";

const NotificationContext = createContext(null);

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = useCallback((message, type = 'info') => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type }]);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 5000);
  }, []);

  const removeNotification = useCallback((id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  return (
    <NotificationContext.Provider value={{ addNotification, removeNotification }}>
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {notifications.map(({ id, message, type }) => (
          <Alert 
            key={id} 
            className="max-w-md"
            variant={type}
          >
            <AlertDescription>{message}</AlertDescription>
            <button
              className="absolute top-2 right-2"
              onClick={() => removeNotification(id)}
            >
              ×
            </button>
          </Alert>
        ))}
      </div>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);