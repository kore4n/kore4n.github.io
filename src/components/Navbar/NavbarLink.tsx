import Link from 'next/link'
import React from 'react'

export default function NavbarLink({ children, link }: { children: React.ReactNode, link: string }) {
  return (
    <Link href={link} className=' hover:text-black duration-300'>{children}</Link>
  )
}
