const questions = [
    {
        question: "What is the largest continent in the world?",
        answers: [
            { Text: "Africa", correct: false },
            { Text: "Asia", correct: true },
            { Text: "Europe", correct: false },
            { Text: "South America", correct: false },
        ]
    },
    {
        question: "What is the fastest animal on earth?",
        answers: [
            { Text: "Cheetah", correct: true },
            { Text: "Lion", correct: false },
            { Text: "Tiger", correct: false },
            { Text: "Elephant", correct: false },
        ]
    },
    {
        question: "What is the capital of Japan?",
        answers: [
            { Text: "Osaka", correct: false },
            { Text: "Kyoto", correct: false },
            { Text: "Tokyo", correct: true },
            { Text: "Nagoya", correct: false },
        ]
    },
    {
        question: "How many planets are in the Solar System?",
        answers: [
            { Text: "7", correct: false },
            { Text: "8", correct: true },
            { Text: "9", correct: false },
            { Text: "10", correct: false },
        ]
    }
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.Text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("incorrect");
    }
    nextButton.style.display = "block";
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
    });
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    nextButton.onclick = startQuiz;
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

startQuiz();
