import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  const [mode, setMode] = useState('gaming');

  const toggleMode = () => {
    setMode((prev) => (prev === 'gaming' ? 'education' : 'gaming'));
  };

  return (
    <>
      <nav className='bg-[var(--bg)] p-3 w-full fixed top-0 left-0 right-0 flex justify-between items-center tracking-widest'>
        <h1 className='text-cyan-400 text-4xl'>
          {mode === 'gaming' ? 'Gaming' : 'Education'}
        </h1>
        <div className='flex gap-2 items-center'>
          <span className='text-gray-400'>{mode === 'gaming' ? 'Gaming' : 'Education'}</span>
          <label className='relative inline-flex items-center cursor-pointer'>
            <input 
              type='checkbox' 
              className='sr-only peer' 
              checked={mode === 'education'}
              onChange={toggleMode} 
            />
            <div className="w-12 h-6 bg-gray-700 rounded-full peer-checked:bg-cyan-400 transition-all">
              <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${mode === 'education' ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </div>
          </label>
        </div>
      </nav>
      <Outlet context={{ mode }} />
    </>
  );
}
