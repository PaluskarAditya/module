import React from 'react'

export default function Inbox({ selectedScenario, selectedMail, handleMailClick, handleElementClick }) {
  return (
    <div className='w-3/4 sim tracking-normal'>
      <div className='bg-black p-3 flex justify-between rounded-t-lg items-center'>
        <p className='text-white font-light text-md'>mails</p>
      </div>
      <div className='bg-white w-full h-[calc(100%-48px)] rounded-b-lg flex gap-3 p-3'>
        <div className='w-1/4 flex flex-col gap-2 overflow-y-auto'>
          {
            selectedScenario?.scene.map((el, index) => (
              <div 
                key={index}
                onClick={() => handleMailClick(el)} 
                className='p-3 border-2 border-gray-200 rounded-lg text-black text-sm cursor-pointer'
              >
                {el.subject?.value || el.subject}
              </div>
            ))
          }
          {
            selectedScenario?.otherEmails?.map((email, index) => (
              <div 
                key={`other-${index}`}
                onClick={() => handleMailClick(email)}
                className='p-3 border-2 border-gray-200 rounded-lg text-black text-sm cursor-pointer'
              >
                {email.subject?.value || email.subject}
              </div>
            ))
          }
        </div>
        <div className='w-3/4 border-2 border-gray-200 rounded-lg text-black overflow-y-auto'>
          {selectedMail ?
            <div className='flex flex-col gap-5 p-3'>
              <div className='flex flex-col gap-1'>
                <h1 
                  className='text-xl cursor-pointer' 
                  onClick={() => selectedMail.subject?.value && handleElementClick(selectedMail.subject)}
                >
                  {selectedMail.subject?.value || selectedMail.subject}
                </h1>
                <p 
                  className='text-xs text-gray-500 cursor-pointer' 
                  onClick={() => selectedMail.from?.value && handleElementClick(selectedMail.from)}
                >
                  {selectedMail.from?.value || selectedMail.from}
                </p>
              </div>
              <div 
                className='flex text-xs justify-start p-0 items-start w-full cursor-pointer' 
                onClick={() => selectedMail.body?.value && handleElementClick(selectedMail.body)} 
                dangerouslySetInnerHTML={{
                  __html: selectedMail.body?.value || ''
                }}
              ></div>
              {selectedMail.attachments && (
                <div className='flex flex-col gap-2 border-t border-gray-200 pt-4'>
                  <p className='text-sm font-medium'>Attachments:</p>
                  <div className='flex flex-wrap gap-2'>
                    {selectedMail.attachments.map((attachment, index) => (
                      <div 
                        key={index}
                        className='p-2 bg-gray-100 rounded cursor-pointer hover:bg-gray-200 flex items-center gap-2'
                        onClick={() => handleElementClick(attachment)}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                        </svg>
                        {attachment.value || attachment}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            :
            <div className='flex justify-center items-start w-full text-xs p-3'>Select a mail to analyze</div>}
        </div>
      </div>
    </div>
  )
}
