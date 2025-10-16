const questions = [
    {
        type: "MC",
        question: "What is the best analogy for TCP/IP?",
        options: [
            "A recipe book for cooking",
            "A set of traffic rules for the internet",
            "A dictionary for computer words",
            "A map of the internet"
        ],
        correctAnswer: "A set of traffic rules for the internet",
        explanation: "TCP/IP is like a set of traffic rules for the internet - it defines how data should be formatted, addressed, transmitted, routed, and received. Just as traffic rules ensure safe and organized movement of vehicles, TCP/IP ensures reliable and organized data transmission across networks."
    },
    {
        type: "MC",
        question: "Which of these is a valid IPv4 address?",
        options: [
            "192.168.1.256",
            "192.168.1.1",
            "192.168.1",
            "192.168.1.1.1"
        ],
        correctAnswer: "192.168.1.1",
        explanation: "A valid IPv4 address consists of four octets (numbers between 0-255) separated by periods. 192.168.1.1 is valid because each number is within the correct range. 192.168.1.256 is invalid because 256 is too large, and the other options don't have the correct number of octets."
    },
    {
        type: "MC",
        question: "What problem does ARP solve?",
        options: [
            "Finding the fastest route to a website",
            "Converting IP addresses to MAC addresses",
            "Protecting your computer from viruses",
            "Making your internet connection faster"
        ],
        correctAnswer: "Converting IP addresses to MAC addresses",
        explanation: "ARP (Address Resolution Protocol) solves the problem of mapping IP addresses to MAC addresses. When a device needs to communicate with another device on the same network, it needs to know the MAC address of the destination device. ARP helps find this mapping."
    },
    {
        type: "MC",
        question: "Why is the ARP cache useful?",
        options: [
            "It makes your computer run faster",
            "It saves time by remembering previous lookups",
            "It protects your network from hackers",
            "It helps you find websites faster"
        ],
        correctAnswer: "It saves time by remembering previous lookups",
        explanation: "The ARP cache stores recently resolved IP-to-MAC address mappings. This means the device doesn't need to send an ARP request every time it wants to communicate with a known device, making network communication more efficient."
    },
    {
        type: "MC",
        question: "When you send a message to a friend on the same WiFi network, what happens?",
        options: [
            "The message goes through the internet",
            "The message goes directly to your friend's device",
            "The message is stored in the cloud first",
            "The message is converted to a different format"
        ],
        correctAnswer: "The message goes directly to your friend's device",
        explanation: "When devices are on the same local network (like the same WiFi), they can communicate directly with each other without going through the internet. This is more efficient and faster than routing through external networks."
    },
    {
        type: "MC",
        question: "What happens when you use the 'ping' command?",
        options: [
            "Your computer sends a test message and waits for a reply",
            "Your computer downloads a file",
            "Your computer connects to a website",
            "Your computer checks for updates"
        ],
        correctAnswer: "Your computer sends a test message and waits for a reply",
        explanation: "The ping command uses ICMP (Internet Control Message Protocol) to send a test message to a specified destination and waits for a response. This is commonly used to check if a device is reachable and to measure network latency."
    },
    {
        type: "MC",
        question: "When would IGMP be most useful?",
        options: [
            "Sending an email to one person",
            "Watching a live stream with friends on the same network",
            "Downloading a file from a website",
            "Playing a single-player game"
        ],
        correctAnswer: "Watching a live stream with friends on the same network",
        explanation: "IGMP (Internet Group Management Protocol) is used for managing multicast group memberships. It's particularly useful when multiple devices on the same network need to receive the same data stream, like watching a live stream together."
    },
    {
        type: "MC",
        question: "Why might UDP be better than TCP for online gaming?",
        options: [
            "It's more secure",
            "It's faster, even if some data gets lost",
            "It uses less internet data",
            "It works better with wireless networks"
        ],
        correctAnswer: "It's faster, even if some data gets lost",
        explanation: "UDP is better for online gaming because it prioritizes speed over reliability. In gaming, getting the latest game state quickly is more important than ensuring every single packet arrives, as lost packets can be compensated for in the next update."
    },
    {
        type: "MC",
        question: "When would you want to use TCP instead of UDP?",
        options: [
            "When playing a fast-paced online game",
            "When sending an important email",
            "When watching a live stream",
            "When making a phone call"
        ],
        correctAnswer: "When sending an important email",
        explanation: "TCP is better for sending important emails because it ensures reliable delivery of data. It includes error checking and will retransmit lost packets, making sure the entire email arrives intact and in the correct order."
    },
    {
        type: "MC",
        question: "What's the main purpose of the TCP three-way handshake?",
        options: [
            "To make the connection faster",
            "To make sure both devices are ready to communicate",
            "To encrypt the connection",
            "To save bandwidth"
        ],
        correctAnswer: "To make sure both devices are ready to communicate",
        explanation: "The TCP three-way handshake (SYN, SYN-ACK, ACK) establishes a reliable connection between two devices by ensuring both sides are ready to communicate and have agreed on initial sequence numbers for the data transfer."
    },
    {
        type: "MC",
        question: "Why does TCP use a sliding window?",
        options: [
            "To make the connection more secure",
            "To prevent overwhelming the receiving device",
            "To save memory on the computer",
            "To make the connection faster"
        ],
        correctAnswer: "To prevent overwhelming the receiving device",
        explanation: "The TCP sliding window mechanism helps manage the flow of data by allowing the sender to transmit only a certain amount of data before waiting for acknowledgment. This prevents the receiver from being overwhelmed with more data than it can process."
    },
    {
        type: "MC",
        question: "What's the main purpose of ports?",
        options: [
            "To make the internet faster",
            "To help your device know which application should handle incoming data",
            "To protect your computer from viruses",
            "To save internet data"
        ],
        correctAnswer: "To help your device know which application should handle incoming data",
        explanation: "Ports act as endpoints for communication, allowing different applications to use the network simultaneously. When data arrives at a device, the port number helps the operating system determine which application should receive the data."
    },
    {
        type: "TF",
        question: "TCP is more reliable than UDP because it guarantees delivery of all data packets.",
        correctAnswer: "True",
        explanation: "TCP is more reliable than UDP because it includes mechanisms for error checking, acknowledgment of received packets, and retransmission of lost packets. This ensures that all data arrives intact and in the correct order, though it may be slower than UDP."
    },
    {
        type: "TF",
        question: "ARP is only used for communication within the same local network.",
        correctAnswer: "True",
        explanation: "ARP is used to resolve IP addresses to MAC addresses within the same local network. For communication outside the local network, devices use their default gateway (router) instead of ARP."
    },
    {
        type: "TF",
        question: "ICMP is only used for the ping command.",
        correctAnswer: "False",
        explanation: "While ICMP is commonly known for the ping command, it serves many other purposes including error reporting, network diagnostics, and providing feedback about network conditions. It's a crucial protocol for network troubleshooting and management."
    },
    {
        type: "MC",
        question: "Which protocol is used to automatically assign IP addresses to devices on a network?",
        options: [
            "DNS",
            "DHCP",
            "ARP",
            "ICMP"
        ],
        correctAnswer: "DHCP",
        explanation: "DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses and other network configuration parameters to devices when they connect to a network. This eliminates the need for manual IP address configuration."
    },
    {
        type: "MC",
        question: "What is the main purpose of DNS?",
        options: [
            "To secure network connections",
            "To translate domain names to IP addresses",
            "To transfer files between computers",
            "To manage email servers"
        ],
        correctAnswer: "To translate domain names to IP addresses",
        explanation: "DNS (Domain Name System) translates human-readable domain names (like www.example.com) into IP addresses that computers can understand. This makes it easier for humans to access websites and other network resources."
    },
    {
        type: "MC",
        question: "Which protocol is used for secure web browsing?",
        options: [
            "HTTP",
            "FTP",
            "HTTPS",
            "SMTP"
        ],
        correctAnswer: "HTTPS",
        explanation: "HTTPS (Hypertext Transfer Protocol Secure) encrypts data between the web browser and server using SSL/TLS, providing secure communication and protecting sensitive information from being intercepted."
    },
    {
        type: "MC",
        question: "What protocol is used for sending and receiving email?",
        options: [
            "FTP",
            "SMTP",
            "HTTP",
            "DNS"
        ],
        correctAnswer: "SMTP",
        explanation: "SMTP (Simple Mail Transfer Protocol) is the standard protocol for sending and receiving email messages between mail servers. It handles the routing and delivery of email across the internet."
    },
    {
        type: "MC",
        question: "Which protocol is used for file transfer?",
        options: [
            "HTTP",
            "SMTP",
            "FTP",
            "DNS"
        ],
        correctAnswer: "FTP",
        explanation: "FTP (File Transfer Protocol) is specifically designed for transferring files between computers on a network. It provides features for uploading, downloading, and managing files on remote servers."
    },
    {
        type: "MC",
        question: "What protocol is used to resolve MAC addresses to IP addresses?",
        options: [
            "DNS",
            "ARP",
            "DHCP",
            "ICMP"
        ],
        correctAnswer: "ARP",
        explanation: "ARP (Address Resolution Protocol) maps IP addresses to MAC addresses on a local network. It's essential for local network communication as it helps devices find each other's physical addresses."
    },
    {
        type: "MC",
        question: "Which protocol is used to test network connectivity?",
        options: [
            "FTP",
            "HTTP",
            "ICMP",
            "SMTP"
        ],
        correctAnswer: "ICMP",
        explanation: "ICMP (Internet Control Message Protocol) is used for diagnostic and control purposes, including the ping command. It helps identify network problems and verify connectivity between devices."
    },
    {
        type: "MC",
        question: "What protocol is used for real-time communication like video calls?",
        options: [
            "RTP",
            "FTP",
            "SMTP",
            "HTTP"
        ],
        correctAnswer: "RTP",
        explanation: "RTP (Real-time Transport Protocol) is designed for real-time multimedia applications like video conferencing and streaming. It provides features for timing, sequencing, and delivery monitoring that are essential for real-time communication."
    },
    {
        type: "TF",
        question: "HTTP is more secure than HTTPS.",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation: "HTTPS is more secure than HTTP because it uses encryption (SSL/TLS) to protect data transmission. HTTP sends data in plain text, making it vulnerable to interception and tampering."
    },
    {
        type: "TF",
        question: "DNS servers are only used for websites.",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation: "DNS servers are used for any domain name resolution, not just websites. They can resolve names for email servers, FTP servers, and other services that use domain names."
    },
    {
        type: "MC",
        question: "Which protocol is used for secure remote access to network devices?",
        options: [
            "Telnet",
            "SSH",
            "FTP",
            "HTTP"
        ],
        correctAnswer: "SSH",
        explanation: "SSH (Secure Shell) provides encrypted remote access to network devices, replacing the insecure Telnet protocol. It ensures secure command-line access and file transfers."
    },
    {
        type: "MC",
        question: "What protocol is used for network time synchronization?",
        options: [
            "SNTP",
            "FTP",
            "HTTP",
            "SMTP"
        ],
        correctAnswer: "SNTP",
        explanation: "SNTP (Simple Network Time Protocol) is used to synchronize computer clocks on a network with a time server. It helps maintain accurate time across network devices."
    },
    {
        type: "MC",
        question: "Which protocol is used for network management and monitoring?",
        options: [
            "SMTP",
            "SNMP",
            "FTP",
            "HTTP"
        ],
        correctAnswer: "SNMP",
        explanation: "SNMP (Simple Network Management Protocol) is used to monitor and manage network devices. It allows administrators to collect information about network performance and configure network devices remotely."
    },
    {
        type: "TF",
        question: "FTP uses two separate connections for control and data transfer.",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation: "FTP uses port 21 for control commands and a separate connection for actual data transfer. This separation allows for better control over the file transfer process."
    },
    {
        type: "MC",
        question: "What protocol is used for automatic discovery of network services?",
        options: [
            "DNS",
            "DHCP",
            "SSDP",
            "HTTP"
        ],
        correctAnswer: "SSDP",
        explanation: "SSDP (Simple Service Discovery Protocol) is used for automatic discovery of network services and devices. It's commonly used in home networks for device discovery and configuration."
    },
    {
        type: "MC",
        question: "Which protocol is used for secure file transfer over SSH?",
        options: [
            "FTP",
            "SFTP",
            "HTTP",
            "SMTP"
        ],
        correctAnswer: "SFTP",
        explanation: "SFTP (SSH File Transfer Protocol) provides secure file transfer capabilities over SSH. It encrypts both commands and data, making it more secure than regular FTP."
    },
    {
        type: "MC",
        question: "What protocol is used for network device discovery in IPv6 networks?",
        options: [
            "ARP",
            "NDP",
            "DHCP",
            "DNS"
        ],
        correctAnswer: "NDP",
        explanation: "NDP (Neighbor Discovery Protocol) is used in IPv6 networks to discover other devices and determine their link-layer addresses. It's the IPv6 equivalent of ARP in IPv4 networks."
    },
    {
        type: "TF",
        question: "UDP is connectionless and does not guarantee delivery of packets.",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation: "UDP is a connectionless protocol that does not establish a connection before sending data and does not guarantee delivery of packets. It prioritizes speed over reliability."
    },
    {
        type: "MC",
        question: "Which protocol is used for secure web browsing?",
        options: [
            "HTTP",
            "FTP",
            "HTTPS",
            "SMTP"
        ],
        correctAnswer: "HTTPS",
        explanation: "HTTPS (Hypertext Transfer Protocol Secure) encrypts data between the web browser and server using SSL/TLS, providing secure communication and protecting sensitive information from being intercepted."
    },
    {
        type: "MC",
        question: "Which protocol is used for secure remote access to servers?",
        options: [
            "FTP",
            "SSH",
            "HTTP",
            "SMTP"
        ],
        correctAnswer: "SSH",
        explanation: "SSH (Secure Shell) provides encrypted communication for secure remote access to servers and other network devices. It's commonly used for remote administration and secure file transfers."
    },
    {
        type: "MC",
        question: "What protocol is used to synchronize time across network devices?",
        options: [
            "SNTP",
            "FTP",
            "HTTP",
            "SMTP"
        ],
        correctAnswer: "SNTP",
        explanation: "SNTP (Simple Network Time Protocol) is used to synchronize the clocks of network devices with a time server. This is important for logging, security, and coordination of network activities."
    },
    {
        type: "MC",
        question: "Which protocol is used for network management and monitoring?",
        options: [
            "SMTP",
            "SNMP",
            "FTP",
            "HTTP"
        ],
        correctAnswer: "SNMP",
        explanation: "SNMP (Simple Network Management Protocol) is used to monitor and manage network devices. It allows administrators to collect information about network performance and configure network devices remotely."
    },
    {
        type: "MC",
        question: "What protocol is used for secure file transfer?",
        options: [
            "SFTP",
            "HTTP",
            "SMTP",
            "DNS"
        ],
        correctAnswer: "SFTP",
        explanation: "SFTP (SSH File Transfer Protocol) provides secure file transfer capabilities over SSH. It encrypts both commands and data, making it more secure than regular FTP."
    },
    {
        type: "MC",
        question: "Which protocol is used for automatic IP address configuration?",
        options: [
            "DNS",
            "DHCP",
            "ARP",
            "ICMP"
        ],
        correctAnswer: "DHCP",
        explanation: "DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses and other network configuration parameters to devices when they connect to a network."
    },
    {
        type: "MC",
        question: "What protocol is used for secure web browsing?",
        options: [
            "HTTP",
            "FTP",
            "HTTPS",
            "SMTP"
        ],
        correctAnswer: "HTTPS",
        explanation: "HTTPS (Hypertext Transfer Protocol Secure) encrypts data between the web browser and server using SSL/TLS, providing secure communication and protecting sensitive information."
    },
    {
        type: "MC",
        question: "Which protocol is used for sending and receiving email?",
        options: [
            "FTP",
            "SMTP",
            "HTTP",
            "DNS"
        ],
        correctAnswer: "SMTP",
        explanation: "SMTP (Simple Mail Transfer Protocol) is the standard protocol for sending and receiving email messages between mail servers."
    },
    {
        type: "MC",
        question: "What protocol is used for file transfer?",
        options: [
            "HTTP",
            "SMTP",
            "FTP",
            "DNS"
        ],
        correctAnswer: "FTP",
        explanation: "FTP (File Transfer Protocol) is specifically designed for transferring files between computers on a network."
    },
    {
        type: "MC",
        question: "Which protocol is used to resolve MAC addresses to IP addresses?",
        options: [
            "DNS",
            "ARP",
            "DHCP",
            "ICMP"
        ],
        correctAnswer: "ARP",
        explanation: "ARP (Address Resolution Protocol) maps IP addresses to MAC addresses on a local network."
    },
    {
        type: "MC",
        question: "What protocol is used to test network connectivity?",
        options: [
            "FTP",
            "HTTP",
            "ICMP",
            "SMTP"
        ],
        correctAnswer: "ICMP",
        explanation: "ICMP (Internet Control Message Protocol) is used for diagnostic and control purposes, including the ping command."
    },
    {
        type: "MC",
        question: "Which protocol is used for real-time communication like video calls?",
        options: [
            "RTP",
            "FTP",
            "SMTP",
            "HTTP"
        ],
        correctAnswer: "RTP",
        explanation: "RTP (Real-time Transport Protocol) is designed for real-time multimedia applications like video conferencing and streaming."
    },
    {
        type: "MC",
        question: "What protocol is used for secure remote access to servers?",
        options: [
            "FTP",
            "SSH",
            "HTTP",
            "SMTP"
        ],
        correctAnswer: "SSH",
        explanation: "SSH (Secure Shell) provides encrypted communication for secure remote access to servers and other network devices."
    },
    {
        type: "MC",
        question: "Which protocol is used to synchronize time across network devices?",
        options: [
            "SNTP",
            "FTP",
            "HTTP",
            "SMTP"
        ],
        correctAnswer: "SNTP",
        explanation: "SNTP (Simple Network Time Protocol) is used to synchronize the clocks of network devices with a time server."
    },
    {
        type: "MC",
        question: "What protocol is used for network management and monitoring?",
        options: [
            "SMTP",
            "SNMP",
            "FTP",
            "HTTP"
        ],
        correctAnswer: "SNMP",
        explanation: "SNMP (Simple Network Management Protocol) is used to monitor and manage network devices."
    }
]; 