// Define the page sequence
const pageSequence = [
    'networks-intro.html',
    'networking-fundamentals.html',
    'networking-quiz.html',
    'network-terms.html',
    'network-terms-quiz.html',
    'cables.html',
    'cables-quiz.html',
    'osi-tcpip.html',
    'quiz-osi-tcpip.html',
    'network-protocols.html',
    'network-protocols-quiz.html',
    'ipv4-part2.html',
    'ipv4-part2-quiz.html',
    'ipv4-part3.html',
    'ipv4-part3-practice.html',
    'ipv4-part4.html',
    'ipv4-part4-practice.html'
];

// Function to get the current page filename
function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.substring(path.lastIndexOf('/') + 1);
    console.log('Current page:', page);
    return page;
}

// Function to get the next page in sequence
function getNextPage() {
    const currentPage = getCurrentPage();
    const currentIndex = pageSequence.indexOf(currentPage);
    console.log('Current index:', currentIndex);
    if (currentIndex === -1 || currentIndex === pageSequence.length - 1) {
        console.log('No next page available');
        return null; // No next page
    }
    const nextPage = pageSequence[currentIndex + 1];
    console.log('Next page:', nextPage);
    return nextPage;
}

// Function to create the Next button
function createNextButton() {
    console.log('Creating next button...');
    const nextPage = getNextPage();
    if (!nextPage) {
        console.log('No next page to link to');
        return; // No next page to link to
    }

    const button = document.createElement('div');
    button.className = 'next-button-container';
    button.innerHTML = `
        <a href="${nextPage}" class="next-button">
            <span>Next</span>
            <span class="arrow">→</span>
        </a>
    `;

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .next-button-container {
            display: flex;
            justify-content: center;
            margin: 40px 0;
            padding: 20px;
        }

        .next-button {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 12px 24px;
            background: rgba(0, 255, 255, 0.1);
            border: 2px solid #00ffff;
            color: #00ffff;
            text-decoration: none;
            border-radius: 5px;
            font-family: 'Orbitron', sans-serif;
            font-size: 1.1em;
            transition: all 0.3s ease;
            cursor: pointer;
        }

        .next-button:hover {
            background: rgba(0, 255, 255, 0.2);
            box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
            transform: translateY(-2px);
        }

        .next-button .arrow {
            transition: transform 0.3s ease;
        }

        .next-button:hover .arrow {
            transform: translateX(5px);
        }
    `;
    document.head.appendChild(style);

    // Find the container element (quiz-container or container)
    const container = document.querySelector('.quiz-container') || document.querySelector('.container');
    console.log('Container found:', container);
    if (container) {
        container.appendChild(button);
        console.log('Button added to container');
    } else {
        console.error('Could not find container element');
    }
}

// Function to initialize navigation
function initializeNavigation() {
    console.log('Initializing navigation...');
    const currentPage = getCurrentPage();
    
    // Check if the current page is a quiz or practice page
    const isQuizOrPractice = currentPage.includes('quiz') || currentPage.includes('practice');
    console.log('Is quiz or practice page:', isQuizOrPractice);
    
    if (!isQuizOrPractice) {
        // For non-quiz pages, add the Next button immediately
        createNextButton();
    } else {
        // For quiz pages, wait for the last question to be answered
        // This will be handled by the quiz-specific code
        window.addEventListener('quizComplete', () => {
            createNextButton();
        });
    }
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing navigation...');
    initializeNavigation();
}); 