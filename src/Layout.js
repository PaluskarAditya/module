import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  const [mode, setMode] = useState('gaming');

  const toggleMode = () => {
    setMode((prev) => (prev === 'gaming' ? 'education' : 'gaming'));
  };

  return (
    <>
<<<<<<< HEAD
      <nav className='bg-gradient-to-b from-gray-900 to-black p-6 w-full fixed top-0 left-0 right-0 flex justify-between items-center tracking-widest border-b border-purple-500/20 backdrop-blur-sm z-50'>
        <h1 className='text-purple-400 text-2xl font-light hover:text-purple-300 transition-colors cursor-default'>
          {mode === 'gaming' ? 'Gaming Mode' : 'Education Mode'}
        </h1>
        <div className='flex gap-4 items-center'>
          <span className='text-gray-400 text-sm hover:text-gray-300 transition-colors cursor-default'>
            {mode === 'gaming' ? 'Switch to Education' : 'Switch to Gaming'}
          </span>
          <label className='relative inline-flex items-center cursor-pointer group'>
=======
      <nav className='bg-[var(--bg)] p-3 w-full fixed top-0 left-0 right-0 flex justify-between items-center tracking-widest'>
        <h1 className='text-cyan-400 text-4xl'>
          {mode === 'gaming' ? 'Gaming' : 'Education'}
        </h1>
        <div className='flex gap-2 items-center'>
          <span className='text-gray-400'>{mode === 'gaming' ? 'Gaming' : 'Education'}</span>
          <label className='relative inline-flex items-center cursor-pointer'>
>>>>>>> 408156f (Most scenarios completed)
            <input 
              type='checkbox' 
              className='sr-only peer' 
              checked={mode === 'education'}
              onChange={toggleMode} 
            />
<<<<<<< HEAD
            <div className="w-14 h-7 bg-black/50 rounded-full peer-checked:bg-purple-500/20 transition-all border border-purple-500/30 group-hover:border-purple-500/50 group-hover:bg-purple-500/5">
              <div className={`w-5 h-5 bg-purple-400 rounded-full shadow-lg transform transition-all duration-300 ease-in-out mt-1 ml-1 ${mode === 'education' ? 'translate-x-7' : 'translate-x-0'}`}></div>
=======
            <div className="w-12 h-6 bg-gray-700 rounded-full peer-checked:bg-cyan-400 transition-all">
              <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${mode === 'education' ? 'translate-x-6' : 'translate-x-0'}`}></div>
>>>>>>> 408156f (Most scenarios completed)
            </div>
          </label>
        </div>
      </nav>
      <Outlet context={{ mode }} />
    </>
  );
}
