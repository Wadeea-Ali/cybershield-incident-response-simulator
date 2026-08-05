const easyIncidents = [
{
  title: "Suspicious Email",

  question: "You receive an email saying your bank account will be locked unless you click a link immediately. What should you do?",

  choices: [
    "Click the link immediately",
    "Delete the email or report it as phishing",
    "Reply with your bank details",
    "Forward it to your friends"
  ],

  correctChoice: 1
},
{
  title: "Unknown USB",

  question: "You find a USB drive in the office parking lot. What is the safest action?",

  choices: [
    "Plug it into your computer",
    "Take it home",
    "Give it to the IT department",
    "Use it to save your files"
  ],

  correctChoice: 2
},
{
  title: "Unexpected OTP",

  question: "You receive a verification code (OTP) on your phone that you didn't request. What should you do?",

  choices: [
    "Share it with whoever asks",
    "Ignore it and never share the code",
    "Post it in a group chat",
    "Enter it on random websites"
  ],

  correctChoice: 1
},
{
  title: "Public Wi-Fi",

  question: "You need to check your online banking while using free airport Wi-Fi. What is the safest choice?",

  choices: [
    "Log in immediately",
    "Wait until using a trusted network or VPN",
    "Share your hotspot password",
    "Turn off your antivirus"
  ],

  correctChoice: 1
},
{
  title: "Strong Password",

  question: "Which password is the most secure?",

  choices: [
    "12345678",
    "Password123",
    "Summer2025",
    "T!ger#91Cloud"
  ],

  correctChoice: 3
},
{
  title: "Fake Prize",

  question: "A website says you won a new phone and asks for your credit card details. What should you do?",

  choices: [
    "Enter your card details",
    "Close the website",
    "Share the link",
    "Download the prize form"
  ],

  correctChoice: 1
},
{
  title: "Locked Computer",

  question: "You leave your desk for lunch. What should you do before leaving?",

  choices: [
    "Leave your computer unlocked",
    "Turn off the monitor only",
    "Lock your computer",
    "Ask a coworker to watch it"
  ],

  correctChoice: 2
},
{
  title: "Software Update",

  question: "Your laptop asks you to install a security update. What should you do?",

  choices: [
    "Ignore it forever",
    "Install the update",
    "Delete the update",
    "Turn off updates permanently"
  ],

  correctChoice: 1
},
{
  title: "Unknown Attachment",

  question: "A stranger emails you an attachment called 'Invoice.zip'. What should you do?",

  choices: [
    "Open it immediately",
    "Delete or report the email",
    "Forward it to your coworkers",
    "Rename the file and open it"
  ],

  correctChoice: 1
},
{
  title: "Phone Scam",

  question: "Someone calls claiming to be from your bank and asks for your PIN. What should you do?",

  choices: [
    "Give them the PIN",
    "Hang up and contact the bank directly",
    "Give only half the PIN",
    "Text them the PIN later"
  ],

  correctChoice: 1
},
{
  title: "Unknown App",

  question: "A flashlight app asks for permission to access your contacts and microphone. What should you do?",

  choices: [
    "Allow every permission",
    "Review the permissions before allowing access",
    "Share the app with friends",
    "Ignore the permission request"
  ],

  correctChoice: 1
},
{
  title: "Shared Password",

  question: "Your friend asks to borrow your streaming account password. What is the safest habit?",

  choices: [
    "Share your password",
    "Use unique passwords and don't share them",
    "Post the password in chat",
    "Use one password for everything"
  ],

  correctChoice: 1
},
{
  title: "Browser Warning",

  question: "Your browser says 'Connection Not Secure' before you enter your password. What should you do?",

  choices: [
    "Continue anyway",
    "Leave the website",
    "Refresh the page",
    "Disable browser warnings"
  ],

  correctChoice: 1
},
{
  title: "QR Code",

  question: "You see a QR code stuck on an ATM with no explanation. What should you do?",

  choices: [
    "Scan it immediately",
    "Avoid scanning unknown QR codes",
    "Share it online",
    "Print another copy"
  ],

  correctChoice: 1
},
{
  title: "Social Media Link",

  question: "You receive a message from an unknown person asking you to click a link. What should you do?",

  choices: [
    "Click the link",
    "Ignore or delete the message",
    "Reply with your information",
    "Forward it to friends"
  ],

  correctChoice: 1
},
{
  title: "Lost Laptop",

  question: "You realize your work laptop is missing. What should you do first?",

  choices: [
    "Buy a new laptop",
    "Report it immediately",
    "Wait a few days",
    "Ignore it"
  ],

  correctChoice: 1
},
{
  title: "Password Reuse",

  question: "Why is using the same password for every account risky?",

  choices: [
    "It's faster",
    "If one account is hacked, the others may be at risk",
    "It makes passwords stronger",
    "There is no risk"
  ],

  correctChoice: 1
},
{
  title: "Fake IT Support",

  question: "Someone emails you pretending to be IT support and asks for your password. What should you do?",

  choices: [
    "Send your password",
    "Verify the request and never share your password",
    "Reply with your username only",
    "Ignore company policy"
  ],

  correctChoice: 1
},
{
  title: "Unknown Bluetooth",

  question: "Your phone receives a Bluetooth pairing request from an unknown device. What should you do?",

  choices: [
    "Accept it",
    "Reject the request",
    "Share your files",
    "Turn off your password"
  ],

  correctChoice: 1
},
{
  title: "Too Good to Be True",

  question: "An email offers you a job with a very high salary but asks for your passport and bank details first. What should you do?",

  choices: [
    "Send the information",
    "Ignore or verify the company before responding",
    "Pay the requested fee",
    "Forward it to everyone"
  ],

  correctChoice: 1
}
];

