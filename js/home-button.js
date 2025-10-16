// Function to create the Home button
function createHomeButton() {
    const button = document.createElement('div');
    button.className = 'home-button-container';
    button.innerHTML = `
        <a href="index.html" class="home-button">
            <span class="home-icon">🏠</span>
            <span class="home-text">Home</span>
        </a>
    `;

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .home-button-container {
            position: fixed;
            bottom: 2vh;
            left: 2vw;
            z-index: 100;
            padding: 1vh;
            transition: all 0.3s ease;
        }

        .home-button {
            display: inline-flex;
            align-items: center;
            gap: 0.5em;
            padding: 0.8em 1.2em;
            background: rgba(0, 255, 255, 0.1);
            border: 2px solid #00ffff;
            color: #00ffff;
            text-decoration: none;
            border-radius: 8px;
            font-family: 'Orbitron', sans-serif;
            font-size: clamp(0.9rem, 2vw, 1.1rem);
            transition: all 0.3s ease;
            cursor: pointer;
            backdrop-filter: blur(5px);
            box-shadow: 0 2px 10px rgba(0, 255, 255, 0.1);
        }

        .home-button:hover {
            background: rgba(0, 255, 255, 0.2);
            box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
            transform: translateY(-2px);
        }

        .home-button:active {
            transform: translateY(0);
        }

        .home-icon {
            font-size: 1.2em;
        }

        .home-text {
            font-weight: 500;
            letter-spacing: 0.5px;
        }

        /* Media Queries for Responsive Design */
        @media (max-width: 768px) {
            .home-button-container {
                bottom: 1vh;
                left: 1vw;
            }

            .home-button {
                padding: 0.6em 1em;
            }

            .home-text {
                display: none; /* Hide text on mobile, show only icon */
            }

            .home-icon {
                font-size: 1.4em;
                margin: 0;
            }
        }

        /* Ensure button doesn't overlap with content */
        @media (min-width: 769px) {
            .home-button-container {
                margin: 1em;
            }
        }

        /* High contrast mode for better accessibility */
        @media (prefers-contrast: high) {
            .home-button {
                background: rgba(0, 255, 255, 0.2);
                border-width: 3px;
            }
        }

        /* Dark mode adjustments */
        @media (prefers-color-scheme: dark) {
            .home-button {
                background: rgba(0, 255, 255, 0.15);
            }
        }
    `;
    document.head.appendChild(style);

    // Add the button to the body
    document.body.appendChild(button);

    // Add event listener for scroll to adjust position if needed
    window.addEventListener('scroll', () => {
        const button = document.querySelector('.home-button-container');
        if (button) {
            // Check if we're near the bottom of the page
            const isNearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
            button.style.bottom = isNearBottom ? '2vh' : '2vh';
        }
    });
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', createHomeButton); 