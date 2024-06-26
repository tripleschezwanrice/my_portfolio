import React from 'react'

const Resume = () => {
  return (
    <div className='w-full grid grid-cols-10  md:text-6xl sm:text-4xl text-2xl pt-20  z-[9999]'>
        <h1 className='col-span-7 p-4 border-y border-black z-[9999] bg-white text-right'>Here's my  </h1>
        <a target="_blank" href='https://drive.google.com/file/d/11aDy7WrmOKS6QJoGezaDoVoT62iNpYmt/view?usp=sharing' className='col-span-3 border-[3px] border-blue-400 p-4 hover:bg-blue-400 z-[99999] duration-200 bg-white italic'>Resume</a>
    </div>
  )
}

export default Resume