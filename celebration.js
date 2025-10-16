// Cybersecurity-themed titles for celebrations
const cyberTitles = [
    "Firewall Whisperer",
    "Patch Master",
    "Digital Ninja",
    "The Exploit Exorcist",
    "Byte Guardian",
    "Root Access Royalty",
    "Crypto Commander",
    "Phish Slayer",
    "Zero-Day Hero",
    "The Encryptor",
    "Net Sentinel",
    "Red Team Rockstar",
    "The Bug Hunter",
    "Token Titan",
    "Cyber Sage",
    "Packet Paladin",
    "Malware Mercenary",
    "The Boolean Boss",
    "Code Shield",
    "The Kernel Keeper"
];

// Celebration class for managing celebrations
class Celebration {
    constructor() {
        this.container = document.getElementById('celebrationContainer');
        this.isActive = false;
    }

    // Trigger celebration with streak count
    trigger(streak) {
        if (this.isActive) return; // Prevent multiple celebrations
        
        this.isActive = true;
        const title = this.getRandomTitle();
        
        // Create celebration message
        this.showMessage(streak, title);
        
        // Create fireworks
        this.createFireworks();
        
        // Auto-hide after 4 seconds
        setTimeout(() => {
            this.hide();
        }, 4000);
    }

    // Get random cybersecurity title
    getRandomTitle() {
        return cyberTitles[Math.floor(Math.random() * cyberTitles.length)];
    }

    // Show celebration message
    showMessage(streak, title) {
        const message = document.createElement('div');
        message.className = 'celebration-message';
        message.innerHTML = `
            <h2>Streak ${streak}!</h2>
            <p>${title}</p>
        `;
        
        this.container.appendChild(message);
        this.container.style.display = 'block';
        
        // Trigger animation
        setTimeout(() => {
            message.style.animation = 'fadeInOut 4s ease-in-out';
        }, 100);
    }

    // Create fireworks effect
    createFireworks() {
        const colors = ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff8800', '#8800ff'];
        
        // Create multiple firework bursts
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                this.createFireworkBurst(colors);
            }, i * 200);
        }
    }

    // Create a single firework burst
    createFireworkBurst(colors) {
        const burstCount = 20;
        const centerX = Math.random() * window.innerWidth;
        const centerY = Math.random() * window.innerHeight;
        
        for (let i = 0; i < burstCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'cyber-particle';
            
            // Random color
            const color = colors[Math.floor(Math.random() * colors.length)];
            particle.style.background = color;
            particle.style.boxShadow = `0 0 10px ${color}`;
            
            // Position at center
            particle.style.left = centerX + 'px';
            particle.style.top = centerY + 'px';
            
            // Random direction and distance
            const angle = (i / burstCount) * 2 * Math.PI;
            const distance = 100 + Math.random() * 100;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;
            
            // Set CSS custom properties for animation
            particle.style.setProperty('--tx', tx + 'px');
            particle.style.setProperty('--ty', ty + 'px');
            
            // Add to container
            this.container.appendChild(particle);
            
            // Animate particle
            particle.style.animation = 'particleAnimation 2s ease-out forwards';
            
            // Remove particle after animation
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 2000);
        }
    }

    // Hide celebration
    hide() {
        this.container.style.display = 'none';
        this.container.innerHTML = '';
        this.isActive = false;
    }
}

// Global celebration instance
let celebration = new Celebration();

// Function to trigger celebration (called from quiz)
function triggerCelebration(streak) {
    celebration.trigger(streak);
}

// Enhanced CSS animations for better fireworks
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInOut {
        0% { 
            opacity: 0; 
            transform: translate(-50%, -50%) scale(0.8); 
        }
        20% { 
            opacity: 1; 
            transform: translate(-50%, -50%) scale(1.1); 
        }
        80% { 
            opacity: 1; 
            transform: translate(-50%, -50%) scale(1); 
        }
        100% { 
            opacity: 0; 
            transform: translate(-50%, -50%) scale(0.8); 
        }
    }

    @keyframes particleAnimation {
        0% { 
            transform: translate(0, 0) rotate(0deg); 
            opacity: 1; 
            width: 4px;
            height: 4px;
        }
        50% {
            opacity: 1;
            width: 6px;
            height: 6px;
        }
        100% { 
            transform: translate(var(--tx), var(--ty)) rotate(360deg); 
            opacity: 0; 
            width: 2px;
            height: 2px;
        }
    }

    .celebration-message {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.9);
        padding: 30px 60px;
        border-radius: 15px;
        border: 3px solid var(--primary-color);
        text-align: center;
        opacity: 0;
        z-index: 1001;
        box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
    }

    .celebration-message h2 {
        color: var(--primary-color);
        font-size: 3em;
        margin: 0;
        text-shadow: 0 0 20px var(--primary-color);
        font-family: 'Orbitron', sans-serif;
        font-weight: bold;
    }

    .celebration-message p {
        color: var(--accent-color);
        font-size: 1.8em;
        margin: 15px 0 0;
        text-shadow: 0 0 15px var(--accent-color);
        font-family: 'Rajdhani', sans-serif;
        font-weight: bold;
    }

    .cyber-particle {
        position: absolute;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
    }
`;
document.head.appendChild(style); 