const questions = [
    {
        question: "What is the binary representation of the IP address 192.168.1.1?",
        options: [
            "11000000.10101000.00000001.00000001",
            "11000000.10101000.00000001.00000010",
            "11000000.10101000.00000001.00000100",
            "11000000.10101000.00000001.00001000"
        ],
        correctAnswer: 0,
        explanation: "192 = 11000000, 168 = 10101000, 1 = 00000001, 1 = 00000001"
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
        explanation: "10101100 = 128 + 32 + 8 + 4 = 172"
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
        explanation: "11000000 = 128 + 64 = 192"
    },
    {
        question: "Which IP address class uses the first octet for network identification?",
        options: [
            "Class A",
            "Class B",
            "Class C",
            "Class D"
        ],
        correctAnswer: 0,
        explanation: "Class A addresses use the first octet for network identification and the remaining three octets for host identification."
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
        explanation: "255 in binary is 11111111 (all 8 bits set to 1)"
    },
    {
        question: "Convert the IP address 10.0.0.1 to binary.",
        options: [
            "00001010.00000000.00000000.00000001",
            "00001010.00000000.00000000.00000010",
            "00001010.00000000.00000000.00000100",
            "00001010.00000000.00000000.00001000"
        ],
        correctAnswer: 0,
        explanation: "10 = 00001010, 0 = 00000000, 0 = 00000000, 1 = 00000001"
    },
    {
        question: "What is the decimal equivalent of the binary number 10101010?",
        options: [
            "170",
            "160",
            "180",
            "150"
        ],
        correctAnswer: 0,
        explanation: "10101010 = 128 + 32 + 8 + 2 = 170"
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
        question: "What is the binary representation of the decimal number 128?",
        options: [
            "10000000",
            "11000000",
            "10100000",
            "11100000"
        ],
        correctAnswer: 0,
        explanation: "128 in binary is 10000000 (only the leftmost bit set to 1)"
    },
    {
        question: "Convert the binary number 11110000 to decimal.",
        options: [
            "240",
            "224",
            "248",
            "232"
        ],
        correctAnswer: 0,
        explanation: "11110000 = 128 + 64 + 32 + 16 = 240"
    },
    {
        question: "What is the decimal equivalent of the binary number 00001111?",
        options: [
            "15",
            "7",
            "31",
            "63"
        ],
        correctAnswer: 0,
        explanation: "00001111 = 8 + 4 + 2 + 1 = 15"
    },
    {
        question: "Which IP address class is designed for small networks?",
        options: [
            "Class C",
            "Class A",
            "Class B",
            "Class D"
        ],
        correctAnswer: 0,
        explanation: "Class C addresses are designed for small networks, using the first three octets for network identification and the last octet for host identification."
    },
    {
        question: "What is the binary representation of the decimal number 64?",
        options: [
            "01000000",
            "10000000",
            "11000000",
            "00100000"
        ],
        correctAnswer: 0,
        explanation: "64 in binary is 01000000 (second bit from the left set to 1)"
    },
    {
        question: "Convert the IP address 172.16.0.1 to binary.",
        options: [
            "10101100.00010000.00000000.00000001",
            "10101100.00010000.00000000.00000010",
            "10101100.00010000.00000000.00000100",
            "10101100.00010000.00000000.00001000"
        ],
        correctAnswer: 0,
        explanation: "172 = 10101100, 16 = 00010000, 0 = 00000000, 1 = 00000001"
    },
    {
        question: "What is the decimal equivalent of the binary number 11001100?",
        options: [
            "204",
            "192",
            "216",
            "200"
        ],
        correctAnswer: 0,
        explanation: "11001100 = 128 + 64 + 8 + 4 = 204"
    },
    {
        question: "Which of the following is NOT a valid IP address class?",
        options: [
            "Class F",
            "Class A",
            "Class B",
            "Class C"
        ],
        correctAnswer: 0,
        explanation: "Class F is not a valid IP address class. The valid classes are A, B, C, D, and E."
    },
    {
        question: "What is the binary representation of the decimal number 32?",
        options: [
            "00100000",
            "01000000",
            "10000000",
            "00010000"
        ],
        correctAnswer: 0,
        explanation: "32 in binary is 00100000 (third bit from the left set to 1)"
    },
    {
        question: "Convert the binary number 11111100 to decimal.",
        options: [
            "252",
            "248",
            "240",
            "244"
        ],
        correctAnswer: 0,
        explanation: "11111100 = 128 + 64 + 32 + 16 + 8 + 4 = 252"
    },
    {
        question: "What is the decimal equivalent of the binary number 10100000?",
        options: [
            "160",
            "128",
            "192",
            "144"
        ],
        correctAnswer: 0,
        explanation: "10100000 = 128 + 32 = 160"
    },
    {
        question: "Which IP address class uses the first two octets for network identification?",
        options: [
            "Class B",
            "Class A",
            "Class C",
            "Class D"
        ],
        correctAnswer: 0,
        explanation: "Class B addresses use the first two octets for network identification and the last two octets for host identification."
    },
    {
        question: "What is the binary representation of the decimal number 16?",
        options: [
            "00010000",
            "00100000",
            "01000000",
            "10000000"
        ],
        correctAnswer: 0,
        explanation: "16 in binary is 00010000 (fourth bit from the left set to 1)"
    },
    {
        question: "Convert the IP address 224.0.0.1 to binary.",
        options: [
            "11100000.00000000.00000000.00000001",
            "11100000.00000000.00000000.00000010",
            "11100000.00000000.00000000.00000100",
            "11100000.00000000.00000000.00001000"
        ],
        correctAnswer: 0,
        explanation: "224 = 11100000, 0 = 00000000, 0 = 00000000, 1 = 00000001"
    },
    {
        question: "What is the decimal equivalent of the binary number 01111111?",
        options: [
            "127",
            "63",
            "255",
            "191"
        ],
        correctAnswer: 0,
        explanation: "01111111 = 64 + 32 + 16 + 8 + 4 + 2 + 1 = 127"
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
        explanation: "127.0.0.1 is the loopback address used to test network connectivity on the local machine."
    },
    {
        question: "What is the binary representation of the decimal number 8?",
        options: [
            "00001000",
            "00010000",
            "00100000",
            "01000000"
        ],
        correctAnswer: 0,
        explanation: "8 in binary is 00001000 (fifth bit from the left set to 1)"
    },
    {
        question: "Convert the binary number 10111111 to decimal.",
        options: [
            "191",
            "183",
            "199",
            "175"
        ],
        correctAnswer: 0,
        explanation: "10111111 = 128 + 32 + 16 + 8 + 4 + 2 + 1 = 191"
    },
    {
        question: "What is the decimal equivalent of the binary number 11000011?",
        options: [
            "195",
            "193",
            "197",
            "199"
        ],
        correctAnswer: 0,
        explanation: "11000011 = 128 + 64 + 2 + 1 = 195"
    },
    {
        question: "Which IP address class is reserved for multicast?",
        options: [
            "Class D",
            "Class A",
            "Class B",
            "Class C"
        ],
        correctAnswer: 0,
        explanation: "Class D addresses (224.0.0.0 to 239.255.255.255) are reserved for multicast communication."
    },
    {
        question: "What is the binary representation of the decimal number 4?",
        options: [
            "00000100",
            "00001000",
            "00010000",
            "00100000"
        ],
        correctAnswer: 0,
        explanation: "4 in binary is 00000100 (sixth bit from the left set to 1)"
    },
    {
        question: "Convert the binary number 11100000 to decimal.",
        options: [
            "224",
            "216",
            "232",
            "240"
        ],
        correctAnswer: 0,
        explanation: "11100000 = 128 + 64 + 32 = 224"
    },
    {
        question: "What is the decimal equivalent of the binary number 10010110?",
        options: [
            "150",
            "142",
            "158",
            "146"
        ],
        correctAnswer: 0,
        explanation: "10010110 = 128 + 16 + 4 + 2 = 150"
    }
]; 