import React, { createContext, useContext, useState } from 'react';

interface ToastContextType {
  showToast: (message: string, type: 'success' | 'error') => void;
  hideToast: () => void;
  message: string;
  type: 'success' | 'error';
  isVisible: boolean;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [message, setMessage] = useState('');
  const [type, setType] = useState<'success' | 'error'>('success');
  const [isVisible, setIsVisible] = useState(false);

  const showToast = (message: string, type: 'success' | 'error') => {
    setMessage(message);
    setType(type);
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  const hideToast = () => {
    setIsVisible(false);
  };

  return (
    <ToastContext.Provider value={{ showToast, hideToast, message, type, isVisible }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
} 