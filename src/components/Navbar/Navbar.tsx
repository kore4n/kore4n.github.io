import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavbarLink from './NavbarLink';

function Navbar() {
  const logoDimensions = 42;

  return (
    <header className='flex justify-between gap-10 bg-gradient-to-r from-blue-900 to-cyan-900 brightness-150 opacity-95 pr-10 py-6'>
        {/* Main Logo */}
        <span className=' pl-40'>
          <Image 
            src='./images/JKSignature.png'
            className=' fill-white object-fill'
            width={logoDimensions}
            height={logoDimensions}
            alt="Logo"
          />
        </span>
        <ul className='flex gap-10'>
          {/* TODO: Line underneath when hovering */}
          <li>
            <NavbarLink link="/">Home</NavbarLink>
          </li>
          <li>
            <NavbarLink link="/about">About</NavbarLink>
          </li>
          <li>
            <NavbarLink link="/projects">Projects</NavbarLink>
          </li>
          <li>
            <NavbarLink link="/contact">Contact</NavbarLink>
          </li>
        </ul> 
      </header>
  )
}

export default Navbar