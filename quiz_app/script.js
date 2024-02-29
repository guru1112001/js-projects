const questions = [
    {
        question: "which is your name?",
        answers: [
            { text: "shark", correct: false },
            { text: "guru", correct: true },
            { text: "shark", correct: false },
            { text: "shark", correct: false },
        ]
    },
    {
        question: "which is your age?",
        answers: [
            { text: "shark", correct: false },
            { text: "guru", correct: false },
            { text: "2", correct: true },
            { text: "shark", correct: false },
        ]
    }
]
const questionElement = document.getElementById("question")
const answerBtn = document.getElementById("answer-buttons")
const nextBtn = document.getElementById("next")
let curent = 0
let score = 0
function startQuiz() {
    curent = 0
    score = 0
    nextBtn.innerHTML = "Next"
    showQuestion()

}
function showQuestion() {
    resetState()
    let currentQuestion = questions[curent]
    let questionNo = curent + 1
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerBtn.appendChild(button)
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
    })
}

function resetState() {
    nextBtn.style.display = "none"
    while (answerBtn.firstChild)
        answerBtn.removeChild(answerBtn.firstChild)
}

function selectAnswer(e) {
    const selectbtn = e.target
    const iscorrect = selectbtn.dataset.correct === "true"
    if (iscorrect) {
        selectbtn.classList.add("correct")
        score++

    }
    else {
        selectbtn.classList.add("incorrect")
    }
    Array.from(answerBtn.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct")

        }
        button.disabled = true
    })
    nextBtn.style.display = "block"
}

function showScore() {
    resetState()
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}`
    nextBtn.innerHTML = "play again"
    nextBtn.style.display = "block"
}

function handleNextButton() {
    curent++; // Corrected variable name from currentQuestion to curent
    if (curent < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}



nextBtn.addEventListener("click", () => {
    if (curent < questions.length) {
        handleNextButton()

    } else {
        startQuiz()
    }
})

startQuiz()