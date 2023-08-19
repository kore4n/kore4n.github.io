import React from 'react'
import Image from 'next/image'

export default function Portrait() {
  const portraitDimensions = 400;

  return (
    <Image 
        src="./images/jasonselfie.jpg"
        width={portraitDimensions}
        height={portraitDimensions}
        alt="selfie"
        className="rounded-[6rem]"
    />
  )
}
