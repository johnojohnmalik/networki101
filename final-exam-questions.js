// Final Exam - 40 Questions from All Stages (1-9)
// This pool contains questions from all previous modules
// Questions will be randomly selected each time

const allQuestions = [
    // Stage 1: Networking Fundamentals
    {
        question: "What is the main purpose of a computer network?",
        options: [
            "To make computers look pretty",
            "To connect computers and share resources",
            "To play music"
        ],
        correctAnswer: 1,
        stage: 1
    },
    {
        question: "What is a Virtual Machine (VM)?",
        options: [
            "A computer that runs in space",
            "A simulated computer inside another computer",
            "A type of printer"
        ],
        correctAnswer: 1,
        stage: 1
    },
    {
        question: "How do computers identify each other on a network?",
        options: [
            "By their color",
            "By their IP addresses",
            "By their brand name"
        ],
        correctAnswer: 1,
        stage: 1
    },
    {
        question: "What does IoT stand for?",
        options: [
            "Internet of Things",
            "Internet of Tools",
            "Internet of Toys"
        ],
        correctAnswer: 0,
        stage: 1
    },
    {
        question: "What is a server?",
        options: [
            "A type of printer",
            "A computer that provides services to other computers",
            "A type of keyboard"
        ],
        correctAnswer: 1,
        stage: 1
    },

    // Stage 2: Network Basic Terms (Topologies, Devices)
    {
        question: "Which topology is most commonly used in modern home networks?",
        options: [
            "Bus topology",
            "Ring topology",
            "Star topology",
            "Mesh topology"
        ],
        correctAnswer: 2,
        stage: 2
    },
    {
        question: "What is the main disadvantage of a Bus topology?",
        options: [
            "It's too expensive",
            "It's too complex to set up",
            "A break in the main cable can bring down the entire network",
            "It's too slow for modern networks"
        ],
        correctAnswer: 2,
        stage: 2
    },
    {
        question: "What is a PAN (Personal Area Network)?",
        options: [
            "A network that connects devices across a city",
            "A network that connects devices within a building",
            "A network that connects personal devices within a 10-meter radius",
            "A network that connects devices across countries"
        ],
        correctAnswer: 2,
        stage: 2
    },
    {
        question: "What is the role of a modem?",
        options: [
            "To connect devices within a building",
            "To translate digital data into signals for internet transmission",
            "To store network data",
            "To protect the network from hackers"
        ],
        correctAnswer: 1,
        stage: 2
    },
    {
        question: "What makes a switch better than a hub?",
        options: [
            "It's cheaper",
            "It's easier to set up",
            "It sends data only to the intended device",
            "It works with wireless devices"
        ],
        correctAnswer: 2,
        stage: 2
    },
    {
        question: "What is the main role of a router?",
        options: [
            "To store network data",
            "To connect different networks and direct data",
            "To boost network signals",
            "To protect the network"
        ],
        correctAnswer: 1,
        stage: 2
    },

    // Stage 3: Cables
    {
        question: "What is the main purpose of network cables?",
        options: [
            "To store data",
            "To connect wireless devices",
            "To allow devices to connect and communicate in networks",
            "To provide backup power"
        ],
        correctAnswer: 2,
        stage: 3
    },
    {
        question: "Which type of twisted pair cable has no shielding?",
        options: [
            "STP",
            "FTP",
            "SFTP",
            "UTP"
        ],
        correctAnswer: 3,
        stage: 3
    },
    {
        question: "What is the main advantage of twisting wires in a twisted pair cable?",
        options: [
            "Easier installation",
            "Reduces interference and crosstalk",
            "Makes cables waterproof",
            "Increases weight for durability"
        ],
        correctAnswer: 1,
        stage: 3
    },
    {
        question: "Which of the following cable types supports 10 Gbps at up to 100 meters?",
        options: [
            "Cat6",
            "Cat5e",
            "Cat6a",
            "Cat7"
        ],
        correctAnswer: 2,
        stage: 3
    },
    {
        question: "What is the maximum recommended length for a Cat6 cable to maintain 1 Gbps speed?",
        options: [
            "50 meters",
            "100 meters",
            "150 meters",
            "200 meters"
        ],
        correctAnswer: 1,
        stage: 3
    },

    // Stage 4: OSI & TCP-IP
    {
        question: "Which layer of the OSI model is responsible for routing packets between devices?",
        options: ["Data Link", "Network", "Transport", "Application"],
        correctAnswer: 1,
        stage: 4
    },
    {
        question: "How many layers are in the TCP/IP model?",
        options: ["3", "4", "5", "7"],
        correctAnswer: 1,
        stage: 4
    },
    {
        question: "Which protocol uses port 80?",
        options: ["FTP", "HTTP", "SMTP", "DNS"],
        correctAnswer: 1,
        stage: 4
    },
    {
        question: "Which layer is responsible for logical addressing (IP addresses)?",
        options: ["Data Link", "Network", "Transport", "Session"],
        correctAnswer: 1,
        stage: 4
    },
    {
        question: "What is the data unit at the Transport layer?",
        options: ["Frame", "Packet", "Segment", "Bit"],
        correctAnswer: 2,
        stage: 4
    },
    {
        question: "Which layer is responsible for MAC addressing?",
        options: ["Physical", "Data Link", "Network", "Transport"],
        correctAnswer: 1,
        stage: 4
    },

    // Stage 5: Network Protocols IPv4
    {
        question: "Which of these is a valid IPv4 address?",
        options: [
            "192.168.1.256",
            "192.168.1.1",
            "192.168.1",
            "192.168.1.1.1"
        ],
        correctAnswer: 1,
        stage: 5
    },
    {
        question: "What problem does ARP solve?",
        options: [
            "Finding the fastest route to a website",
            "Converting IP addresses to MAC addresses",
            "Protecting your computer from viruses",
            "Making your internet connection faster"
        ],
        correctAnswer: 1,
        stage: 5
    },
    {
        question: "Why is the ARP cache useful?",
        options: [
            "It makes your computer run faster",
            "It saves time by remembering previous lookups",
            "It protects your network from hackers",
            "It helps you find websites faster"
        ],
        correctAnswer: 1,
        stage: 5
    },
    {
        question: "What happens when you use the 'ping' command?",
        options: [
            "Your computer sends a test message and waits for a reply",
            "Your computer downloads a file",
            "Your computer connects to a website",
            "Your computer checks for updates"
        ],
        correctAnswer: 0,
        stage: 5
    },
    {
        question: "Why might UDP be better than TCP for online gaming?",
        options: [
            "It's more secure",
            "It's faster, even if some data gets lost",
            "It uses less internet data",
            "It works better with wireless networks"
        ],
        correctAnswer: 1,
        stage: 5
    },
    {
        question: "What's the main purpose of the TCP three-way handshake?",
        options: [
            "To make the connection faster",
            "To make sure both devices are ready to communicate",
            "To encrypt the connection",
            "To save bandwidth"
        ],
        correctAnswer: 1,
        stage: 5
    },

    // Stage 6: IPv4 Part 2 - DHCP & DNS
    {
        question: "What does DHCP stand for?",
        options: [
            "Dynamic Host Configuration Protocol",
            "Dynamic Host Control Protocol",
            "Dynamic Host Connection Protocol",
            "Dynamic Host Communication Protocol"
        ],
        correctAnswer: 0,
        stage: 6
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
        stage: 6
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
        stage: 6
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
        stage: 6
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
        stage: 6
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
        stage: 6
    },

    // Stage 7: IPv4 Part 3 - Binary & Network Security
    {
        question: "What is the binary representation of the IP address 192.168.1.1?",
        options: [
            "11000000.10101000.00000001.00000001",
            "11000000.10101000.00000001.00000010",
            "11000000.10101000.00000001.00000100",
            "11000000.10101000.00000001.00001000"
        ],
        correctAnswer: 0,
        stage: 7
    },
    {
        question: "Convert the binary number 10101100 to decimal.",
        options: [
            "172",
            "168",
            "164",
            "176"
        ],
        correctAnswer: 0,
        stage: 7
    },
    {
        question: "What is the decimal equivalent of the binary number 11000000?",
        options: [
            "192",
            "128",
            "64",
            "256"
        ],
        correctAnswer: 0,
        stage: 7
    },
    {
        question: "What is the binary representation of the decimal number 255?",
        options: [
            "11111111",
            "10101010",
            "11001100",
            "10000000"
        ],
        correctAnswer: 0,
        stage: 7
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
        stage: 7
    },
    {
        question: "Which of the following is a loopback address?",
        options: [
            "127.0.0.1",
            "192.168.1.1",
            "10.0.0.1",
            "172.16.0.1"
        ],
        correctAnswer: 0,
        stage: 7
    },

    // Stage 8: IPv4 Part 4 - Subnet Mask
    {
        question: "What is the CIDR notation for the subnet mask 255.255.255.0?",
        options: [
            "/24",
            "/16",
            "/8",
            "/32"
        ],
        correctAnswer: 0,
        stage: 8
    },
    {
        question: "How many usable hosts are available in a /26 subnet?",
        options: [
            "62",
            "64",
            "126",
            "128"
        ],
        correctAnswer: 0,
        stage: 8
    },
    {
        question: "What is the subnet mask for /28 in decimal notation?",
        options: [
            "255.255.255.240",
            "255.255.255.248",
            "255.255.255.224",
            "255.255.255.252"
        ],
        correctAnswer: 0,
        stage: 8
    },
    {
        question: "A subnet mask tells us how much of an IP address belongs to the ___________ and how much to the ___________.",
        options: [
            "network, host",
            "subnet, device",
            "router, computer",
            "gateway, endpoint"
        ],
        correctAnswer: 0,
        stage: 8
    },
    {
        question: "How many subnets can you create with a /26 subnet mask from a /24 network?",
        options: [
            "4",
            "2",
            "8",
            "16"
        ],
        correctAnswer: 0,
        stage: 8
    },
    {
        question: "What is the subnet mask for a network that needs to support 100 hosts?",
        options: [
            "/25",
            "/24",
            "/26",
            "/27"
        ],
        correctAnswer: 0,
        stage: 8
    }
];

// Function to shuffle array
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Function to get random questions from each stage
function getRandomQuestions(count = 40) {
    // Shuffle all questions
    const shuffled = shuffleArray(allQuestions);
    
    // Take the first 'count' questions
    return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Export the questions for the exam
const finalExamQuestions = getRandomQuestions(40);


