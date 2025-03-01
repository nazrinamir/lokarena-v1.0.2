import React from 'react'

const Card = ({ children, title }: { children: React.ReactNode, title: string }) => {
  return (
    <div className='bg-[#292525] shadow-lg rounded-xl p-4 flex flex-col gap-4 w-full items-center justify-center'>
        <div className='text-2xl font-bold p-2'>
            {title}
        </div>
        <div className='w-full'>
            {children}
        </div>
    </div>
  )
}

export default Card