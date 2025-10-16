let currentQuestion = 0;
let score = 0;
let streak = 0;

// Get DOM elements
const questionText = document.getElementById('question-text');
const optionsList = document.getElementById('options');
const feedback = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');
const finishBtn = document.getElementById('finish-btn');
const nextTopicBtn = document.getElementById('next-topic-btn');
const questionNumber = document.getElementById('question-number');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const streakNumber = document.getElementById('streakNumber');
const streakContainer = document.getElementById('streakContainer');

// Initialize total questions
totalQuestionsSpan.textContent = questions.length;

// --- Streak Logic ---
function checkStreak(correct) {
  if (correct) {
    streak++;
    if (streak % 5 === 0) {
      const celebration = new Celebration();
      celebration.celebrate(streak);
    }
  } else {
    streak = 0;
  }
}

function showQuestion() {
    // Reset feedback
    feedback.innerHTML = '';
    feedback.className = 'feedback';
    
    // Update question number
    questionNumber.textContent = currentQuestion + 1;
    currentQuestionSpan.textContent = currentQuestion + 1;
    
    // Get current question
    const q = questions[currentQuestion];
    
    // Set question text
    questionText.textContent = q.question;
    
    // Clear and populate options
    optionsList.innerHTML = '';
    q.options.forEach((option, index) => {
        const li = document.createElement('li');
        li.className = 'option';
        li.textContent = option;
        li.onclick = () => handleAnswer(index);
        optionsList.appendChild(li);
    });
    
    // Hide all navigation buttons
    nextBtn.style.display = 'none';
    finishBtn.style.display = 'none';
    nextTopicBtn.style.display = 'none';
    
    // Show streak if it exists
    if (streak > 0) {
        streakContainer.style.display = 'block';
        streakNumber.textContent = streak;
    } else {
        streakContainer.style.display = 'none';
    }
}

function handleAnswer(selectedIndex) {
    const q = questions[currentQuestion];
    const options = optionsList.getElementsByClassName('option');
    
    // Disable all options
    Array.from(options).forEach(option => {
        option.classList.add('disabled');
        option.style.pointerEvents = 'none';
    });
    
    // Check if answer is correct
    const isCorrect = selectedIndex === q.correctAnswer;
    
    // Update score if correct
    if (isCorrect) {
        score++;
    }
    
    // Update streak
    if (isCorrect) {
        streak++;
        if (streak % 5 === 0) {
            const celebration = new Celebration();
            celebration.celebrate(streak);
        }
    } else {
        streak = 0;
    }
    
    // Update streak display
    streakNumber.textContent = streak;
    streakContainer.style.display = 'block';
    
    // Show feedback
    feedback.style.display = 'block';
    if (isCorrect) {
        options[selectedIndex].classList.add('correct');
        feedback.className = 'feedback correct';
        feedback.innerHTML = `
            <div>Correct!</div>
            <div class="explanation">${q.explanation}</div>
        `;
    } else {
        options[selectedIndex].classList.add('incorrect');
        options[q.correctAnswer].classList.add('correct');
        feedback.className = 'feedback incorrect';
        feedback.innerHTML = `
            <div>Incorrect</div>
            <div class="explanation">${q.explanation}</div>
        `;
    }
    
    // Show appropriate navigation button
    if (currentQuestion < questions.length - 1) {
        // Not the last question - show Next Question button
        nextBtn.style.display = 'block';
    } else {
        // Last question - show Next Topic button
        nextTopicBtn.style.display = 'block';
    }
}

function nextQuestion() {
    currentQuestion++;
    showQuestion();
}

function nextTopic() {
    // Redirect to the next module
    window.location.href = 'ipv4-part3-module.html';
}

// Add event listeners
nextBtn.addEventListener('click', nextQuestion);
nextTopicBtn.addEventListener('click', nextTopic);

// Initialize the quiz
window.addEventListener('load', showQuestion);
