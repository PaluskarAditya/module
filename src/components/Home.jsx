import React from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import Education from './Education';

export default function Home() {
  const { mode } = useOutletContext();
  const navigate = useNavigate();

  return (
    <>
      {mode === 'gaming' ? (
        <div className='flex justify-start items-start h-screen bg-[var(--bg)] pt-[4.5rem] p-5 text-white tracking-widest'>
          <div className='flex flex-col gap-5 w-full'>
            <p>Hey User,<br />
              Welcome to <span className='text-cyan-400 font-bold'>Cyber Guard</span>.<br />
              Select your department to get started.
            </p>
            <div className='flex flex-col gap-2'>
              {
                ['HR', 'Finance', 'IT', 'Marketing'].map((dept) => (
                  <div
                    key={dept}
                    className='border-2 border-cyan-400 text-white rounded-md p-3 cursor-pointer hover:bg-cyan-400 hover:text-black transition-all duration-300'
                    onClick={() => navigate(`/home/${dept.toLocaleLowerCase()}`)}
                  >
                    {dept}
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      ) : (
        <Education />
      )}
    </>
  );
}