const mediumIncidents = [
{
  title: "Multiple Failed Logins",

  question: "The system detects 25 failed login attempts on an employee's account within two minutes. What should you do first?",

  choices: [
    "Ignore the attempts",
    "Lock the account and investigate",
    "Delete the account",
    "Restart the server"
  ],

  correctChoice: 1
},
{
  title: "Impossible Travel",

  question: "An employee successfully logs in from Bahrain and then from the UK five minutes later. What is the best first action?",

  choices: [
    "Assume they are traveling",
    "Verify the login with the employee",
    "Delete the employee's account",
    "Ignore the alert"
  ],

  correctChoice: 1
},
{
  title: "Phishing Report",

  question: "An employee reports clicking a suspicious email link but entered no credentials. What should you do first?",

  choices: [
    "Ignore the report",
    "Check the device for signs of compromise",
    "Delete the employee's mailbox",
    "Format the computer immediately"
  ],

  correctChoice: 1
},
{
  title: "Suspicious Download",

  question: "A user downloads an unknown '.exe' file from the internet. What is your first response?",

  choices: [
    "Allow them to continue",
    "Scan the file and isolate the device if necessary",
    "Delete all company files",
    "Turn off the internet"
  ],

  correctChoice: 1
},
{
  title: "USB Device Alert",

  question: "Security software detects that an unknown USB device was connected to a company laptop. What should you do first?",

  choices: [
    "Ignore the alert",
    "Investigate the device and scan the laptop",
    "Delete the user's account",
    "Restart the laptop"
  ],

  correctChoice: 1
},
{
  title: "Disabled Antivirus",

  question: "A workstation reports that antivirus protection has been disabled unexpectedly. What should you do?",

  choices: [
    "Ignore it",
    "Investigate why it was disabled",
    "Uninstall the antivirus",
    "Replace the computer"
  ],

  correctChoice: 1
},
{
  title: "Large File Transfer",

  question: "A user uploads several gigabytes of company files to a personal cloud storage account. What is the best first response?",

  choices: [
    "Ignore the upload",
    "Investigate the activity and notify security",
    "Delete all cloud accounts",
    "Restart the network"
  ],

  correctChoice: 1
},
{
  title: "Unknown Login",

  question: "An employee reports receiving a notification that someone logged into their account from another country. What should you do first?",

  choices: [
    "Ignore the notification",
    "Reset the password and investigate",
    "Delete the account",
    "Tell the employee to wait"
  ],

  correctChoice: 1
},
{
  title: "Website Defacement",

  question: "The company's homepage has suddenly been replaced with unauthorized content. What should you do first?",

  choices: [
    "Share the page on social media",
    "Take the website offline and investigate",
    "Ignore the change",
    "Restart employee computers"
  ],

  correctChoice: 1
},
{
  title: "Brute Force Attack",

  question: "The firewall detects repeated login attempts from the same external IP address. What should you do?",

  choices: [
    "Allow the attempts",
    "Block the IP address and investigate",
    "Delete the firewall logs",
    "Restart the firewall"
  ],

  correctChoice: 1
},
{
  title: "Unusual Network Traffic",

  question: "Network monitoring detects a workstation communicating with an unknown external server. What is your first action?",

  choices: [
    "Ignore it",
    "Investigate the workstation and connection",
    "Delete the workstation",
    "Turn off the company's internet"
  ],

  correctChoice: 1
},
{
  title: "Shared Credentials",

  question: "You discover two employees are using the same account to access company systems. What should you do?",

  choices: [
    "Allow them to continue",
    "Require separate accounts for each employee",
    "Delete both accounts",
    "Ignore the issue"
  ],

  correctChoice: 1
},
{
  title: "Unexpected Administrator",

  question: "A normal employee account suddenly receives administrator privileges. What should you do first?",

  choices: [
    "Ignore the change",
    "Investigate who granted the permissions",
    "Delete Windows",
    "Restart the server"
  ],

  correctChoice: 1
},
{
  title: "Security Patch",

  question: "A critical vulnerability has been announced for your company's operating system. What should you do?",

  choices: [
    "Wait several months",
    "Test and apply the security update",
    "Ignore the announcement",
    "Delete the operating system"
  ],

  correctChoice: 1
},
{
  title: "Suspicious Email Attachment",

  question: "Several employees report receiving the same suspicious attachment. What should you do first?",

  choices: [
    "Ignore the reports",
    "Block the email and warn all employees",
    "Delete every mailbox",
    "Restart the email server"
  ],

  correctChoice: 1
},
{
  title: "Sensitive File Access",

  question: "An employee who normally works in HR accesses confidential Finance documents. What should you do?",

  choices: [
    "Ignore the activity",
    "Review whether the access was authorized",
    "Delete the documents",
    "Restart the file server"
  ],

  correctChoice: 1
},
{
  title: "Lost Company Phone",

  question: "An employee reports losing their company phone. What should you do first?",

  choices: [
    "Ignore it",
    "Remotely lock or wipe the device if possible",
    "Buy them a new phone immediately",
    "Delete their email account"
  ],

  correctChoice: 1
},
{
  title: "Disabled MFA",

  question: "A user disables Multi-Factor Authentication on their account without approval. What should you do?",

  choices: [
    "Leave it disabled",
    "Re-enable MFA and investigate why it was turned off",
    "Delete the account",
    "Restart the authentication server"
  ],

  correctChoice: 1
},
{
  title: "Suspicious Login Time",

  question: "A user account logs into the company network at 3:00 AM, which is unusual for that employee. What should you do?",

  choices: [
    "Ignore the login",
    "Verify whether the activity is legitimate",
    "Delete the account",
    "Restart the network"
  ],

  correctChoice: 1
},
{
  title: "Malware Detected",

  question: "Endpoint security software reports malware on a user's computer. What is your first action?",

  choices: [
    "Ignore the alert",
    "Isolate the computer and investigate",
    "Delete the user's files",
    "Restart the printer"
  ],

  correctChoice: 1
}
];

