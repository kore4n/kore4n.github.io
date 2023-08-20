import React from 'react'

function CourseHighlight({ children }: { children: React.ReactNode }) {
  return (
    <span className='italic'>{children}</span>
  )
}

export default CourseHighlight