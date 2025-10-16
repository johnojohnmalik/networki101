const questions = [
    {
        question: "What was the main problem with BOOTP that DHCP was designed to solve?",
        options: [
            "BOOTP couldn't assign IP addresses",
            "BOOTP required manual configuration for each device",
            "BOOTP only worked with Windows computers",
            "BOOTP was too slow"
        ],
        correctAnswer: 1,
        explanation: "BOOTP required manual configuration for each device, which was inefficient for large networks. DHCP was designed to automatically assign IP addresses and other network configuration parameters."
    },
    {
        question: "What does DHCP stand for?",
        options: [
            "Dynamic Host Configuration Protocol",
            "Dynamic Host Control Protocol",
            "Dynamic Host Connection Protocol",
            "Dynamic Host Communication Protocol"
        ],
        correctAnswer: 0,
        explanation: "DHCP stands for Dynamic Host Configuration Protocol. It's a network protocol used to automatically assign IP addresses and other network configuration parameters to devices on a network."
    },
    {
        question: "Which of the following is NOT a DHCP message type?",
        options: [
            "DHCPDISCOVER",
            "DHCPOFFER",
            "DHCPREQUEST",
            "DHCPCONNECT"
        ],
        correctAnswer: 3,
        explanation: "DHCPCONNECT is not a valid DHCP message type. The main DHCP message types are DISCOVER, OFFER, REQUEST, and ACK (DORA process)."
    },
    {
        question: "What is the purpose of DNS?",
        options: [
            "To assign IP addresses to devices",
            "To translate domain names to IP addresses",
            "To secure network communications",
            "To manage network traffic"
        ],
        correctAnswer: 1,
        explanation: "DNS (Domain Name System) translates human-readable domain names (like www.example.com) into IP addresses that computers can understand."
    },
    {
        question: "Which port does DNS typically use?",
        options: [
            "Port 53",
            "Port 80",
            "Port 443",
            "Port 25"
        ],
        correctAnswer: 0,
        explanation: "DNS typically uses port 53 for both TCP and UDP communications."
    },
    {
        question: "What is a DNS resolver?",
        options: [
            "A device that assigns IP addresses",
            "A server that translates domain names to IP addresses",
            "A program that converts binary to text",
            "A security protocol for DNS"
        ],
        correctAnswer: 1,
        explanation: "A DNS resolver is a server that translates domain names into IP addresses. It's the first point of contact when resolving a domain name."
    },
    {
        question: "What is the purpose of a DHCP lease?",
        options: [
            "To secure the network connection",
            "To limit the time a device can use an IP address",
            "To encrypt network traffic",
            "To authenticate users"
        ],
        correctAnswer: 1,
        explanation: "A DHCP lease is a temporary assignment of an IP address to a device. It has a time limit to ensure IP addresses are returned to the pool when no longer needed."
    },
    {
        question: "Which of the following is a top-level domain (TLD)?",
        options: [
            "www",
            "com",
            "http",
            "index"
        ],
        correctAnswer: 1,
        explanation: ".com is a top-level domain. Other examples include .org, .net, .edu, and country-specific TLDs like .uk or .jp."
    },
    {
        question: "What happens when a DHCP client's lease expires?",
        options: [
            "The device loses internet connection permanently",
            "The device must be manually configured",
            "The device requests a new lease",
            "The device switches to a static IP"
        ],
        correctAnswer: 2,
        explanation: "When a DHCP lease expires, the client will attempt to renew its lease by sending a DHCPREQUEST message to the server."
    },
    {
        question: "What is a DNS record type that maps a domain name to an IP address?",
        options: [
            "MX Record",
            "A Record",
            "CNAME Record",
            "TXT Record"
        ],
        correctAnswer: 1,
        explanation: "An A Record (Address Record) maps a domain name to an IPv4 address. It's one of the most common types of DNS records."
    },
    {
        question: "Which DHCP message is sent by a client to request an IP address?",
        options: [
            "DHCPOFFER",
            "DHCPREQUEST",
            "DHCPACK",
            "DHCPDISCOVER"
        ],
        correctAnswer: 3,
        explanation: "DHCPDISCOVER is the first message sent by a client when it needs an IP address. It's broadcast to all DHCP servers on the network."
    },
    {
        question: "What is the purpose of a DNS cache?",
        options: [
            "To store IP addresses permanently",
            "To speed up domain name resolution",
            "To secure DNS queries",
            "To backup DNS records"
        ],
        correctAnswer: 1,
        explanation: "DNS cache stores recently resolved domain names and their IP addresses to speed up future lookups and reduce DNS server load."
    },
    {
        question: "Which of the following is a private IP address range?",
        options: [
            "192.168.0.0/16",
            "200.168.0.0/16",
            "172.32.0.0/16",
            "10.0.0.0/8"
        ],
        correctAnswer: 3,
        explanation: "10.0.0.0/8 is one of the private IP address ranges. The others are 172.16.0.0/12 and 192.168.0.0/16."
    },
    {
        question: "What is the purpose of a DHCP scope?",
        options: [
            "To define the range of IP addresses that can be assigned",
            "To limit the number of devices on the network",
            "To secure the DHCP server",
            "To monitor network traffic"
        ],
        correctAnswer: 0,
        explanation: "A DHCP scope defines the range of IP addresses that the DHCP server can assign to clients on a specific subnet."
    },
    {
        question: "Which DNS record type is used for email servers?",
        options: [
            "A Record",
            "MX Record",
            "CNAME Record",
            "NS Record"
        ],
        correctAnswer: 1,
        explanation: "MX (Mail Exchange) records specify the mail servers responsible for receiving email for a domain."
    },
    {
        question: "What is the purpose of a DHCP reservation?",
        options: [
            "To permanently assign an IP address to a specific device",
            "To block certain devices from the network",
            "To increase network security",
            "To speed up IP address assignment"
        ],
        correctAnswer: 0,
        explanation: "A DHCP reservation permanently assigns a specific IP address to a device based on its MAC address, ensuring it always gets the same IP address."
    },
    {
        question: "Which of the following is NOT a valid DNS record type?",
        options: [
            "A Record",
            "MX Record",
            "IP Record",
            "CNAME Record"
        ],
        correctAnswer: 2,
        explanation: "IP Record is not a valid DNS record type. Common record types include A, AAAA, MX, CNAME, TXT, and NS records."
    },
    {
        question: "What is the purpose of a DHCP relay agent?",
        options: [
            "To assign IP addresses",
            "To forward DHCP messages between subnets",
            "To secure DHCP communications",
            "To monitor DHCP traffic"
        ],
        correctAnswer: 1,
        explanation: "A DHCP relay agent forwards DHCP messages between clients and servers that are on different subnets, allowing a single DHCP server to serve multiple subnets."
    },
    {
        question: "Which of the following is a valid DNS server type?",
        options: [
            "Primary Server",
            "Master Server",
            "Control Server",
            "Main Server"
        ],
        correctAnswer: 0,
        explanation: "A Primary Server is a valid DNS server type. Other types include Secondary (Slave) servers and Caching servers."
    },
    {
        question: "What is the purpose of a DHCP option?",
        options: [
            "To secure the DHCP server",
            "To provide additional configuration parameters",
            "To limit the number of clients",
            "To monitor network traffic"
        ],
        correctAnswer: 1,
        explanation: "DHCP options provide additional configuration parameters to clients, such as subnet mask, default gateway, DNS servers, and other network settings."
    },
    {
        question: "Which of the following is a valid DNS query type?",
        options: [
            "Recursive Query",
            "Direct Query",
            "Simple Query",
            "Basic Query"
        ],
        correctAnswer: 0,
        explanation: "A Recursive Query is a valid DNS query type where the DNS server must provide a complete answer or an error message."
    },
    {
        question: "What is the purpose of a DHCP lease time?",
        options: [
            "To secure the network",
            "To limit how long a device can use an IP address",
            "To speed up IP assignment",
            "To monitor network usage"
        ],
        correctAnswer: 1,
        explanation: "The DHCP lease time specifies how long a client can use an assigned IP address before it must be renewed or released."
    },
    {
        question: "Which of the following is a valid DNS server role?",
        options: [
            "Authoritative Server",
            "Control Server",
            "Master Server",
            "Primary Server"
        ],
        correctAnswer: 0,
        explanation: "An Authoritative Server is a valid DNS server role that has authority over a specific domain and can provide definitive answers for that domain."
    },
    {
        question: "What is the purpose of a DHCP scope option?",
        options: [
            "To secure the scope",
            "To provide specific settings for a scope",
            "To limit the number of clients",
            "To monitor scope usage"
        ],
        correctAnswer: 1,
        explanation: "A DHCP scope option provides specific configuration settings for all clients within a particular scope or subnet."
    },
    {
        question: "Which of the following is a valid DNS record type for IPv6?",
        options: [
            "A Record",
            "AAAA Record",
            "IPv6 Record",
            "6 Record"
        ],
        correctAnswer: 1,
        explanation: "AAAA Record is used to map a domain name to an IPv6 address, similar to how A Records are used for IPv4 addresses."
    },
    {
        question: "What is the purpose of a DHCP exclusion range?",
        options: [
            "To block certain devices",
            "To reserve IP addresses for static assignment",
            "To increase security",
            "To speed up IP assignment"
        ],
        correctAnswer: 1,
        explanation: "A DHCP exclusion range reserves a set of IP addresses within a scope that won't be assigned by the DHCP server, typically used for devices with static IP addresses."
    },
    {
        question: "Which of the following is a valid DNS server feature?",
        options: [
            "Zone Transfer",
            "IP Transfer",
            "Domain Transfer",
            "Server Transfer"
        ],
        correctAnswer: 0,
        explanation: "Zone Transfer is a valid DNS server feature that allows secondary servers to copy zone data from primary servers."
    },
    {
        question: "What is the purpose of a DHCP class?",
        options: [
            "To secure the server",
            "To group clients with similar needs",
            "To limit the number of clients",
            "To monitor network traffic"
        ],
        correctAnswer: 1,
        explanation: "A DHCP class groups clients with similar needs and allows for different configuration options to be applied to different groups of clients."
    },
    {
        question: "Which of the following is a valid DNS server configuration?",
        options: [
            "Forwarder",
            "Router",
            "Gateway",
            "Bridge"
        ],
        correctAnswer: 0,
        explanation: "A Forwarder is a valid DNS server configuration that allows a DNS server to forward queries it can't resolve to other DNS servers."
    },
    {
        question: "What is the purpose of a DHCP audit log?",
        options: [
            "To secure the server",
            "To track IP address assignments",
            "To limit the number of clients",
            "To speed up IP assignment"
        ],
        correctAnswer: 1,
        explanation: "A DHCP audit log tracks IP address assignments, releases, and other DHCP server activities for monitoring and troubleshooting purposes."
    }
]; 