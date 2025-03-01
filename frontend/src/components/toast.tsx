import React, { useEffect } from 'react';
import { useToast } from '../contexts/ToastContext';

const Toast = () => {
  const { message, type, isVisible } = useToast();

  return (
    <div
      className={`
        fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50
        transform transition-all duration-500 ease-in-out
        ${isVisible 
          ? 'translate-y-0 opacity-100 translate-x-0' 
          : '-translate-y-full opacity-0 translate-x-full'
        }
        ${type === 'success' ? 'bg-[#d0ec44] text-black' : 'bg-red-500 text-white'}
      `}
    >
      <div className="flex items-center gap-2">
        {type === 'success' ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
        <span className="font-medium">{message}</span>
      </div>
    </div>
  );
};

export default Toast;