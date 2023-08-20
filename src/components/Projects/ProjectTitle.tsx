import React from 'react'

export default function ProjectTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className='grid place-items-center font-bold text-2xl'>
      {children}
    </div>
  )
}
