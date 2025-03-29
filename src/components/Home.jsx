import React from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import Education from './Education';

export default function Home() {
  const { mode } = useOutletContext();
  const navigate = useNavigate();

  return (
    <>
      {mode === 'gaming' ? (
        <div className='h-screen flex flex-col items-center justify-center pt-[4.5rem] text-gray-300 tracking-widest bg-gradient-to-b from-gray-900 to-black'>
          <div className='w-4/5 max-w-4xl flex flex-col gap-6 items-center'>
            <div className='w-full flex flex-col gap-2 p-6 border border-indigo-500/30 rounded-xl bg-black/50 backdrop-blur-sm hover:border-indigo-500/50 hover:bg-indigo-500/5 hover:text-indigo-500/50 transition-all duration-300 text-center'>
              <h1 className='text-xl text-indigo-400'>Hey User,</h1>
              <p className='text-base'>
                Welcome to <span className='text-indigo-400 font-bold'>Cyber Guard</span>
              </p>
              <p className='text-sm text-gray-400'>Select your department to get started.</p>
            </div>

            <div className='w-full grid grid-cols-2 gap-4'>
              {
                ['HR', 'Finance', 'IT', 'Marketing'].map((dept, index) => {
                  const colors = [
                    'purple',
                    'emerald',
                    'amber',
                    'rose'
                  ];
                  const color = colors[index];
                  
                  return (
                    <div
                      key={dept}
                      onClick={() => navigate(`/home/${dept.toLowerCase()}`)}
                      className={`p-6 border border-${color}-500/30 rounded-xl bg-black/50 backdrop-blur-sm cursor-pointer hover:border-${color}-500 hover:bg-${color}-500/20 group hover:text-white hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all duration-300 hover:scale-[1.02] text-center`}
                    >
                      <h2 className={`text-lg text-${color}-400 mb-2 group-hover:text-white`}>
                        {dept}
                      </h2>
                      <p className='text-xs text-gray-400 group-hover:text-white'>
                        Access {dept} department specific cybersecurity training and challenges
                      </p>
                    </div>
                  );
                })
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
