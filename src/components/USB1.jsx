import React from 'react'

export default function USB1() {
  return (
    <div className='sim font-light flex flex-col w-3/4 rounded-lg relative items-center justify-center h-full bg-white'>
      <div className='flex flex-col w-full h-full bg-[url("https://www.eteknix.com/wp-content/uploads/2017/10/windows-10.jpg")] rounded-lg bg-cover bg-center'>
      </div>
      <div className='absolute z-50 top-0 left-0 right-0 bottom-0 bg-black/50 flex items-center justify-center'>
        <div className='bg-white flex flex-col gap-2 w-1/2'>
          <div className='flex justify-end items-start'>
            <button className='py-0 px-4 bg-red-500 font-thin text-white'>x</button>
          </div>
          <div className='flex flex-col gap-0 text-black p-3 pb-0'>
            <h1 className='text-lg font-medium'>Do you want to connect to this device?</h1>
            <p className='text-xs text-gray-500'>This device is a USB device. It is a device that can be connected to a computer</p>
          </div>
          <div className='w-full p-2 flex gap-1 text-black bg-gray-100 border-t border-gray-200 justify-end items-center'>
            <button className='text-xs p-1 px-3 bg-white border border-gray-300'>insert</button>
            <button className='text-xs p-1 px-3 bg-red-500 text-white border border-red-500'>reject</button>
          </div>
        </div>
      </div>
      <div className='flex flex-col w-full absolute bottom-0 left-0 right-0 p-3 bg-black/50 rounded-b-lg'>
        <div className='flex gap-2 justify-between items-center'>
          <div className='grid grid-cols-2 gap-[2px] rounded-md cursor-pointer'>
            <div className="h-3 w-3 bg-blue-400"></div>
            <div className="h-3 w-3 bg-blue-400"></div>
            <div className="h-3 w-3 bg-blue-400"></div>
            <div className="h-3 w-3 bg-blue-400"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
