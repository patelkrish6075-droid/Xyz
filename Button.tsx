import React from 'react';
import { ButtonProps } from '../types';

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick, 
  type = "button", 
  disabled = false, 
  ariaLabel 
}) => {
  const baseStyle = "px-6 py-3 font-bold uppercase tracking-wider transition-all duration-300 transform shadow-lg flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 disabled:opacity-50 disabled:cursor-not-allowed";
  const hoverStyle = disabled ? "" : "hover:-translate-y-1";
  
  const variants = {
    primary: "bg-red-600 text-white hover:bg-red-700 border border-red-600",
    secondary: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-black",
    outline: "bg-transparent text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-white"
  };
  
  return (
    <button 
      type={type}
      onClick={onClick} 
      disabled={disabled}
      aria-label={ariaLabel || (typeof children === 'string' ? children : 'Button')}
      className={`${baseStyle} ${variants[variant]} ${hoverStyle} ${className}`}
    >
      {children}
    </button>
  );
};
