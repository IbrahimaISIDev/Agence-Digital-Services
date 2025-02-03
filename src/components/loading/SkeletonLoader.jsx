// components/ui/SkeletonLoader.jsx
import React from 'react';

export const SkeletonLoader = ({ type = "line", count = 1, className = "" }) => {
  const getSkeletonClass = () => {
    switch (type) {
      case "circle":
        return "w-12 h-12 rounded-full";
      case "rectangle":
        return "h-24 rounded-md";
      case "line":
      default:
        return "h-4 rounded";
    }
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`${getSkeletonClass()} bg-gray-200 animate-pulse`}
        />
      ))}
    </div>
  );
};