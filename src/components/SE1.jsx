import React, { useState, useEffect } from 'react';

export default function SE1({ selectedScenario, handleElementClick }) {
  const [selectedChat, setSelectedChat] = useState(null);
  const [content, setContent] = useState(null);

  useEffect(() => {
    if (selectedScenario?.scene?.[0]) {
      setContent(selectedScenario.scene[0]);
      // Auto-select the first (and only) chat in this scenario
      setSelectedChat('whatsappScam');
    }
  }, [selectedScenario]);

  const handleClick = (element) => {
    const elementData = content?.[element];
    if (elementData) {
      handleElementClick(elementData);
    }
  };

  return (
    <div className="sim flex flex-col bg-gray-100 w-full h-full rounded-lg text-black">
      {/* Browser Chrome */}
      <div className="bg-gray-200 p-2 border-b border-gray-300">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 bg-white rounded px-3 py-1">
            <span className="font-mono text-sm text-gray-600">
              web.whatsapp.com
            </span>
          </div>
        </div>
      </div>

      {/* WhatsApp Interface */}
      <div className="flex h-full">
        {/* Left Sidebar */}
        <div className="w-1/3 bg-white border-r border-gray-200 flex flex-col">
          {/* Header */}
          <div className="p-3 bg-gray-800 text-white">
            <h1 className="text-xl font-semibold">WhatsApp</h1>
            <div className="mt-2 text-sm text-white">Search or start new chat</div>
          </div>
          
          <div className="border-t border-gray-200 my-1"></div>

          {/* Chat List */}
          <div className="flex-1 overflow-y-auto">
            {/* Mom Chat */}
            <div className="cursor-pointer hover:bg-gray-100 p-3 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between">
                    <span className="font-medium truncate">Mom ❤️</span>
                    <span className="text-xs text-gray-500">Yesterday</span>
                  </div>
                  <p className="text-xs text-gray-500 truncate">Don't forget to call grandma!</p>
                </div>
              </div>
            </div>

            {/* Work Group Chat */}
            <div className="cursor-pointer hover:bg-gray-100 p-3 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between">
                    <span className="font-medium truncate">🏢 Work Team</span>
                    <span className="text-xs text-gray-500">10:30 AM</span>
                  </div>
                  <p className="text-xs text-gray-500 truncate">Sarah: Meeting at 2pm today</p>
                </div>
              </div>
            </div>

            {/* Scam Chat */}
            <div 
              className={`cursor-pointer hover:bg-gray-100 p-3 border-b border-gray-100 ${selectedChat === 'whatsappScam' ? 'bg-gray-100' : ''}`}
              onClick={() => setSelectedChat('whatsappScam')}
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between">
                    <span className="font-medium truncate">
                      {content?.phoneNumber?.value || "Bank Security"}
                    </span>
                    <span className="text-xs text-gray-500">
                      {content?.messageTime?.value || "Now"}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 truncate">
                    {content?.initialMessage?.value || "Important message about your account"}
                  </p>
                </div>
              </div>
            </div>

            {/* Friend Chat */}
            <div className="cursor-pointer hover:bg-gray-100 p-3 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between">
                    <span className="font-medium truncate">Alex 🎮</span>
                    <span className="text-xs text-gray-500">Yesterday</span>
                  </div>
                  <p className="text-xs text-gray-500 truncate">Game night on Friday?</p>
                </div>
              </div>
            </div>

            {/* Family Group Chat */}
            <div className="cursor-pointer hover:bg-gray-100 p-3 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between">
                    <span className="font-medium truncate">👨‍👩‍👧‍👦 Family Group</span>
                    <span className="text-xs text-gray-500">9:15 AM</span>
                  </div>
                  <p className="text-xs text-gray-500 truncate">Dad: BBQ this weekend!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Chat Area */}
        <div className="flex-1 flex flex-col bg-[#e5ddd5]">
          {/* Chat Header */}
          <div 
            className="bg-[#f0f2f5] p-3 flex items-center gap-2 border-b border-gray-200 cursor-pointer"
            onClick={() => handleClick('phoneNumber')}
          >
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            <div className="font-medium">
              {content?.phoneNumber?.value || "Bank Security"}
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto bg-[#e5ddd5]">
            {content && (
              <>
                {/* Initial Message */}
                <div 
                  className="flex justify-start mb-3 cursor-pointer"
                  onClick={() => handleClick('initialMessage')}
                >
                  <div className="bg-white rounded-lg p-3 max-w-[80%] shadow">
                    <p className="text-sm">{content.initialMessage?.value}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {content.messageTime?.value}
                    </p>
                  </div>
                </div>

                {/* Urgency Message */}
                <div 
                  className="flex justify-start mb-3 cursor-pointer"
                  onClick={() => handleClick('urgencyTactic')}
                >
                  <div className="bg-white rounded-lg p-3 max-w-[80%] shadow">
                    <p className="text-sm">{content.urgencyTactic?.value}</p>
                    <p 
                      className="text-sm text-blue-600 underline mt-1 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleClick('fraudulentLink');
                      }}
                    >
                      {content.fraudulentLink?.value}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {content.messageTime?.value}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Message Input */}
          <div className="bg-[#f0f2f5] p-3">
            <div className="flex items-center bg-white rounded-lg px-4">
              <input 
                type="text" 
                placeholder="Type a message"
                className="flex-1 py-2 focus:outline-none text-sm"
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}