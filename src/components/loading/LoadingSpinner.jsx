// components/ui/LoadingSpinner.jsx
import React from 'react';

export const LoadingSpinner = ({ size = "medium", className = "" }) => {
  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-8 h-8",
    large: "w-12 h-12"
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`${sizeClasses[size]} animate-spin rounded-full border-4 border-gray-200 border-t-blue-500`}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Chargement...</span>
      </div>
    </div>
  );
};