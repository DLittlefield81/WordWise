// let questions = [
//    Question: 'How do you break within a string?',
//   {
//  [
//     choice1: 'Forwardslash',
//     choice2: 'Hashtag',
//     choice3: 'Backslash',
//     choice4: 'Interrobang',
//     answer: 'A3'
//   ]
// },
//  {
//     Question: 'Which method remove variables from the end of an array?',
//     choice1: 'shift()',
//     choice2: 'pop()',
//     choice3: 'unshift()',
//     choice4: 'push()',
//     answer: 'A2'
// },
//  {
//     Question: 'the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.',
//     choice1: 'interpolation',
//     choice2: 'extrapolation',
//     choice3: 'object dominence',
//     choice4: 'Hoisting',
//     answer: 'A4'
// }
// ]

let startButton = document.getElementById('start-btn');
let nextButton = document.getElementById('next-btn');
let questionContainerElement = document.getElementById('question-container');
let questionElement = document.getElementById('question');
let answerButtonsElement = document.getElementById('answer-buttons');
let count = document.getElementById("score").innerHTML = "Count!";




count = 3;
// count.textContent = " " + count;
console.log(count);

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        let button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    let selectedButton = e.target
    let correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
        count = count++
        console.log(count);
    } else {
        element.classList.add('wrong')

    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

let questions = [{
        question: 'What is 2 + 2?',
        answers: [{
                text: '4',
                correct: true
            },
            {
                text: '22',
                correct: false
            }
        ]
    },
    {
        question: 'Who is the best YouTuber?',
        answers: [{
                text: 'Web Dev Simplified',
                correct: true
            },
            {
                text: 'Traversy Media',
                correct: true
            },
            {
                text: 'Dev Ed',
                correct: true
            },
            {
                text: 'Fun Fun Function',
                correct: true
            }
        ]
    },
    {
        question: 'Is web development fun?',
        answers: [{
                text: 'Kinda',
                correct: false
            },
            {
                text: 'YES!!!',
                correct: true
            },
            {
                text: 'Um no',
                correct: false
            },
            {
                text: 'IDK',
                correct: false
            }
        ]
    },
    {
        question: 'What is 4 * 2?',
        answers: [{
                text: '6',
                correct: false
            },
            {
                text: '8',
                correct: true
            }
        ]
    }
]

//import gameQuestions as questions from 