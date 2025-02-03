// contexts/AlertContext.js
import React, { createContext, useContext, useReducer } from 'react';

const AlertContext = createContext(null);

const alertReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ALERT':
      return [...state, { id: Date.now(), ...action.payload }];
    case 'REMOVE_ALERT':
      return state.filter(alert => alert.id !== action.payload);
    case 'CLEAR_ALERTS':
      return [];
    default:
      return state;
  }
};

export const AlertProvider = ({ children }) => {
  const [alerts, dispatch] = useReducer(alertReducer, []);

  const addAlert = (message, type = 'info', timeout = 5000) => {
    const id = Date.now();
    dispatch({ type: 'ADD_ALERT', payload: { message, type, id } });
    
    if (timeout) {
      setTimeout(() => {
        dispatch({ type: 'REMOVE_ALERT', payload: id });
      }, timeout);
    }
  };

  const removeAlert = (id) => {
    dispatch({ type: 'REMOVE_ALERT', payload: id });
  };

  const clearAlerts = () => {
    dispatch({ type: 'CLEAR_ALERTS' });
  };

  return (
    <AlertContext.Provider value={{ alerts, addAlert, removeAlert, clearAlerts }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlertContext must be used within an AlertProvider');
  }
  return context;
};