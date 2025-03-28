import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function App() {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => navigate('/home'), 500); // Navigate after a short delay
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className='flex justify-center flex-col gap-8 items-center h-screen bg-[var(--bg)] tracking-widest'>
      <div className='text-8xl text-cyan-400'>Cyber Guard</div>
      <div className='border border-gray-700 rounded-full w-1/2 h-3 bg-none overflow-hidden'>
        <div 
          className='bg-cyan-400 h-full transition-all duration-300 ease-in-out'
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className='text-gray-500'>Loading... {progress}%</p>
    </div>
  );
}
