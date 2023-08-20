import Link from 'next/link'
import React from 'react'

export default function NavbarLink({ children, link }: { children: React.ReactNode, link: string }) {
  return (
    <a 
      href={link}
      className='text-lg hover:text-slate-500 text-gray-300 duration-300'
      >{children}
    </a>
  )
}
