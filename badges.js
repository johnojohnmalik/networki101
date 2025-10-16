// Badge definitions for each level
const badges = {
    level1: {
        id: 'level1',
        name: 'Network Novice',
        description: 'Complete the introduction to networking',
        icon: 'badge icons/1 (2).png',
        requirements: {
            completeIntro: true
        }
    },
    level2: {
        id: 'level2',
        name: 'Network Explorer',
        description: 'Master the fundamentals of networking',
        icon: 'badge icons/2.png',
        requirements: {
            completeFundamentals: true,
            quizScore: 80 // percentage
        }
    },
    level3: {
        id: 'level3',
        name: 'Terminology Expert',
        description: 'Learn all network basic terms',
        icon: 'badge icons/3.png',
        requirements: {
            completeTerms: true,
            quizScore: 85
        }
    },
    level4: {
        id: 'level4',
        name: 'Cable Master',
        description: 'Understand all network cable types',
        icon: 'badge icons/4.png',
        requirements: {
            completeCables: true,
            quizScore: 90
        }
    },
    level5: {
        id: 'level5',
        name: 'Protocol Pioneer',
        description: 'Master OSI & TCP-IP models',
        icon: 'badge icons/5.png',
        requirements: {
            completeOSI: true
        }
    },
    level6: {
        id: 'level6',
        name: 'IPv4 Virtuoso',
        description: 'Expert in Network Protocols IPv4',
        icon: 'badge icons/6.png',
        requirements: {
            completeProtocols: true,
            quizScore: 95
        }
    },
    level7: {
        id: 'level7',
        name: 'DHCP & DNS Master',
        description: 'Master DHCP and DNS concepts',
        icon: 'badge icons/7.png',
        requirements: {
            completeDHCPDNS: true,
            quizScore: 95
        }
    },
    level8: {
        id: 'level8',
        name: 'Network Security Expert',
        description: 'Complete all security modules',
        icon: 'badge icons/8.png',
        requirements: {
            completeSecurity: true,
            quizScore: 100
        }
    }
};

// Function to check if a badge is earned
function checkBadgeEarned(levelId, progress) {
    const badge = badges[levelId];
    if (!badge) return false;

    const requirements = badge.requirements;
    for (const [key, value] of Object.entries(requirements)) {
        if (progress[key] < value) return false;
    }
    return true;
}

// Function to update badge display
function updateBadgeDisplay(levelId, earned) {
    const levelNode = document.querySelector(`[data-level="${levelId}"]`);
    if (!levelNode) return;

    let badgeElement = levelNode.querySelector('.badge');
    if (!badgeElement) {
        badgeElement = document.createElement('div');
        badgeElement.className = 'badge';
        levelNode.appendChild(badgeElement);
    }

    if (earned) {
        badgeElement.innerHTML = `<img src="${badges[levelId].icon}" alt="${badges[levelId].name}" class="badge-image">`;
        badgeElement.classList.add('earned');
    } else {
        badgeElement.innerHTML = '<img src="badge icons/17.png" alt="Locked" class="badge-image">';
        badgeElement.classList.remove('earned');
    }
}

// Function to save badge progress
function saveBadgeProgress(levelId, progress) {
    const savedProgress = JSON.parse(localStorage.getItem('badgeProgress') || '{}');
    savedProgress[levelId] = progress;
    localStorage.setItem('badgeProgress', JSON.stringify(savedProgress));
}

// Function to load badge progress
function loadBadgeProgress() {
    return JSON.parse(localStorage.getItem('badgeProgress') || '{}');
}

// Function to initialize badges
function initializeBadges() {
    const progress = loadBadgeProgress();
    for (const levelId in badges) {
        const earned = checkBadgeEarned(levelId, progress[levelId] || {});
        updateBadgeDisplay(levelId, earned);
    }
}

// Function to handle quiz completion
function handleQuizCompletion(levelId, score) {
    const progress = loadBadgeProgress();
    const currentProgress = progress[levelId] || {};
    
    // Update quiz score
    currentProgress.quizScore = score;
    
    // Check if all requirements are met
    const earned = checkBadgeEarned(levelId, currentProgress);
    
    // Save progress
    saveBadgeProgress(levelId, currentProgress);
    
    // Update display
    updateBadgeDisplay(levelId, earned);
    
    // Show celebration if badge is earned
    if (earned) {
        showBadgeCelebration(levelId);
    }
    
    return earned;
}

// Function to handle learning page completion
function handleLearningCompletion(levelId) {
    const progress = loadBadgeProgress();
    const currentProgress = progress[levelId] || {};
    
    // Set the appropriate completion flag based on level
    switch(levelId) {
        case 'level1':
            currentProgress.completeIntro = true;
            break;
        case 'level2':
            currentProgress.completeFundamentals = true;
            break;
        case 'level3':
            currentProgress.completeTerms = true;
            break;
        case 'level4':
            currentProgress.completeCables = true;
            break;
        case 'level5':
            currentProgress.completeOSI = true;
            break;
        case 'level6':
            currentProgress.completeProtocols = true;
            break;
        case 'level7':
            currentProgress.completeDHCPDNS = true;
            break;
        case 'level8':
            currentProgress.completeSecurity = true;
            break;
    }
    
    // Check if all requirements are met
    const earned = checkBadgeEarned(levelId, currentProgress);
    
    // Save progress
    saveBadgeProgress(levelId, currentProgress);
    
    // Update display
    updateBadgeDisplay(levelId, earned);
    
    // Show celebration if badge is earned
    if (earned) {
        showBadgeCelebration(levelId);
    }
    
    return earned;
}

// Function to show badge celebration
function showBadgeCelebration(levelId) {
    const badge = badges[levelId];
    const celebration = document.createElement('div');
    celebration.className = 'badge-celebration';
    celebration.innerHTML = `
        <div class="celebration-content">
            <div class="badge-icon">
                <img src="${badge.icon}" alt="${badge.name}" class="badge-image">
            </div>
            <h3>Badge Earned!</h3>
            <p>${badge.name}</p>
            <p class="description">${badge.description}</p>
        </div>
    `;
    
    document.body.appendChild(celebration);
    
    // Remove celebration after animation
    setTimeout(() => {
        celebration.remove();
    }, 3000);
}

// Function to handle scroll-based badge earning
function initializeScrollBadge(levelId) {
    let hasEarnedBadge = false;
    
    function checkScroll() {
        // Get the total scrollable height
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        // Get the current scroll position
        const currentScroll = window.scrollY;
        
        // If user has scrolled to bottom (with a small threshold)
        if (currentScroll >= totalHeight - 50 && !hasEarnedBadge) {
            hasEarnedBadge = true;
            handleLearningCompletion(levelId);
            
            // Show a message to the user
            const message = document.createElement('div');
            message.className = 'scroll-completion-message';
            message.innerHTML = `
                <div class="message-content">
                    <h3>Content Completed! 🎉</h3>
                    <p>You've earned the ${badges[levelId].name} badge!</p>
                </div>
            `;
            document.body.appendChild(message);
            
            // Remove the message after 3 seconds
            setTimeout(() => {
                message.remove();
            }, 3000);
        }
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', checkScroll);
    
    // Check initial scroll position
    checkScroll();
}

// Export functions for use in other files
export {
    badges,
    checkBadgeEarned,
    updateBadgeDisplay,
    saveBadgeProgress,
    loadBadgeProgress,
    initializeBadges,
    handleQuizCompletion,
    handleLearningCompletion,
    initializeScrollBadge
}; 