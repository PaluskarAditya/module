import React, { useState, useEffect } from 'react'

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
    );
  };

  return (
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
        </div>
      </div>
    </div>
  )
}
