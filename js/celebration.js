// Cyber-themed titles for streak celebrations
const CELEBRATION_TITLES = [
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

function triggerStreakCelebration(streakCount) {
  // Create overlay if it doesn't exist
  let overlay = document.getElementById('celebration-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'celebration-overlay';
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      display: none;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      opacity: 0;
      transition: opacity 0.3s ease;
    `;
    document.body.appendChild(overlay);
  }

  // Clear previous content
  overlay.innerHTML = '';

  // Create fireworks canvas
  const canvas = document.createElement('canvas');
  canvas.className = 'fireworks';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
  `;

  // Create message container
  const messageContainer = document.createElement('div');
  messageContainer.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #0ff;
    font-family: 'Orbitron', sans-serif;
    z-index: 1001;
  `;

  // Create streak message
  const streakMessage = document.createElement('div');
  streakMessage.style.cssText = `
    font-size: 3em;
    margin-bottom: 20px;
    text-shadow: 0 0 10px #0ff;
  `;
  streakMessage.textContent = `Streak ${streakCount}!`;

  // Create title message
  const titleMessage = document.createElement('div');
  titleMessage.style.cssText = `
    font-size: 1.5em;
    color: #ff00ff;
    text-shadow: 0 0 10px #ff00ff;
  `;
  titleMessage.textContent = CELEBRATION_TITLES[Math.floor(Math.random() * CELEBRATION_TITLES.length)];

  // Add messages to container
  messageContainer.appendChild(streakMessage);
  messageContainer.appendChild(titleMessage);

  // Add elements to overlay
  overlay.appendChild(canvas);
  overlay.appendChild(messageContainer);

  // Show overlay
  requestAnimationFrame(() => {
    overlay.style.display = 'flex';
    requestAnimationFrame(() => {
      overlay.style.opacity = '1';
      launchFireworks(canvas);
    });
  });

  // Hide after animation
  setTimeout(() => {
    overlay.style.opacity = '0';
    setTimeout(() => {
      overlay.style.display = 'none';
      overlay.innerHTML = '';
    }, 500);
  }, 2400);
}

function launchFireworks(canvas) {
  const ctx = canvas.getContext('2d');
  const colors = ['#0ff', '#ff00ff', '#fff', '#00ff66', '#ff3366', '#00ccff'];
  let particles = [];
  let animationFrame;

  function createFirework() {
    const x = Math.random() * canvas.width * 0.8 + canvas.width * 0.1;
    const y = Math.random() * canvas.height * 0.3 + canvas.height * 0.2;
    const count = 18 + Math.floor(Math.random() * 8);

    for (let i = 0; i < count; i++) {
      const angle = (2 * Math.PI * i) / count;
      const speed = 2 + Math.random() * 2;
      particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
  }

  let frame = 0;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 5, 0, 2 * Math.PI);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= 0.018;
    });

    particles = particles.filter(p => p.alpha > 0);

    if (frame % 15 === 0 && frame < 45) {
      createFirework();
    }

    if (frame < 90) {
      animationFrame = requestAnimationFrame(animate);
      frame++;
    } else {
      cancelAnimationFrame(animationFrame);
    }
  }

  animate();

  return () => {
    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
    }
  };
}

// Export the function for use in other files
window.triggerStreakCelebration = triggerStreakCelebration; 