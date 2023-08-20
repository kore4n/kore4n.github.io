import React from 'react'

export default function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex justify-center min-h-[300px] gap-20 py-10 text-black">
        {children}
    </section>
  )
}
