import React from 'react'

const labelValue = ({label, value}: {label: string, value: string}) => {
  return (
    <div className='flex flex-row gap-5'>
        <div className='w-1/2'>{label}</div>
        <div className='w-1/2 text-white'>{value}</div>
    </div>
  )
}

export default labelValue