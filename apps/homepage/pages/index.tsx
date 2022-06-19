import React from 'react'

import { NextPage } from 'next'

const IndexPage: NextPage = () => {
  return (
    <main>
      <div className='absolute top-4 right-4'>
        <a
          href='https://webring.wonderful.software#wiput.me'
          title='วงแหวนเว็บ'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            alt='วงแหวนเว็บ'
            width='32'
            height='32'
            src='https://webring.wonderful.software/webring.black.svg'
          />
        </a>
      </div>
      <div className='w-full min-h-screen grid grid-cols-1 justify-center items-center'>
        <div className='w-full text-center'>
          <p className='text-4xl'>WIPUT POOTONG</p>
          <p className='text-xl'>Software Engineer</p>
          <div className='flex flex-row justify-between mt-4 md:mt-8 px-4 mx-auto max-w-lg underline'>
            <a
              href='https://cv.wiput.me'
              target='_blank'
              rel='noopener noreferrer'
            >
              About me
            </a>
            <a
              href='https://blog.wiput.me'
              target='_blank'
              rel='noopener noreferrer'
            >
              Blog
            </a>
            <a
              href='https://github.com/wiput1999'
              target='_blank'
              rel='noopener noreferrer'
            >
              GitHub
            </a>
            <a
              href='https://www.linkedin.com/in/wiputpootong/'
              target='_blank'
              rel='noopener noreferrer'
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
