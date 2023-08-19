import React from 'react'

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className='min-h-screen bg-white'>
        {children}
    </main>
  )
}
