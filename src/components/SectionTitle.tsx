import React from 'react'

export default function SectionTitle({ children, id }: { children: React.ReactNode, id:string }) {
  return (
    <div id={id} className="flex justify-center text-cyan-800 font-bold text-5xl p-10">
        {children}
    </div>
  )
}
