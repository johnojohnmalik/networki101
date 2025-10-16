function handleQuizCompletion() {
    // Dispatch the quizComplete event
    window.dispatchEvent(new Event('quizComplete'));
}

// Modify the existing checkAnswer function to check for last question
function checkAnswer(questionIndex, selectedOption) {
    // ... existing answer checking code ...

    // If this is the last question and it's answered correctly
    if (questionIndex === questions.length - 1 && selectedOption === questions[questionIndex].correct) {
        handleQuizCompletion();
    }
} 