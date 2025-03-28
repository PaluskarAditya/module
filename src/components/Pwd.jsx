import React, { useState, useEffect } from 'react'

export default function Pwd({ scene, onComplete, onFail, selectedScenario, setLevelCleared, setLevelFailed }) {
  const [password, setPassword] = useState('');
  const [requirements, setRequirements] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false
  });
  const [completed, setCompleted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    // Check password requirements
    const checkRequirements = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
    };
    
    setRequirements(checkRequirements);
    
    // Check if all required criteria are met
    const allRequirementsMet = 
      checkRequirements.length && 
      checkRequirements.uppercase && 
      checkRequirements.lowercase && 
      checkRequirements.number;
    
    setCompleted(allRequirementsMet);
  }, [password]);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (submitted) {
      setSubmitted(false);
      setFeedback('');
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    if (completed) {
      setFeedback("Great job! You've created a strong password.");
      if (onComplete) onComplete();
      // Set level as cleared and return to scenario selection
      setTimeout(() => {
        if (setLevelCleared) setLevelCleared(true);
      }, 1500);
    } else {
      setFeedback('Your password does not meet all requirements. Please try again.');
      if (onFail) onFail();
      // Set level as failed if needed
      if (setLevelFailed) setLevelFailed(true);
    }
  };

  const getRequirementItems = () => {
    if (scene && scene.requirements) {
      return scene.requirements.map((req, index) => (
        <p key={index} className={requirements[req.type] ? 'text-green-500' : ''}>
          {req.description}
          {requirements[req.type] && ' ✓'}
        </p>
      ));
    }

    // Default requirements if scene data is not available
    return (
      <>
        <p className={requirements.length ? 'text-green-500' : ''}>
          Create a password that is at least 8 characters long
          {requirements.length && ' ✓'}
        </p>
        <p className={requirements.uppercase ? 'text-green-500' : ''}>
          Create a password that contains at least one uppercase letter
          {requirements.uppercase && ' ✓'}
        </p>
        <p className={requirements.lowercase ? 'text-green-500' : ''}>
          Create a password that contains at least one lowercase letter
          {requirements.lowercase && ' ✓'}
        </p>
        <p className={requirements.number ? 'text-green-500' : ''}>
          Create a password that contains at least one number
          {requirements.number && ' ✓'}
        </p>
      </>
    );
  };

  return (
    <div className='sim w-full h-full bg-gray-800 rounded-lg flex'>
      <div className='rounded-l-lg flex-col gap-5 flex h-full w-full bg-white text-black flex-1 justify-center items-center'>
        <div className='flex flex-col gap-0 w-full justify-center items-center'>
          <h1 className='text-4xl font-bold tracking-tighter'>
            {scene?.title || 'Password Challenge'}
          </h1>
          <p className='text-gray-500 font-light w-1/2 text-center'>
            {scene?.description || 'Test your password strength by creating tough passwords'}
          </p>
        </div>
        <div className='flex flex-col gap-2 p-3 rounded-lg border-[1.5px] border-gray-100'>
          <p className='font-normal text-lg'>To achieve</p>
          <div className='flex flex-col gap-0 text-gray-500 font-thin'>
            {getRequirementItems()}
          </div>
        </div>
        {submitted && (
          <div className={`mt-4 p-2 ${completed ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'} rounded-lg`}>
            {feedback}
          </div>
        )}
      </div>
      <div className='rounded-r-lg flex flex-1 h-full w-full bg-white justify-center items-center border-l-[1.5px] border-gray-100 text-center'>
        <div className='flex flex-col gap-3 w-3/4'>
          <input 
            type='text' 
            className='rounded-lg border-[1.5px] border-gray-100 p-1 px-2 focus:outline-none text-lg text-black text-center font-light tracking-tight' 
            placeholder='Enter your password' 
            value={password}
            onChange={handlePasswordChange}
          />
          {password && (
            <div className='text-sm'>
              <div className='flex justify-between'>
                <span>Password Strength:</span>
                <span className={`font-medium ${
                  Object.values(requirements).filter(Boolean).length <= 1 ? 'text-red-500' :
                  Object.values(requirements).filter(Boolean).length <= 3 ? 'text-yellow-500' :
                  'text-green-500'
                }`}>
                  {Object.values(requirements).filter(Boolean).length <= 1 ? 'Weak' :
                   Object.values(requirements).filter(Boolean).length <= 3 ? 'Medium' :
                   'Strong'}
                </span>
              </div>
              <div className='w-full bg-gray-200 rounded-full h-2 mt-1'>
                <div 
                  className={`h-2 rounded-full ${
                    Object.values(requirements).filter(Boolean).length <= 1 ? 'bg-red-500' :
                    Object.values(requirements).filter(Boolean).length <= 3 ? 'bg-yellow-500' :
                    'bg-green-500'
                  }`}
                  style={{ width: `${(Object.values(requirements).filter(Boolean).length / 5) * 100}%` }}
                ></div>
              </div>
            </div>
          )}
          <button 
            onClick={handleSubmit}
            className={`mt-3 py-2 px-4 rounded-lg ${
              completed ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-300'
            } text-white font-medium transition-colors`}
            disabled={!password}
          >
            Submit Password
          </button>
        </div>
      </div>
    </div>
  )
}
