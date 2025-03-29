import { ChevronUp } from 'lucide-react';
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

export default function USB1({ setSelectedScenario }) {
  const [step, setStep] = useState(1);
  const [popupScale, setPopupScale] = useState(90);
  const [fadeOut, setFadeOut] = useState(false);
  const [cmdText, setCmdText] = useState('');
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Show initial instructions popup
    setStep(1);
    // Animate popup scale
    const scaleTimer = setTimeout(() => {
      setPopupScale(100);
    }, 50);
    return () => clearTimeout(scaleTimer);
  }, []);

  useEffect(() => {
    if (step === 7) {
      const text = "YOU HAVE BEEN HACKED! ALL YOUR FILES ARE ENCRYPTED...";
      let index = 0;
      const interval = setInterval(() => {
        setCmdText(text.substring(0, index));
        index++;
        if (index > text.length) {
          clearInterval(interval);
          setTimeout(() => {
            setStep(8); // Move to encrypted files view after CMD
            // Navigate back to CTF section after showing failure message
            setTimeout(() => {
              navigate(`/home/${params.dept}/ctf`);
            }, 2000);
          }, 2000);
        }
      }, 50);
      return () => clearInterval(interval);
    }
  }, [step]);

  const handlePopupClose = () => {
    // Animate popup closing
    setPopupScale(90);
    setFadeOut(true);

    // Close instructions popup after animation
    setTimeout(() => {
      setStep(0);
      setFadeOut(false);

      // Show USB connection popup after delay
      const timer = setTimeout(() => {
        setStep(2);
        // Animate second popup
        setTimeout(() => {
          setPopupScale(100);
        }, 50);
      }, 1000);
    }, 200);
  }

  const handleUsbClick = (action) => {
    if (action === 'insert') {
      // User chose to insert USB - continue to malicious path
      setStep(3);
      setTimeout(() => {
        setStep(4);
      }, 1000);
    } else if (action === 'reject') {
      // User rejected USB - show success message and return to CTF section
      setPopupScale(90);
      setFadeOut(true);
      setTimeout(() => {
        setStep(0);
        setFadeOut(false);
        const timer = setTimeout(() => {
          setStep(5); // Show success message
          setTimeout(() => {
            setPopupScale(100);
          }, 50);
          // Return to CTF section after showing success message
          setTimeout(() => {
            navigate(`/home/${params.dept}/ctf`);
          }, 2000);
        }, 500);
      }, 200);
    }
  }

  const handleOpenUSB = () => {
    setStep(6);
  }

  const handleDefenderAction = (action) => {
    if (action === 'unblock') {
      // User chose to unblock - continue to malicious path
      setStep(7);
    } else {
      // User blocked - show success message and return to CTF section
      setStep(5);
      setTimeout(() => {
        navigate(`/home/${params.dept}/ctf`);
      }, 2000);
    }
  }

  const handleFileExplorerClose = () => {
    // User closed file explorer - continue to malicious path
    setStep(7);
  }

  return (
    <div className='font-light flex flex-col w-3/4 relative items-center justify-center h-full bg-white'>
      {step === 1 && (
        <div className={`flex justify-center z-50 items-center fixed top-0 left-0 right-0 bottom-0 bg-black/50 transition-opacity duration-200 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
          <div style={{ transform: `scale(${popupScale}%)`, transition: 'transform 0.2s ease-out' }} className='flex h-max flex-col bg-gray-900 p-2 justify-start items-start h-1/2 w-1/2 border-2 border-cyan-400'>
            <div className='flex justify-between items-center gap-2 w-full p-2'>
              <h1>Instructions</h1>
              <button className='text-xs border-0 border-gray-300' onClick={handlePopupClose}>x</button>
            </div>
            <div className='flex font-thin text-cyan-400 text-sm flex-col gap-2 h-full justify-start items-start p-3'>
              <div className='flex flex-col gap-4'>
                <h2 className='text-lg font-medium'>Scenario Briefing:</h2>
                <ul className='list-disc list-inside space-y-2'>
                  <li>Role: Security Analyst</li>
                  <li>Task: USB Device Assessment</li>
                  <li>Objective: Verify and handle USB device</li>
                </ul>
                <div className='bg-cyan-900/30 p-3'>
                  <p className='text-xs'>
                    Your task is to examine an incoming USB device. You must:
                    <br />1. Verify if it's a legitimate USB device
                    <br />2. Choose whether to connect or reject the device
                    <br />3. Follow security protocols during assessment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className='flex flex-col w-full h-full bg-gradient-to-b from-gray-900 to-black'>
        <div className='flex flex-col w-full h-[500px] bg-[url("https://windowstan.com/wp-content/uploads/2019/06/Windows-10-new-wallpaper.jpg")] bg-cover bg-center'>
        </div>
      </div>
      {step === 2 && (
        <div className={`sim absolute z-30 top-0 left-0 right-0 bottom-0 bg-black/50 flex items-center justify-center transition-opacity duration-200 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
          <div style={{ transform: `scale(${popupScale}%)`, transition: 'transform 0.2s ease-out' }} className='bg-white flex flex-col gap-2 w-1/2'>
            <div className='flex justify-between items-start h-full'>
              <div className='p-1 text-gray-500'>
                <h1>Popup</h1>
              </div>
              <button className='py-0 px-3 bg-red-500 font-thin h-full text-white'>x</button>
            </div>
            <div className='flex flex-col gap-0 text-black p-3 pb-0 pt-0'>
              <h1 className='text-lg font-medium'>Do you want to connect to this device?</h1>
              <p className='text-xs text-gray-500'>This device is a USB device. It is a device that can be connected to a computer</p>
            </div>
            <div className='w-full p-2 flex gap-1 text-black bg-gray-100 border-t border-gray-200 justify-end items-center'>
              <button onClick={() => handleUsbClick('insert')} className='tracking-wide text-xs p-1 px-3 bg-white border border-gray-300'>insert</button>
              <button onClick={() => handleUsbClick('reject')} className='tracking-wide text-xs p-1 px-3 bg-red-500 text-white border border-red-500'>reject</button>
            </div>
          </div>
        </div>
      )}
      {step === 4 && (
        <div className={`sim absolute bottom-12 right-0 z-50 bg-white shadow-lg border border-gray-200 p-3 transition-opacity duration-200 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
              <img src='https://cdn-icons-png.flaticon.com/512/2169/2169339.png' alt='usb' className='w-6 h-6' />
              <div className='flex flex-col'>
                <p className='text-black text-sm'>SafeSecure USB Device</p>
                <p className='text-gray-500 text-xs'>Device ready to use</p>
              </div>
            </div>
            <button 
              onClick={handleOpenUSB}
              className='w-full text-xs py-1 px-2 bg-blue-500 text-white hover:bg-blue-600'
            >
              Open
            </button>
          </div>
        </div>
      )}
      {step === 5 && (
        <div className={`sim absolute z-30 top-0 left-0 right-0 bottom-0 bg-black/50 flex items-center justify-center transition-opacity duration-200 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
          <div style={{ transform: `scale(${popupScale}%)`, transition: 'transform 0.2s ease-out' }} className='bg-white flex flex-col gap-2 w-1/2 p-4 sim'>
            <h1 className='text-green-500 text-xl font-bold'>Level Cleared!</h1>
            <p className='text-gray-600'>You successfully avoided a potential ransomware attack by following proper security protocols.</p>
          </div>
        </div>
      )}
      {step === 6 && (
        <div className={`sim absolute z-30 top-0 left-0 right-0 bottom-0 bg-black/50 flex items-center justify-center`}>
          <div className='bg-white flex flex-col gap-3 w-1/2 p-4 border-2 border-yellow-500'>
            <div className='flex items-center gap-2'>
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Windows_Defender_logo.png/768px-Windows_Defender_logo.png' alt='defender' className='w-8 h-8' />
              <h2 className='text-lg font-semibold text-gray-800'>Windows Defender Alert</h2>
            </div>
            <p className='text-red-600 font-medium'>Malicious content detected on USB device!</p>
            <div className='flex justify-end gap-2 mt-2'>
              <button 
                onClick={() => handleDefenderAction('unblock')}
                className='px-4 py-1 text-sm bg-gray-200 hover:bg-gray-300 text-gray-800'
              >
                Unblock and Check
              </button>
              <button 
                onClick={() => handleDefenderAction('block')}
                className='px-4 py-1 text-sm bg-blue-500 hover:bg-blue-600 text-white'
              >
                Block
              </button>
            </div>
          </div>
        </div>
      )}
      {step === 7 && (
        <div className={`sim absolute z-30 top-0 left-0 right-0 bottom-0 bg-black/50 flex items-center justify-center`}>
          <div className='bg-black flex flex-col w-1/2 h-1/3 border border-gray-600'>
            <div className='flex items-center gap-2 p-2 bg-gray-900 border-b border-gray-600'>
              <span className='text-white text-sm'>Command Prompt</span>
            </div>
            <div className='p-4 font-mono text-green-500 text-sm'>
              C:\Windows\System32&gt;<span className='animate-pulse'>_</span>
              <br />
              {cmdText}
            </div>
          </div>
        </div>
      )}
      {step === 8 && (
        <div className={`sim absolute z-30 top-0 left-0 right-0 bottom-0 bg-black/50 flex items-center justify-center`}>
          <div className='bg-white flex flex-col w-2/3 h-3/4'>
            <div className='flex items-center justify-between gap-2 p-2 bg-gray-100 border-b'>
              <div className='flex items-center gap-2'>
                <img src='https://cdn-icons-png.flaticon.com/512/2169/2169339.png' alt='usb' className='w-5 h-5' />
                <span className='text-sm text-black'>USB Drive (F:)</span>
              </div>
              <button 
                onClick={handleFileExplorerClose}
                className='px-3 py-1 bg-red-500 text-white hover:bg-red-600'
              >
                x
              </button>
            </div>
            <div className='p-4 flex flex-col gap-2 overflow-auto'>
              <div className='text-red-500 text-sm font-medium mb-4'>Level Failed: Files have been encrypted!</div>
              <div className='grid grid-cols-4 gap-4 flex-wrap'>
                {['Document', 'Image', 'Spreadsheet', 'Presentation'].map((file, i) => (
                  <div key={i} className='flex items-center gap-2 p-2 border w-full'>
                    <img src='https://cdn-icons-png.flaticon.com/512/3767/3767084.png' alt='locked' className='w-4 h-4' />
                    <span className='text-xs text-gray-600 truncate'>{file}.locked</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className='flex flex-col w-full absolute bottom-0 left-0 right-0 p-2 bg-black/50'>
        <div className='flex gap-2 justify-between items-center'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/2048px-Windows_logo_-_2012.svg.png' alt='windows' className='w-5 h-5 text-white ml-1 cursor-pointer' />
          <div className='flex gap-4 justify-between items-center'>
            <div className='flex items-center gap-4 text-white text-sm'>
              <button><ChevronUp className='' /></button>
              <img src='https://cdn-icons-png.flaticon.com/512/93/93158.png' alt='wifi' className='w-4 h-4 text-white invert' />
              <img src='https://cdn-icons-png.flaticon.com/512/727/727269.png' alt='sound' className='w-4 h-4 text-white invert' />
            </div>
            <div className='flex flex-col sim items-end text-white'>
              <span className='text-xs'>
                {new Date().toLocaleTimeString('en-US', {
                  hour: 'numeric',
                  minute: '2-digit',
                  hour12: true
                })}
              </span>
              <span className='text-xs'>
                {new Date().toLocaleDateString('en-US', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric'
                }).split('/').join('-')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
