const easyIncidents = [
  {
    title: "Phishing Email",

    question:
      "You receive an email from your bank asking you to verify your account by clicking a link. What should you do?",

    choices: [
      "Click the link and log in",
      "Forward the email to your coworkers",
      "Report the email to the IT/Security team",
      "Reply with your account details"
    ],

    correctChoice: 2
  } ,
  {
    title: "Unauthorized Access Attempt",

    question:
      "You notice multiple failed login attempts on your account. What is the best course of action?",

    choices: [
      "Ignore the failed login attempts",
      "Change your password immediately",
      "Notify your supervisor",
      "Attempt to identify the source of the attempts"
    ],

    correctChoice: 1
  },
  {
    title: "Suspicious USB Drive",

    question:
      "You find a USB drive in the office parking lot. What should you do?",
    choices: [
      "Insert the USB drive into your computer",
      "Report the USB drive to the IT/Security team",
      "Delete the files on the USB drive",
      "Give the USB drive to a coworker"
    ],
    correctChoice: 1
  } , {
    title: "Social Engineering Attempt",

    question:
      "You receive a phone call from someone claiming to be from IT support. What should you do?",
    choices: [
      "Provide your password and other sensitive information",
      "Verify the caller's identity and follow proper verification procedures",
      "Hang up and call the IT department directly",
      "Share your login credentials with the caller"
    ],
    correctChoice: 2
  } ,
  {
    title: "Ransomware Attack",
    question:
      "Your computer is infected with ransomware. What is the best course of action?",
    choices: [
      "Pay the ransom to restore your files",
      "Disconnect the infected computer from the network",
      "Attempt to remove the malware yourself",
      "Report the incident to the authorities"
    ],
    correctChoice: 1
  } , 
  {
    title: "Data Breach Notification",

    question:
      "You receive a notification about a potential data breach. What is the best course of action?",
    choices: [
      "Ignore the notification",
      "Change your passwords immediately",
      "Report the incident to the IT/Security team",
      "Share the information with your colleagues"
    ],
    correctChoice: 2
  } ,{
    title: "Suspicious Network Activity",

    question:
      "You notice unusual network activity on your system. What is the best course of action?",

    choices: [
      "Ignore the activity",
      "Investigate the source of the activity",
      "Report the activity to the IT/Security team",
      "Disconnect the system from the network"
    ],
    correctChoice: 2
  } , {
    title: "Password Security",

    question:
      "What is the best practice for maintaining password security?",
    choices: [
      "Use the same password for all accounts",
      "Use complex, unique passwords for each account",
      "Share passwords with trusted colleagues",
      "Write passwords down and store them in a secure location"
    ],
    correctChoice: 1
  } , {
    title: "Insider Threat",

    question:
      "You suspect an employee of your organization is a potential insider threat. What is the best course of action?",
    choices: [
      "Ignore the suspicion",
      "Document the behavior and report it to management",
      "Confront the employee directly",
      "Fire the employee immediately"
    ],
    correctChoice: 1
  } , {
    title: "Denial of Service (DoS) Attack",

    question:
      "Your organization is experiencing a Denial of Service (DoS) attack. What is the best course of action?",
    choices: [
      "Continue with your regular activities",
      "Immediately disconnect affected systems from the network",
      "Notify your supervisor and wait for further instructions",
      "Attempt to identify and neutralize the threat yourself"
    ],
    correctChoice: 1
  } , {
    title: "Physical Security Breach",

    question:
      "You notice a suspicious individual on your organization's property. What is the best course of action?",
    choices: [
      "Ignore the individual",
      "Confront the individual directly",
      "Report the incident to security",
      "Follow the individual to determine their intent"
    ],
    correctChoice: 2
  } , {
    title: "Software Vulnerability",

    question:
      "Your organization has discovered a potential software vulnerability. What is the best course of action?",
    choices: [
      "Ignore the vulnerability",
      "Apply the available security patch immediately",
      "Report the vulnerability to the software vendor",
      "Wait for more information before taking any action"
    ],
    correctChoice: 1
  } , {
    title: "Email Spoofing",

    question:
      "You receive an email that appears to be from a trusted source but contains suspicious links or attachments. What is the best course of action?",
    choices: [
      "Click on the links and open the attachments",
      "Report the email to the IT/Security team",
      "Delete the email and ignore it",
      "Reply to the sender to verify their identity"
    ],
    correctChoice: 1
  } , {
    title: "Brute Force Attack",

    question:
      "You notice multiple failed login attempts on your account. What is the best course of action?",
    choices: [
      "Ignore the failed login attempts",
      "Change your password immediately",
      "Notify your supervisor",
      "Attempt to identify the source of the attempts"
    ],
    correctChoice: 1
  } , {
    title: "Zero-Day Exploit",

    question:
      "Your organization has discovered a zero-day exploit. What is the best course of action?",
    choices: [
      "Ignore the exploit",
      "Apply the available security patch immediately",
      "Report the exploit to the software vendor",
      "Wait for more information before taking any action"
    ],
    correctChoice: 1
  } , {
    title: "Social Media Security",

    question:
      "What is the best practice for maintaining social media security?",
    choices: [
      "Share your personal information freely",
      "Use strong, unique passwords for each social media account",
      "Accept friend requests from unknown individuals",
      "Post sensitive information about your organization"
    ],
    correctChoice: 1
  }
];


const mediumIncidents = [
  {
    title: "Malware Infection",

    question:
      "Your computer is running slow and you notice unusual pop-ups. What is the best course of action?",

    choices: [
      "Ignore the pop-ups and continue using the computer",
      "Download and install a reputable antivirus program",
      "Shut down the computer and restart it",
      "Report the issue to the IT/Security team"
    ],

    correctChoice: 1
  }
];

const hardIncidents = [
  {
    title: "Advanced Persistent Threat (APT)",

    question:
      "You suspect your organization is under a sophisticated cyber attack. What should you do?",

    choices: [
      "Continue with your regular activities",
      "Immediately disconnect affected systems from the network",
      "Notify your supervisor and wait for further instructions",
      "Attempt to identify and neutralize the threat yourself"
    ],

    correctChoice: 1
  }
];