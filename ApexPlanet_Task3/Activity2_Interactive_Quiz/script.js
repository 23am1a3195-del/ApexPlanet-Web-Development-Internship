
const questions = [
    {
        question: "1. What is the capital of India?",
        answers: [
            { text: "Mumbai", correct: false },
            { text: "New Delhi", correct: true },
            { text: "Chennai", correct: false },
            { text: "Hyderabad", correct: false }
        ]
    },
    {
        question: "2. Which language is used for web styling?",
        answers: [
            { text: "HTML", correct: false },
            { text: "Python", correct: false },
            { text: "CSS", correct: true },
            { text: "Java", correct: false }
        ]
    },
    {
        question: "3. Which language adds interactivity to websites?",
        answers: [
            { text: "JavaScript", correct: true },
            { text: "HTML", correct: false },
            { text: "CSS", correct: false },
            { text: "SQL", correct: false }
        ]
    },
    {
        question: "4. What does HTML stand for?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "High Text Machine Language", correct: false },
            { text: "Hyper Tool Markup Language", correct: false },
            { text: "Home Text Markup Language", correct: false }
        ]
    },
    {
        question: "5. Which company developed JavaScript's original implementation?",
        answers: [
            { text: "Microsoft", correct: false },
            { text: "Netscape", correct: true },
            { text: "Google", correct: false },
            { text: "Apple", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const feedback = document.getElementById("feedback");
const scoreElement = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.innerText = "";
    nextButton.innerText = "Next Question";
    showQuestion();
}

function showQuestion() {
    resetState();

    let currentQuestion = questions[currentQuestionIndex];

    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");

        button.innerText = answer.text;
        button.classList.add("answer-btn");

        if (answer.correct) {
            button.dataset.correct = "true";
        }

        button.addEventListener("click", selectAnswer);

        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    feedback.innerText = "";

    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(event) {
    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    if (isCorrect) {
        selectedButton.classList.add("correct");
        feedback.innerText = "Correct Answer! 🎉";
        score++;
    } else {
        selectedButton.classList.add("wrong");
        feedback.innerText = "Wrong Answer!";

    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "inline-block";
}

function showScore() {
    resetState();

    questionElement.innerText = "Quiz Completed!";

    scoreElement.innerText =
        `Your Score: ${score} / ${questions.length}`;

    nextButton.innerText = "Play Again";
    nextButton.style.display = "inline-block";
}

function handleNextButton() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
