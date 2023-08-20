import React from 'react'

function LanguageHighlight({ children }: { children: React.ReactNode }) {
  return (
    <span className='font-bold text-blue-600 text-lg'>{children}</span>
  )
}

export default LanguageHighlight