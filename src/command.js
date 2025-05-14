
const now = new Date();

export const commands = {
  help: `
Available commands:
help - Show available commands    about - About this terminal
clear - Clear the terminal        hack - Attempt a system breach
trace - Trace network activity    status - System status report
reboot - Reboot the system        virus - Deploy a virus
scan - Network port scan          sudo - Try admin privileges
time - Get current system time    smile - Show a smiley face
bunny - Show a bunny              dog - Show a dog
`,

  about: `
Fake Terminal v1.1
Created for learning.
Built by Neha Ghariyal using React.
`,

  hack: `
   
   [̲̅$̲̅(̲̅ιοο̲̅)̲̅$̲̅]

 Initializing breach sequence...
 Brute force in progress...
 Firewall detected, rerouting via proxy...
 Connecting to dark web...
 Access granted. You've been watched 👁️.
`,

  trace: `
 Starting trace...
 Analyzing hops...
 Initializing packet capture...
 Package 1: SYN packet sent...
 Package 2: ACK response received...
 Connection established. Sending payload...
 10.45.23.1 → 104.91.20.33 → 17.58.23.21 → 192.168.1.15 → 172.67.88.2
 Loading route data...
 Analyzing packet loss...
 Timeout error: 192.168.1.15 unreachable
 Encrypted node detected at final hop.
 Access denied at final hop. Possibly encrypted node.
 Decrypting... [FAILED]
 Intercepted by firewall. Intrusion attempt blocked.
 Trace completed. Final destination unreachable.
`,

  status: `
 CPU: 23% usage
 CPU: 23% usage
 RAM: 6.2GB / 16GB
 DISK: 127GB free
 Network: Secure VPN active
 System Integrity: Stable
`,

  reboot: `
 Saving all sessions...
 Dumping logs...
 Restarting services...
 Reboot complete. System uptime: 00:00:01
`,

  virus: `
     ______
  .-'      '-.
 /            \\
|              |
|,  .-.  .-.  ,|
| )(_o/  \\o_)( |
|/     /\\     \\|
(_     ^^     _)
 \\__|IIIIII|__/
  | \\IIIIII/ |
  \\          /
   \`.______.'  
    ___|  |___

 Generating payload...
 Injecting into system32.dll...
 Warning: Antivirus detected intrusion!
 Bypassing...
 Virus.exe successfully deployed.
`,

  scan: `
 Port scan in progress...
 - 22  (SSH)          : OPEN
 - 80  (HTTP)         : OPEN
 - 443 (HTTPS)        : OPEN
 - 3306 (MySQL)       : CLOSED
 - 8080 (Dev Server)  : OPEN
Scan complete. Potential vulnerabilities found.
`,

  sudo: `
 Permission denied: You are not root.
`,

  time: `
 System Time: ${now.toLocaleTimeString()}
 Date: ${Date()}
 Timezone: Hacker Standard Time (HST)
`,

  smile: `
   _____  
  /     \\
 |  O O  | 
 |   ^   | 
 |  \\_/  | 
  \\_____/

Keep smiling, hacker.
`,

bunny:`

   (\\(\\
  ( -.-)
  o_(")(")
`,

dog:`

 / \__
(    @\___
 /         O
/   (_____/
/_____/   U
`

};
