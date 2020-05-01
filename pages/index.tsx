import React from 'react'

import { NextPage } from 'next'
import Link from 'next/link'

const IndexPage: NextPage = () => {
  return (
    <div className='w-full min-h-screen grid grid-cols-1 justify-center items-center'>
      <div className='w-full text-center'>
        <p className='text-4xl'>WIPUT POOTONG</p>
        <p className='text-xl'>Back-end Developer</p>
        <div className='flex flex-row justify-between mt-4 md:mt-8 px-4 mx-auto max-w-lg underline'>
          <a href='https://cv.wiput.me' target='_blank'>
            About me
          </a>
          <a href='https://blog.wiput.me' target='_blank'>
            Blog
          </a>
          <a href='https://github.com/wiput1999' target='_blank'>
            GitHub
          </a>
          <a href='https://www.linkedin.com/in/wiputpootong/' target='_blank'>
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
