import React from 'react'

export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center text-cyan-800 font-bold text-5xl p-10">
        {children}
    </div>
  )
}
