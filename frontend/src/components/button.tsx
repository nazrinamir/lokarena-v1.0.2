import React from 'react'

interface ButtonProps {
  className?: string;
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ className = '', label, onClick }) => {
  return (
    <div
      className={`bg-[#d0ec44] w-auto hover:cursor-pointer p-4 m-0 text-center rounded-lg text-black font-bold `}
      onClick={onClick}
    >
      {label}
    </div>
  )
}

export default Button