'use client';
import React, { useState } from 'react';

const EditText = ({ 
  placeholder = '',
  value = '',
  onChange,
  type = 'text',
  disabled = false,
  className = '',
  fullWidth = false,
  error = false,
  errorMessage = '',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={`${fullWidth ? 'w-full' : ''}`}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        disabled={disabled}
        className={`
          w-full
          px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2.5
          text-sm sm:text-base
          font-poppins
          bg-white
          border border-[#0a6563]
          rounded sm:rounded-md
          transition-all 
          duration-200 
          ease-in-out
          focus:outline-none 
          focus:ring-2 
          focus:ring-[#0a6563]/50
          focus:border-[#0a6563]
          ${error ? 'border-red-500 focus:ring-red-500/50' : ''}
          ${disabled ? 'opacity-50 cursor-not-allowed bg-gray-100' : 'hover:border-[#0a6563]/80'}
          ${isFocused ? 'shadow-sm' : ''}
          placeholder:text-[#757575]
          min-h-[44px] sm:min-h-[48px]
          touch-manipulation
          ${className}
        `.trim().replace(/\s+/g, ' ')}
        {...props}
      />
      {error && errorMessage && (
        <p className="mt-1 text-sm text-red-500 font-poppins">{errorMessage}</p>
      )}
    </div>
  );
};

export default EditText;