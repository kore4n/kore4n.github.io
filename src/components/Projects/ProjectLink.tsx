import React from 'react'
import Image from 'next/image'

function ProjectLink({ children, link, logoSrc }: { children: React.ReactNode, link: string, logoSrc: string }) {
    const logoDimensions = 25;

  return (
    <a 
        className='flex justify-center place-items-center gap-1 w-[10vw] h-[5vh] bg-gradient-to-r from-emerald-300 to-emerald-400 rounded-lg my-10 mx-10 shadow-2xl hover:from-slate-300 hover:to-slate-400'
        href={link}
        target='_blank'
    >
        {/* Logo */}
        <Image
        src={logoSrc}
        width={logoDimensions}
        height={logoDimensions}
        alt="link icon"
        />
        <div className=' ml-1'>
            {children}

        </div>
    </a>
  )
}

export default ProjectLink