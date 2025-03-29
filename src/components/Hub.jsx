import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function Hub() {
  const navigate = useNavigate();
  const params = useParams();
  
  return (
    <div className='flex justify-start p-5 text-white pt-[4.5rem] flex-col gap-2 items-start h-screen bg-[var(--bg)] tracking-widest'>
      <h1 className='text-4xl'>Hub</h1>
      <div className='flex flex-col gap-3 h-full w-full'>
        <div className='grid grid-cols-3 gap-3 h-1/2 w-full'>
          <div onClick={() => navigate(`/home/${params.dept}/ctf`)} className='p-3 border-2 border-cyan-400 rounded-lg h-full w-full cursor-pointer'>
            <h1 className='text-xl'>CTF</h1>
            <p className='text-gray-500 text-sm'>Capture The Flag - Test your cybersecurity skills by finding hidden flags in various challenges</p>
          </div>
          <div className='p-3 border-2 border-cyan-400 rounded-lg h-full w-full cursor-pointer'>
            <h1 className='text-xl'>Quiz</h1>
            <p className='text-gray-500 text-sm'>Quiz - Test your cybersecurity knowledge with a series of questions</p>
          </div>
          <div className='p-3 border-2 border-cyan-400 rounded-lg h-full w-full cursor-pointer'>
            <h1 className='text-xl'>Mission</h1>
            <p className='text-gray-500 text-sm'>Mission - Complete a series of missions to earn points and unlock new challenges</p>
          </div>
        </div>
        <div className='border-2 p-3 border-purple-500 rounded-lg h-1/2'>
          <h1>Tournament</h1>
        </div>
      </div>
    </div>
  )
}
