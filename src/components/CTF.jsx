import React, { useEffect, useState } from 'react'
import Inbox from './Inbox'
import Website1 from './Website1'
import Login1 from './Login1'
import SE1 from './SE1'
import Pwd from './Pwd'
import USB1 from './USB1'
import { useNavigate, useParams } from 'react-router-dom'

export default function CTF() {
  const navigate = useNavigate();
  const params = useParams();
  const [scenarios, setScenarios] = useState([
    {
      id: 1,
      name: "Phishing Email Investigation",
      type: "phishing",
      difficulty: "easy", 
      description: "Analyze suspicious emails and identify phishing attempts targeting employees",
      component: Inbox,
      scene: [
        {
          phishing: true,
          sus: {
            options: ['Phishing Mail', 'Social Engineering Mail', 'Malware Mail'],
            answer: 'Phishing Mail',
            resp: false,
            clicked: false
          },
          subject: 'URGENT: Your Account Will Be Terminated',
          from: {
            name: 'sender address',
            value: 'security-team@gooogle.com',
            options: ['Suspicious domain', 'Legitimate Google domain', 'Impersonation attempt'],
            answer: 'Suspicious domain',
            clicked: false
          },
          body: {
            name: 'mail body',
            value: `
              <div style="font-family: 'Inter', sans-serif;">
                <h2 style="color: red;">URGENT SECURITY ALERT</h2>
                <p>Dear Valued Customer,</p>
                <p>Your account has been flagged for <strong>suspicious activity</strong>!</p>
                <p>To prevent immediate termination, please verify your identity by providing:</p>
                <ul>
                  <li>Login credentials</li>
                  <li>Social security number</li>
                </ul>
                <div style="background-color: #f0f0f0; padding: 10px; margin: 15px 0;">
                  <p><a href="http://www.secure-google.tk" style="color: blue; text-decoration: underline;">Click here to verify your account now!</a></p>
                </div>
                <p style="color: red; font-weight: bold;">Warning: Account termination in 24 hours if no action taken!</p>
                <p>Best regards,<br/>Google Security Team</p>
              </div>
            `,
            options: ['Legitimate request', 'Phishing attempt', 'Account notification'],
            answer: 'Phishing attempt',
            clicked: false
          }
        },
        {
          phishing: false,
          sus: {
            options: ['Normal business email', 'Internal communication', 'Meeting invitation', 'Project update'],
            answer: 'Meeting invitation',
            resp: false,
            clicked: false
          },
          subject: 'Team Meeting - Q4 Planning',
          from: {
            value: 'jennifer.smith@company.com',
            options: ['Internal domain', 'External domain', 'Personal email'],
            answer: 'Internal domain',
            clicked: false
          },
          body: {
            value: 'Hi everyone,\n\nJust a reminder about our Q4 planning meeting tomorrow at 10 AM in Conference Room A. Please bring your department updates.\n\nBest regards,\nJennifer',
            options: ['Meeting reminder', 'External message', 'Spam'],
            answer: 'Meeting reminder',
            clicked: false
          }
        },
        {
          phishing: false,
          sus: {
            options: ['Regular newsletter', 'Marketing email', 'System notification', 'External vendor'],
            answer: 'System notification',
            resp: false,
            clicked: false
          },
          subject: 'Password Change Confirmation',
          from: {
            value: 'no-reply@company.com',
            options: ['System email', 'External source', 'Unknown sender'],
            answer: 'System email',
            clicked: false
          },
          body: {
            value: 'This email confirms that you have successfully changed your password at 2:30 PM today. If you did not make this change, please contact IT Support immediately.',
            options: ['Confirmation notice', 'Security alert', 'Spam message'],
            answer: 'Confirmation notice',
            clicked: false
          }
        }
      ]
    },
    {
      id: 2,
      name: "Suspicious Download Alert",
      type: "malware",
      difficulty: "hard",
      description: "Investigate a potential malware infection from a suspicious file download",
      component: Website1,
      scene: [
        {
          phishing: true,
          sus: {
            options: ['Legitimate Software', 'Malware', 'Adware'],
            answer: 'Malware',
            resp: false,
            clicked: false
          },
          content: {
            title: {
              name: 'Title',
              value: 'Windows Security Update Center',
              options: ['Legitimate title', 'Suspicious title', 'Misleading title'],
              answer: 'Suspicious title',
              clicked: false
            },
            header: {
              name: 'Header',
              value: 'CRITICAL SYSTEM UPDATE REQUIRED',
              options: ['Normal header', 'Urgent warning', 'Scare tactic'],
              answer: 'Scare tactic',
              clicked: false
            },
            message: {
              name: 'Message',
              value: 'Our security scan has detected that your Windows system is missing critical security updates. Your system is at high risk of malware infection.',
              options: ['Informative message', 'Fear-based manipulation', 'Technical details'],
              answer: 'Fear-based manipulation',
              clicked: false
            },
            downloadButton: {
              name: 'Download Button',
              value: 'Download Security Update (SecurityPatch_2023.exe)',
              options: ['Safe download', 'Malicious file', 'System update'],
              answer: 'Malicious file',
              clicked: false
            },
            progressBar: {
              name: 'Progress Bar',
              value: '85%',
              options: ['Real scan', 'Fake progress', 'Loading animation'],
              answer: 'Fake progress',
              clicked: false
            },
            securityStatus: {
              name: 'Security Status',
              value: 'System vulnerability level: High',
              options: ['Status indicator', 'Scare tactic', 'System metric'],
              answer: 'Scare tactic',
              clicked: false
            },
            fileInfo: {
              name: 'File Info',
              value: 'File size: 2.3 MB',
              options: ['File metadata', 'Deceptive detail', 'Technical info'],
              answer: 'Deceptive detail',
              clicked: false
            },
            url: {
              name: 'URL',
              value: 'http://windowz-support.com/update',
              options: ['Legitimate domain', 'Suspicious domain', 'Known malware domain'],
              answer: 'Suspicious domain',
              clicked: false
            }
          }
        }
      ]
    },
    {
      id: 3,
      name: "Fake Login Portal",
      type: "credential-theft",
      difficulty: "hard",
      description: "Detect and analyze a sophisticated credential harvesting campaign",
      component: Login1,
      scene: [
        {
          phishing: true,
          sus: {
            options: ['Credential Theft', 'Legitimate Login', 'Fake Portal'],
            answer: 'Credential Theft',
            resp: false,
            clicked: false
          },
          url: {
            name: 'URL',
            value: 'https://instegram.com/login',
            options: ['Legitimate domain', 'Typosquatting domain', 'Instagram domain'],
            answer: 'Typosquatting domain',
            clicked: false
          },
          logo: {
            name: 'Logo',
            value: 'Instagram Logo',
            options: ['Official branding', 'Copied asset', 'Modified logo'],
            answer: 'Copied asset',
            clicked: false
          },
          loginForm: {
            name: 'Login Form',
            value: 'Instagram login form with username and password fields',
            options: ['Authentic form', 'Data harvesting form', 'Standard login'],
            answer: 'Data harvesting form',
            clicked: false
          },
          facebookButton: {
            name: 'Facebook Login Button',
            value: 'Log in with Facebook',
            options: ['Real integration', 'Credential harvester', 'Social login'],
            answer: 'Credential harvester',
            clicked: false
          },
          securityIndicators: {
            name: 'Security Indicators',
            value: 'Missing HTTPS padlock',
            options: ['Valid certificate', 'Invalid SSL', 'No security'],
            answer: 'Invalid SSL',
            clicked: false
          },
          visualDesign: {
            name: 'Visual Design',
            value: 'Instagram-like interface',
            options: ['Original design', 'Cloned layout', 'Modified theme'],
            answer: 'Cloned layout',
            clicked: false
          }
        }
      ]
    },
    {
      id: 4,
      name: "WhatsApp Bank Scam",
      type: "social-engineering", 
      difficulty: "medium",
      description: "Identify red flags in a suspicious WhatsApp message claiming to be from your bank",
      component: SE1,
      scene: [
        {
          phishing: true,
          sus: {
            options: ["Legitimate Message", "Scam Attempt", "Bank Communication"],
            answer: "Scam Attempt",
            resp: false,
            clicked: false
          },
          phoneNumber: {
            name: "Phone Number",
            value: "+1 (234) 567-8900",
            options: ["Legitimate bank number", "Spoofed number", "Unknown caller"],
            answer: "Spoofed number",
            clicked: false
          },
          initialMessage: {
            name: "Initial Message",
            value: "Hello, I'm from Exim Bank.",
            options: ["Official greeting", "Vague introduction", "Standard message"],
            answer: "Vague introduction", 
            clicked: false
          },
          urgencyTactic: {
            name: "Urgency Creation",
            value: "We've noticed some unusual activity on your account.",
            options: ["Real security alert", "Pressure tactic", "Normal notification"],
            answer: "Pressure tactic",
            clicked: false
          },
          fraudulentLink: {
            name: "Verification Link",
            value: "https://secure-bank-verify.com/card-update",
            options: ["Official bank domain", "Phishing URL", "Legitimate portal"],
            answer: "Phishing URL",
            clicked: false
          },
          messageTime: {
            name: "Message Timing",
            value: "12:45 PM",
            options: ["During bank hours", "After hours", "Weekend message"],
            answer: "After hours",
            clicked: false
          },
          communicationChannel: {
            name: "Communication Method",
            value: "WhatsApp message",
            options: ["Standard bank channel", "Suspicious medium", "Normal contact"],
            answer: "Suspicious medium",
            clicked: false
          },
          otherChats: [
            {
              name: "Mom",
              lastMessage: "Don't forget to pick up milk on your way home!",
              time: "11:30 AM",
              unread: 0
            },
            {
              name: "Work Group",
              lastMessage: "Meeting rescheduled to 3 PM",
              time: "10:15 AM",
              unread: 3
            },
            {
              name: "John",
              lastMessage: "Are we still on for lunch tomorrow?",
              time: "Yesterday",
              unread: 0
            },
            {
              name: "Gym Buddies",
              lastMessage: "Alice: See you all at 6 AM!",
              time: "Yesterday",
              unread: 5
            }
          ]
        }
      ]
    },
    {
      id: 5,
      name: "Suspicious IT Support Email",
      type: "phishing",
      difficulty: "hard", 
      description: "Analyze an email from IT support requesting urgent system access",
      component: Inbox,
      scene: [
        {
          phishing: true,
          sus: {
            options: ['Legitimate IT Request', 'Phishing Attempt', 'System Update Notice'],
            answer: 'Phishing Attempt',
            resp: false,
            clicked: false
          },
          subject: 'Critical: Immediate System Access Required - IT Department',
          from: {
            name: 'sender address',
            value: 'it-support@company-systems.net',
            options: ['Internal IT Email', 'External Domain', 'Spoofed Address'],
            answer: 'Spoofed Address',
            clicked: false
          },
          body: {
            name: 'mail body',
            value: `
              <div style="font-family: Arial, sans-serif;">
                <p>Dear Emma,</p>
                
                <p>Our security monitoring system has detected unusual activity on your workstation that requires immediate attention. To prevent any potential data loss or system compromise, we need to perform an emergency security audit.</p>

                <p>Please follow these steps immediately:</p>

                <ol>
                  <li>Download and run the attached anti-virus software</li>
                  <li>Enter your network credentials when prompted</li>
                  <li>Allow full system access when requested</li>
                </ol>

                <p style="color: red;">WARNING: Failure to comply within 30 minutes may result in automatic system lockdown as per security protocol Section 5.2</p>

                <p>If you have any questions, do not reply to this email. Instead, call our emergency support line at +1 (555) 123-4567.</p>

                <p>Best regards,<br/>
                James Wilson<br/>
                Senior IT Security Specialist<br/>
                Corporate IT Department</p>

                <div style="color: gray; font-size: 10px; border-top: 1px solid #ccc; margin-top: 20px; padding-top: 10px;">
                  Confidential: This email contains sensitive information and is intended only for the addressed recipient.
                </div>
              </div>
            `,
            options: ['Standard IT Protocol', 'Suspicious Request', 'Normal Maintenance'],
            answer: 'Suspicious Request',
            clicked: false
          },
          urgency: {
            name: 'Urgency Level',
            value: '30 minute deadline',
            options: ['Standard Timeline', 'Artificial Urgency', 'Normal Priority'],
            answer: 'Artificial Urgency',
            clicked: false
          },
          attachment: {
            name: 'Executable File',
            value: 'anti-virus.exe',
            options: ['Legitimate Software', 'Malicious File', 'Company Anti-virus'],
            answer: 'Malicious File',
            clicked: false
          },
          contact: {
            name: 'Contact Method',
            value: '+1 (555) 123-4567',
            options: ['Valid IT Support', 'Unknown Number', 'Suspicious Contact'],
            answer: 'Suspicious Contact',
            clicked: false
          },
          otherEmails: [
            {
              subject: "Team Meeting Notes - Q3 Planning",
              from: "sarah.johnson@company.com",
              preview: "Hi team, Attached are the meeting notes from yesterday's quarterly planning session. Please review the action items assigned to you...",
              time: "10:30 AM",
              unread: false
            },
            {
              subject: "Office Holiday Party - Save the Date!",
              from: "events@company.com",
              preview: "Join us for our annual holiday celebration on December 15th at the Grand Hotel. RSVP required by December 1st...",
              time: "Yesterday",
              unread: true
            },
            {
              subject: "Updated Employee Benefits Guide 2024",
              from: "hr@company.com",
              preview: "Please find attached the updated employee benefits guide for 2024. Open enrollment period begins next week...",
              time: "2 days ago",
              unread: false
            }
          ]
        }
      ]
    },
    {
      id: 6,
      name: "Password Security Challenge", 
      type: "password-security",
      difficulty: "easy",
      description: "Test your knowledge of password best practices and common attack methods",
      component: Pwd,
      scene: [
        {
          requirements: {
            minLength: 12,
            uppercase: true,
            lowercase: true,
            numbers: true,
            symbols: true
          },
          feedback: {
            tooShort: "Password must be at least 12 characters long",
            noUppercase: "Include at least one uppercase letter",
            noLowercase: "Include at least one lowercase letter", 
            noNumbers: "Include at least one number",
            noSymbols: "Include at least one special character",
            weak: "This password is too weak",
            medium: "This password has medium strength",
            strong: "This is a strong password!"
          },
          commonPasswords: [
            "password123",
            "qwerty123",
            "letmein123",
            "admin123",
            "welcome123"
          ],
          passwordTips: [
            "Use a mix of letters, numbers and symbols",
            "Make it at least 12 characters long",
            "Don't use personal information",
            "Avoid common substitutions",
            "Use a unique password for each account"
          ],
          strengthLevels: {
            0: "Very Weak",
            1: "Weak",
            2: "Medium", 
            3: "Strong",
            4: "Very Strong"
          },
          strengthColors: {
            0: "red",
            1: "orange", 
            2: "yellow",
            3: "light-green",
            4: "green"
          }
        }
      ]
    },
    {
      id: 7,
      name: "USB Drop Attack",
      type: "usb-drop",
      difficulty: "medium",
      description: "Respond to a physical security breach involving malicious USB devices",
      component: USB1,
      scene: [
        {
          phishing: true,
          sus: {
            options: ['Legitimate USB', 'Malicious USB', 'Company USB'],
            answer: 'Malicious USB',
            resp: false,
            clicked: false
          },
          title: {
            name: 'USB Found',
            value: 'You found a USB drive!',
            options: ['Safe to use', 'Potential security risk', 'Company property'],
            answer: 'Potential security risk',
            clicked: false
          },
          action: {
            name: 'Initial Action',
            value: 'Do you want to plug it into your PC?',
            options: ['Yes, plug it in', 'No, report to IT', 'Check with colleagues first'],
            answer: 'No, report to IT',
            clicked: false
          },
          warning: {
            name: 'Security Warning',
            value: 'Unknown USB devices can contain malware that automatically executes when connected',
            options: ['Important security advice', 'Optional guideline', 'Technical information'],
            answer: 'Important security advice',
            clicked: false
          },
          consequence: {
            name: 'Potential Outcome',
            value: 'Connecting unknown USB devices can lead to ransomware, data theft, or system compromise',
            options: ['Real threat', 'Exaggerated risk', 'Minor concern'],
            answer: 'Real threat',
            clicked: false
          }
        }
      ]
    },
    {
      id: 8,
      name: "Fake Software Update",
      type: "malware",
      difficulty: "medium",
      description: "Identify and block malicious software masquerading as legitimate updates",
      component: null,
      scene: [
        {
          phishing: true,
          sus: {
            options: ['Legitimate Update', 'Malware Update', 'System Update'],
            answer: 'Malware Update',
            resp: false,
            clicked: false
          },
          content: {
            popupTitle: {
              name: 'Popup Title',
              value: 'Adobe Flash Player Update Required',
              options: ['Legitimate Adobe Update', 'Fake Update Notice', 'System Notification'],
              answer: 'Fake Update Notice',
              clicked: false
            },
            updateMessage: {
              name: 'Update Message',
              value: 'Your Adobe Flash Player is out of date. Please update now to access video content.',
              options: ['Valid Update Request', 'Deceptive Message', 'Normal Prompt'],
              answer: 'Deceptive Message',
              clicked: false
            },
            publisher: {
              name: 'Software Publisher',
              value: 'Publisher: Adobe Systems (Unverified)',
              options: ['Verified Publisher', 'Unverified Source', 'Unknown Publisher'],
              answer: 'Unverified Source',
              clicked: false
            },
            fileDetails: {
              name: 'File Details',
              value: 'flash_player_update.exe (2.1 MB)',
              options: ['Legitimate File', 'Suspicious Executable', 'Normal Update File'],
              answer: 'Suspicious Executable',
              clicked: false
            },
            downloadSource: {
              name: 'Download Source',
              value: 'http://adobe-flash-update.net/download',
              options: ['Official Adobe Domain', 'Impersonation Domain', 'Trusted Source'],
              answer: 'Impersonation Domain',
              clicked: false
            },
            securityWarning: {
              name: 'Security Warning',
              value: 'Windows Defender is temporarily disabled for this installation',
              options: ['Normal Behavior', 'Security Risk', 'Standard Practice'],
              answer: 'Security Risk',
              clicked: false
            },
            updateButton: {
              name: 'Update Button',
              value: 'Update Now (Required)',
              options: ['Safe Action', 'Malicious Prompt', 'Normal Update'],
              answer: 'Malicious Prompt',
              clicked: false
            },
            certificateStatus: {
              name: 'Certificate Status',
              value: 'Digital Signature: Invalid',
              options: ['Valid Certificate', 'Invalid Signature', 'Expired Certificate'],
              answer: 'Invalid Signature',
              clicked: false
            }
          }
        }
      ]
    },
    {
      id: 9,
      name: "CEO Fraud Email",
      type: "business-email-compromise",
      difficulty: "hard",
      description: "Investigate a sophisticated business email compromise targeting executives",
      component: null
    },
    {
      id: 10,
      name: "Crypto Wallet Scam",
      type: "cryptocurrency-scam",
      difficulty: "hard",
      description: "Analyze and prevent cryptocurrency theft through fake wallet schemes",
      component: null
    }
  ]);

  const [selectedMail, setSelectedMail] = useState(null);
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [selectedElement, setSelectedElement] = useState(null);
  const [score, setScore] = useState(0);
  const [susAnswer, setSusAnswer] = useState(null);
  const [levelCleared, setLevelCleared] = useState(false);
  const [levelFailed, setLevelFailed] = useState(false);
  const [clickedElements, setClickedElements] = useState([]);

  const getClickableItems = (scenario) => {
    if (!scenario) return 0;

    let count = 0;
    if (scenario.type === 'phishing') {
      const mail = scenario.scene[0];
      if (mail?.phishing) {
        mail.subject?.options && count++;
        mail.from?.options && count++;
        mail.body?.options && count++;
        mail.sus?.options && count++;
      }
    } else if (scenario.type === 'malware') {
      const scene = scenario.scene[0];
      if (scene?.phishing) {
        count = Object.keys(scene.content).length;
      }
    } else if (scenario.type === 'usb-drop') {
      // Count the number of steps with options for USB Drop Attack
      const steps = scenario.scene[0]?.steps || [];
      count = steps.filter(step => step.options && step.options.length > 0).length;
    } else if (scenario.type === 'credential-theft') {
      const scene = scenario.scene[0];
      if (scene?.phishing) {
        count = Object.keys(scene).length - 2; // Exclude 'phishing' and 'sus' from count
      }
    } else if (scenario.type === 'social-engineering') {
      const scene = scenario.scene[0];
      if (scene?.phishing) {
        count = Object.keys(scene).length - 1; // Exclude 'phishing' from count
      }
    }
    return count;
  };

  useEffect(() => {
    if (selectedScenario && selectedScenario.type !== 'password-security' && selectedScenario.type !== 'usb-drop') {
      const clickableItems = getClickableItems(selectedScenario);
      const allElementsClicked = clickedElements.length === clickableItems;

      if (allElementsClicked) {
        if (score === clickableItems) {
          setLevelCleared(true);
          setLevelFailed(false);
          const timer = setTimeout(() => {
            setLevelCleared(false);
            setSelectedScenario(null);
          }, 3000);
          return () => clearTimeout(timer);
        } else {
          setLevelFailed(true);
          setLevelCleared(false);
          const timer = setTimeout(() => {
            setLevelFailed(false);
            setSelectedScenario(null);
          }, 3000);
          return () => clearTimeout(timer);
        }
      }
    }
  }, [score, selectedScenario, clickedElements]);

  const handleScenarioClick = (scenario) => {
    setSelectedScenario(scenario);
    setSelectedMail(null);
    setScore(0);
    setLevelCleared(false);
    setLevelFailed(false);
    setClickedElements([]);
  };

  const handleMailClick = (mail) => {
    setSelectedMail(mail);
    setScore(0);
    setLevelCleared(false);
    setLevelFailed(false);
    setClickedElements([]);
  };

  const handleElementClick = (element) => {
    setSelectedElement(element);
  };

  const handleSusClick = (answer) => {
    if (!selectedMail.sus.resp) {
      if (answer === selectedMail.sus.answer) {
        setScore(prev => prev + 1);
      }
      selectedMail.sus.resp = true;
      selectedMail.sus.clicked = true;
      if (!clickedElements.includes('sus')) {
        setClickedElements(prev => [...prev, 'sus']);
      }
    }
    setSusAnswer(answer);
  };

  const handleAnswerClick = (answer) => {
    const isCorrect = answer === selectedElement.answer;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    setSelectedElement({
      ...selectedElement,
      clicked: true,
      isCorrect: isCorrect
    });
    if (!clickedElements.includes(selectedElement.name)) {
      setClickedElements(prev => [...prev, selectedElement.name]);
    }
    setSelectedElement(null);
  }

  return (
    <div className='w-full z-0 min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-300 pt-[5rem] px-8 pb-8 tracking-wider overflow-hidden'>
      {levelCleared && <div className='h-screen fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black/70 backdrop-blur-sm'>
        <div className='flex flex-col gap-3 bg-black/50 rounded-xl p-6 justify-center items-center border border-emerald-500/30 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-300'>
          <h1 className='text-lg text-emerald-400'>Level Cleared!</h1>
          <p className='text-xs text-gray-400'>You have successfully cleared the level.</p>
          <button className='text-xs text-emerald-400 hover:text-emerald-300 transition-colors border border-emerald-400/30 px-4 py-2 rounded-lg hover:border-emerald-400/50 hover:bg-emerald-400/5' onClick={() => { setSelectedScenario(null); setLevelCleared(false) }}>Back to Scenarios</button>
        </div>
      </div>}

      {levelFailed && <div className='h-screen fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black/70 backdrop-blur-sm'>
        <div className='flex flex-col gap-3 bg-black/50 rounded-xl p-6 justify-center items-center border border-rose-500/30 hover:border-rose-500/50 hover:bg-rose-500/5 transition-all duration-300'>
          <h1 className='text-lg text-rose-400'>Level Not Cleared</h1>
          <p className='text-xs text-gray-400'>Some of your answers were incorrect. Try again!</p>
          <button className='text-xs text-rose-400 hover:text-rose-300 transition-colors border border-rose-400/30 px-4 py-2 rounded-lg hover:border-rose-400/50 hover:bg-rose-400/5' onClick={() => { setSelectedScenario(null); setLevelFailed(false) }}>Back to Scenarios</button>
        </div>
      </div>}

      <div className='h-full flex flex-col gap-3 max-w-7xl mx-auto'>
      <button
        onClick={() => navigate(`/home/${params.dept}`)}
        className='text-xs text-indigo-400 hover:text-indigo-300 transition-colors border border-indigo-400/30 px-4 py-2 rounded-lg hover:border-indigo-400/50 hover:bg-indigo-400/5 mt-2'
      >
        ← Back to Hub
      </button>
        <div className='flex items-center justify-between'>
          {selectedScenario && (
            <div className='flex gap-5 items-center'>
              <h1 className='text-base text-purple-400'>{selectedScenario ? selectedScenario.name : 'Select a Scenario'}</h1>
              <button
                onClick={() => setSelectedScenario(null)}
                className='text-xs text-indigo-400 hover:text-indigo-300 transition-colors border border-indigo-400/30 px-4 py-2 rounded-lg hover:border-indigo-400/50 hover:bg-indigo-400/5'
              >
                ← Back to Scenarios
              </button>
            </div>
          )}
        </div>

        {selectedScenario ? (
          <div className='flex-1 flex flex-col lg:flex-row gap-6'>
            {selectedScenario.component && (
              <selectedScenario.component
                selectedScenario={selectedScenario}
                setSelectedScenario={setSelectedScenario}
                selectedMail={selectedMail}
                handleMailClick={handleMailClick}
                handleElementClick={handleElementClick}
                setLevelCleared={setLevelCleared}
                setLevelFailed={setLevelFailed}
              />
            )}
            {selectedScenario.type !== 'password-security' && (
              <div className='w-full lg:w-1/4 bg-black/50 rounded-xl border border-purple-500/30'>
                <div className='flex flex-col p-4 border-b border-purple-500/20'>
                  <h1 className='text-purple-400 text-sm'>Actions</h1>
                  <p className='text-gray-400 text-xs mt-1'>Select elements to perform Investigation</p>
                </div>
                {!susAnswer && !selectedElement && selectedScenario.type === 'phishing' && selectedMail?.phishing ?
                  <div className='flex-1 flex flex-col gap-3 p-4'>
                    <h1 className='text-xs text-gray-300'>What do you think about this mail?</h1>
                    <div className='flex flex-col gap-2'>
                      {selectedMail.sus.options.map(el => 
                        <div onClick={() => handleSusClick(el)} 
                          className='p-3 text-xs text-gray-300 border border-purple-500/30 rounded-lg cursor-pointer hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-300'
                        >
                          {el}
                        </div>
                      )}
                    </div>
                  </div>
                  : selectedElement && (
                    <div className='flex-1 p-4 flex flex-col gap-3'>
                      <h1 className='text-xs text-gray-300'>Investigation options for {selectedElement.name}</h1>
                      <div className='flex flex-col gap-2'>
                        {selectedElement.options.map(el => 
                          <div onClick={() => handleAnswerClick(el)} 
                            className='p-3 text-xs text-gray-300 border border-purple-500/30 rounded-lg cursor-pointer hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-300'
                          >
                            {el}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                {selectedScenario.scene[0]?.phishing && (
                  <div className='p-4 border-t border-purple-500/20'>
                    <div className='flex flex-col gap-3'>
                      <div className='flex justify-between text-xs text-gray-400'>
                        <span>Clickable Items:</span>
                        <span>{getClickableItems(selectedScenario)}</span>
                      </div>
                      <div className='flex justify-between text-xs text-emerald-400'>
                        <span>Score:</span>
                        <span>{score}</span>
                      </div>
                      <div className='flex justify-between text-xs text-purple-400'>
                        <span>Investigated:</span>
                        <span className='truncate ml-2'>{clickedElements.join(', ')}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-400/20 scrollbar-track-transparent hover:scrollbar-thumb-purple-400/30'>
            {scenarios.map((scenario) => (
              <div 
                onClick={() => handleScenarioClick(scenario)} 
                key={scenario.id} 
                className='transform-gpu p-6 border border-purple-500/30 rounded-xl bg-black/50 backdrop-blur-sm cursor-pointer hover:border-purple-500 hover:bg-purple-500/20 group hover:text-white hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all duration-300'
              >
                <h1 className='text-base text-purple-400 mb-2 group-hover:text-white'>{scenario.name}</h1>
                <p className='text-gray-400 text-xs leading-relaxed group-hover:text-white'>{scenario.description}</p>
                <p className='text-xs text-emerald-400 mt-3 group-hover:text-white'>Difficulty: {scenario.difficulty}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}