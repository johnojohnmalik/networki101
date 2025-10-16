const questions = [
    {
        type: 'mc',
        question: 'What is the main purpose of network cables?',
        options: [
            'To store data',
            'To connect wireless devices',
            'To allow devices to connect and communicate in networks',
            'To provide backup power'
        ],
        answer: 'To allow devices to connect and communicate in networks',
        explanation: 'Network cables are physical media that enable devices to connect and communicate within a network.'
    },
    {
        type: 'mc',
        question: 'What does the term "coaxial" refer to?',
        options: [
            'The type of connector used',
            'A shared axis between the conductor and shield',
            'Fiber alignment',
            'Wireless communication'
        ],
        answer: 'A shared axis between the conductor and shield',
        explanation: 'Coaxial cables have a central conductor and an outer shield that share the same axis.'
    },
    {
        type: 'mc',
        question: 'Which type of twisted pair cable has no shielding?',
        options: [
            'STP',
            'FTP',
            'SFTP',
            'UTP'
        ],
        answer: 'UTP',
        explanation: 'UTP (Unshielded Twisted Pair) has no shielding, while STP, FTP, and SFTP all have some form of shielding.'
    },
    {
        type: 'mc',
        question: 'What is the main advantage of twisting wires in a twisted pair cable?',
        options: [
            'Easier installation',
            'Reduces interference and crosstalk',
            'Makes cables waterproof',
            'Increases weight for durability'
        ],
        answer: 'Reduces interference and crosstalk',
        explanation: 'The twisting of wires helps cancel out electromagnetic interference and reduces crosstalk between adjacent pairs.'
    },
    {
        type: 'mc',
        question: 'Which cable category is now largely obsolete but supported up to 10 Mbps?',
        options: [
            'Cat5',
            'Cat3',
            'Cat6',
            'Cat5e'
        ],
        answer: 'Cat3',
        explanation: 'Cat3 cables were commonly used for 10BASE-T networks but are now largely obsolete.'
    },
    {
        type: 'mc',
        question: 'Which of the following cable types supports 10 Gbps at up to 100 meters?',
        options: [
            'Cat6',
            'Cat5e',
            'Cat6a',
            'Cat7'
        ],
        answer: 'Cat6a',
        explanation: 'Cat6a cables can support 10 Gbps speeds up to 100 meters, while Cat6 is limited to shorter distances.'
    },
    {
        type: 'mc',
        question: 'What type of shielding does Cat7 use?',
        options: [
            'None',
            'Only foil shielding',
            'Shielded individual pairs + overall shield (SFTP)',
            'Plastic separators only'
        ],
        answer: 'Shielded individual pairs + overall shield (SFTP)',
        explanation: 'Cat7 uses both individual pair shielding and an overall shield (SFTP) for maximum interference protection.'
    },
    {
        type: 'mc',
        question: 'Which cable is designed for 25–40 Gbps over short distances (30 meters)?',
        options: [
            'Cat6',
            'Cat8',
            'Cat5e',
            'Cat7'
        ],
        answer: 'Cat8',
        explanation: 'Cat8 cables are designed for high-speed data centers and can support 25-40 Gbps over short distances.'
    },
    {
        type: 'tf',
        question: 'UTP cables are best for environments with high electrical interference.',
        options: ['True', 'False'],
        answer: 'False',
        explanation: 'UTP cables are not suitable for high interference environments. Shielded cables (STP, FTP, SFTP) are better for such conditions.'
    },
    {
        type: 'tf',
        question: 'Ethernet cable length is generally limited to 100 meters for copper cables.',
        options: ['True', 'False'],
        answer: 'True',
        explanation: 'The 100-meter limit is a standard for copper Ethernet cables to ensure reliable signal transmission.'
    },
    {
        type: 'mc',
        question: 'What is the maximum recommended length for a Cat6 cable to maintain 1 Gbps speed?',
        options: [
            '50 meters',
            '100 meters',
            '150 meters',
            '200 meters'
        ],
        answer: '100 meters',
        explanation: 'Cat6 cables can maintain 1 Gbps speeds up to 100 meters, which is the standard maximum length for Ethernet cables.'
    },
    {
        type: 'mc',
        question: 'Which type of cable is most commonly used in modern home networks?',
        options: [
            'Cat5',
            'Cat5e',
            'Cat6',
            'Cat7'
        ],
        answer: 'Cat5e',
        explanation: 'Cat5e is the most common choice for home networks as it provides good performance (up to 1 Gbps) at an affordable price.'
    },
    {
        type: 'tf',
        question: 'Fiber optic cables are more susceptible to electromagnetic interference than copper cables.',
        options: ['True', 'False'],
        answer: 'False',
        explanation: 'Fiber optic cables are immune to electromagnetic interference because they transmit data using light instead of electrical signals.'
    },
    {
        type: 'mc',
        question: 'What is the main advantage of using shielded twisted pair (STP) cables?',
        options: [
            'Lower cost',
            'Better protection against electromagnetic interference',
            'Longer maximum length',
            'Higher bandwidth'
        ],
        answer: 'Better protection against electromagnetic interference',
        explanation: 'STP cables have additional shielding that helps protect against electromagnetic interference, making them suitable for environments with high electrical noise.'
    },
    {
        type: 'mc',
        question: 'Which cable type is best suited for outdoor installations?',
        options: [
            'Standard UTP',
            'Outdoor-rated UTP',
            'Standard STP',
            'Indoor Cat6'
        ],
        answer: 'Outdoor-rated UTP',
        explanation: 'Outdoor-rated UTP cables have additional protection against moisture, UV radiation, and temperature extremes, making them suitable for outdoor use.'
    }
]; 