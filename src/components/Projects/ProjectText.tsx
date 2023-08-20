import React from 'react'

function ProjectText({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col justify-center'>{children}</div>
  )
}

export default ProjectText