import React, { useState, useEffect } from 'react'

<<<<<<< HEAD
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
=======
export default function Pwd({ selectedScenario, handleElementClick }) {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(0);
  const [feedback, setFeedback] = useState([]);

  const requirements = selectedScenario?.scene[0]?.requirements;
  const feedbackMessages = selectedScenario?.scene[0]?.feedback;
  const strengthLevels = selectedScenario?.scene[0]?.strengthLevels;
  const strengthColors = selectedScenario?.scene[0]?.strengthColors;
  const passwordTips = selectedScenario?.scene[0]?.passwordTips;

  const checkPasswordStrength = (pwd) => {
    let strength = 0;
    const newFeedback = [];

    if (!pwd) {
      setStrength(0);
      setFeedback([]);
      return;
    }

    // Check length
    if (pwd.length < requirements?.minLength) {
      newFeedback.push(feedbackMessages?.tooShort);
    } else {
      strength++;
    }

    // Check uppercase
    if (requirements?.uppercase && !/[A-Z]/.test(pwd)) {
      newFeedback.push(feedbackMessages?.noUppercase);
    } else if (requirements?.uppercase) {
      strength++;
    }

    // Check lowercase
    if (requirements?.lowercase && !/[a-z]/.test(pwd)) {
      newFeedback.push(feedbackMessages?.noLowercase);
    } else if (requirements?.lowercase) {
      strength++;
    }

    // Check numbers
    if (requirements?.numbers && !/[0-9]/.test(pwd)) {
      newFeedback.push(feedbackMessages?.noNumbers);
    } else if (requirements?.numbers) {
      strength++;
    }

    // Check symbols
    if (requirements?.symbols && !/[^A-Za-z0-9]/.test(pwd)) {
      newFeedback.push(feedbackMessages?.noSymbols);
    } else if (requirements?.symbols) {
      strength++;
    }

    setStrength(strength);
    setFeedback(newFeedback);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    checkPasswordStrength(newPassword);
  };

  const getStrengthIndicator = (test, text) => {
    return (
      <div 
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => handleElementClick({
          name: text.name,
          value: text.value,
          options: text.options,
          answer: test ? text.pass : text.fail
        })}
      >
        <div className={`w-2 h-2 rounded-full ${test ? 'bg-green-500' : 'bg-gray-300'}`}></div>
        <span className="text-sm">{text.value}</span>
      </div>
>>>>>>> 408156f (Most scenarios completed)
    );
  };

  return (
<<<<<<< HEAD
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
=======
    <div className="sim flex flex-col bg-white rounded-lg text-black p-6 w-1/2 mx-auto">
      <h1 className="text-2xl font-bold mb-4">Password Security Challenge</h1>
      
      <div className="space-y-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h2 className="font-semibold mb-2">Why Strong Passwords Matter:</h2>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Protects your accounts from unauthorized access</li>
            <li>Prevents identity theft and financial fraud</li>
            <li>Makes it extremely difficult for hackers to crack</li>
            <li>Serves as your first line of defense online</li>
          </ul>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Create a Strong Password:
          </label>
          <input 
            type="password"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 
              focus:ring-blue-500"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
          <div className="mt-2">
            <div className={`text-sm font-medium text-${strengthColors?.[strength]}-600`}>
              {strengthLevels?.[strength]}
            </div>
            {feedback.length > 0 && (
              <ul className="mt-1 text-sm text-red-600">
                {feedback.map((msg, index) => (
                  <li key={index}>{msg}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-medium">Password Strength Indicators:</h3>
          {getStrengthIndicator(
            password.length >= requirements?.minLength,
            {
              name: 'Length Requirement',
              value: `Minimum ${requirements?.minLength} characters`,
              options: ['Too Short', 'Meets Length', 'Exceeds Length'],
              pass: 'Meets Length',
              fail: 'Too Short'
            }
          )}
          {getStrengthIndicator(
            /[A-Z]/.test(password),
            {
              name: 'Uppercase Requirement', 
              value: 'Contains uppercase letters',
              options: ['Missing Uppercase', 'Has Uppercase'],
              pass: 'Has Uppercase',
              fail: 'Missing Uppercase'
            }
          )}
          {getStrengthIndicator(
            /[a-z]/.test(password),
            {
              name: 'Lowercase Requirement',
              value: 'Contains lowercase letters', 
              options: ['Missing Lowercase', 'Has Lowercase'],
              pass: 'Has Lowercase',
              fail: 'Missing Lowercase'
            }
          )}
          {getStrengthIndicator(
            /[0-9]/.test(password),
            {
              name: 'Number Requirement',
              value: 'Contains numbers',
              options: ['Missing Numbers', 'Has Numbers'],
              pass: 'Has Numbers',
              fail: 'Missing Numbers'
            }
          )}
          {getStrengthIndicator(
            /[^A-Za-z0-9]/.test(password),
            {
              name: 'Special Character Requirement',
              value: 'Contains special characters',
              options: ['Missing Special Characters', 'Has Special Characters'],
              pass: 'Has Special Characters',
              fail: 'Missing Special Characters'
            }
          )}
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Tips for Creating Strong Passwords:</h3>
          <ul className="text-sm space-y-1">
            {passwordTips?.map((tip, index) => (
              <li key={index}>• {tip}</li>
            ))}
          </ul>
>>>>>>> 408156f (Most scenarios completed)
        </div>
      </div>
    </div>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> 408156f (Most scenarios completed)