const hardIncidents = [
{
  title: "Ransomware Outbreak",

  question: "Multiple employees report that their files have been encrypted and a ransom note appears on their screens. What should you do first?",

  choices: [
    "Pay the ransom immediately",
    "Disconnect the affected systems from the network",
    "Restart all computers",
    "Delete the ransom note"
  ],

  correctChoice: 1
},
{
  title: "Data Breach",

  question: "Security monitoring detects a large amount of sensitive customer data being transferred to an unknown external server. What should you do first?",

  choices: [
    "Ignore the transfer",
    "Isolate the affected system and investigate",
    "Delete the server logs",
    "Shut down the entire company network"
  ],

  correctChoice: 1
},
{
  title: "Domain Administrator Compromised",

  question: "A Domain Administrator account logs in from an unfamiliar location at 2:00 AM. What should you do first?",

  choices: [
    "Ignore the login",
    "Disable the account and begin an investigation",
    "Restart the domain controller",
    "Delete Active Directory"
  ],

  correctChoice: 1
},
{
  title: "SQL Injection",

  question: "Your web application begins returning database errors and the WAF reports SQL Injection attempts. What should you do first?",

  choices: [
    "Restart the database server",
    "Block the attack and investigate the affected application",
    "Delete the database",
    "Ignore the alerts"
  ],

  correctChoice: 1
},
{
  title: "Business Email Compromise",

  question: "Finance receives an urgent request from the CEO to transfer $500,000 to a new supplier. The email appears legitimate. What should you do first?",

  choices: [
    "Approve the transfer",
    "Verify the request through another trusted communication channel",
    "Reply asking for the bank account again",
    "Forward the email to all employees"
  ],

  correctChoice: 1
},
{
  title: "Insider Threat",

  question: "A departing employee downloads thousands of confidential files shortly before leaving the company. What should you do first?",

  choices: [
    "Ignore the activity",
    "Suspend the account and investigate",
    "Delete every company file",
    "Restart the server"
  ],

  correctChoice: 1
},
{
  title: "DDoS Attack",

  question: "Your public website suddenly becomes unavailable because of millions of incoming requests. What should you do first?",

  choices: [
    "Turn off the firewall",
    "Activate DDoS protection and notify the response team",
    "Delete the website",
    "Restart employee computers"
  ],

  correctChoice: 1
},
{
  title: "API Key Leak",

  question: "A developer accidentally uploads cloud API keys to a public GitHub repository. What should you do first?",

  choices: [
    "Leave the keys unchanged",
    "Revoke the exposed keys immediately",
    "Delete the repository only",
    "Ignore the incident"
  ],

  correctChoice: 1
},
{
  title: "Malware Spreading",

  question: "Endpoint security detects malware spreading automatically between employee computers. What should you do first?",

  choices: [
    "Restart every workstation",
    "Isolate infected systems from the network",
    "Delete antivirus software",
    "Ignore the alerts"
  ],

  correctChoice: 1
},
{
  title: "Cloud Storage Exposure",

  question: "A cloud storage bucket containing customer information has accidentally been made public. What should you do first?",

  choices: [
    "Ignore it",
    "Restrict public access immediately",
    "Delete all customer files",
    "Restart the cloud service"
  ],

  correctChoice: 1
},
{
  title: "Credential Stuffing",

  question: "Thousands of login attempts using stolen usernames and passwords are detected. What should you do first?",

  choices: [
    "Ignore the activity",
    "Block the attack and require password resets where needed",
    "Delete every account",
    "Disable the website"
  ],

  correctChoice: 1
},
{
  title: "Supply Chain Attack",

  question: "A trusted software update is discovered to contain malware. What should you do first?",

  choices: [
    "Continue installing the update",
    "Stop deployment and isolate affected systems",
    "Delete all company software",
    "Restart the servers"
  ],

  correctChoice: 1
},
{
  title: "Privilege Escalation",

  question: "A standard employee account suddenly gains administrator privileges without authorization. What should you do first?",

  choices: [
    "Ignore the change",
    "Remove the privileges and investigate",
    "Restart the computer",
    "Delete the account permanently"
  ],

  correctChoice: 1
},
{
  title: "Malicious Insider",

  question: "An employee intentionally disables endpoint protection before accessing confidential files. What should you do first?",

  choices: [
    "Ignore the activity",
    "Contain the device and notify the incident response team",
    "Restart Windows",
    "Delete all company files"
  ],

  correctChoice: 1
},
{
  title: "Zero-Day Vulnerability",

  question: "A critical zero-day vulnerability affecting your company's software has just been announced. What should you do first?",

  choices: [
    "Ignore the announcement",
    "Apply temporary mitigations and assess affected systems",
    "Reinstall every computer",
    "Delete the application"
  ],

  correctChoice: 1
},
{
  title: "DNS Hijacking",

  question: "Employees report being redirected to fake websites even when entering the correct company URL. What should you do first?",

  choices: [
    "Ignore the reports",
    "Investigate possible DNS compromise",
    "Restart employee computers",
    "Delete the website"
  ],

  correctChoice: 1
},
{
  title: "Suspicious PowerShell Activity",

  question: "EDR detects encoded PowerShell commands running on several employee workstations. What should you do first?",

  choices: [
    "Ignore the alerts",
    "Isolate the affected endpoints and investigate",
    "Delete PowerShell",
    "Restart every workstation"
  ],

  correctChoice: 1
},
{
  title: "Web Server Compromise",

  question: "Your web server begins creating unknown administrator accounts automatically. What should you do first?",

  choices: [
    "Ignore the accounts",
    "Take the server offline and investigate",
    "Delete all user accounts",
    "Restart the website"
  ],

  correctChoice: 1
},
{
  title: "Lateral Movement",

  question: "Security tools detect an attacker moving between multiple internal systems using stolen credentials. What should you do first?",

  choices: [
    "Ignore the alerts",
    "Contain the affected systems and begin incident response",
    "Restart employee computers",
    "Delete Active Directory"
  ],

  correctChoice: 1
},
{
  title: "Multiple Critical Alerts",

  question: "Within minutes, the SIEM reports ransomware activity, suspicious administrator logins, and large outbound data transfers. What should you do first?",

  choices: [
    "Investigate each alert one by one",
    "Activate the incident response plan and contain the affected systems",
    "Restart every server",
    "Delete all security logs"
  ],

  correctChoice: 1
}
];