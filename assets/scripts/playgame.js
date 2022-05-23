let startButton = document.getElementById('start-btn');
let nextButton = document.getElementById('next-btn');
let questionContainerElement = document.getElementById('question-container');
let questionElement = document.getElementById('question');
let answerButtonsElement = document.getElementById('answer-buttons');
let countE1 = document.querySelector("#count");
let scoreCount = 0



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

    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    let selectedButton = e.target
    let correct = selectedButton.dataset.correct
    processResults(correct);
    console.log(correct);
    Array.from(answerButtonsElement.children).forEach(button => {})
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function processResults(isCorrect) {
    if (!isCorrect) {
        // insert negative time
        return;
    }

    scoreCount = parseInt(countE1.textContent, 10) || 0;

    countE1.textContent = scoreCount + 100;
}

//import gameQuestions as questions from 
//Create List of questions
let questions = [

    {
        question: 'How do you break within a string?',
        answers: [{
                text: 'Forwardslash',
                correct: false
            },
            {
                text: 'Hashtag',
                correct: false
            },
            {
                text: 'Backslash',
                correct: true
            },
            {
                text: 'Interrobang',
                correct: false
            }
        ]
    },
    {
        question: 'Which method remove variables from the end of an array?',
        answers: [{
                text: 'shift()',
                correct: false
            },
            {
                text: 'pop()',
                correct: true
            },
            {
                text: 'unshift()',
                correct: false
            },
            {
                text: 'push()',
                correct: false
            }
        ]
    },
    {
        question: 'the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.',
        answers: [{
                text: 'interpolation',
                correct: false
            },
            {
                text: 'extrapolation',
                correct: false
            },
            {
                text: 'object dominence',
                correct: false
            },
            {
                text: 'Hoisting',
                correct: true
            }
        ]
    },
    {
        question: 'What are JavaScript Data Types?',
        answers: [{
                text: 'Number, String, Boolean, Object, Undefined',
                correct: true
            },
            {
                text: 'Function, String, Boolean, Object, Number',
                correct: false
            },
            {
                text: 'HTML, CSS, JS, ASP, jQuery',
                correct: false
            },
            {
                text: 'innerHTML, textarea, select, form, button',
                correct: false
            }
        ]
    },
    {
        question: 'What does NaN mean?',
        answers: [{
                text: 'Not a number.',
                correct: true
            },
            {
                text: 'Now a Null',
                correct: false
            },
            {
                text: 'Number as Numerical',
                correct: false
            },
            {
                text: 'Nth of a number ',
                correct: false
            }
        ]
    },
    {
        question: 'Which company developed JavaScript?',
        answers: [{
                text: 'Java Ltd',
                correct: false
            },
            {
                text: 'Microsoft Corporation',
                correct: false
            },
            {
                text: 'Apple Corporation',
                correct: false
            },
            {
                text: 'Netscape',
                correct: true
            }
        ]
    },
    {
        question: 'a notation resembling a simplified programming language, used in program design.',
        answers: [{
                text: 'javascript',
                correct: false
            },
            {
                text: 'hoisting',
                correct: false
            },
            {
                text: 'pseudocode',
                correct: true
            },
            {
                text: 'key pair',
                correct: false
            }
        ]
    },
    {
        question: 'What is the strict equality operator?',
        answers: [{
                text: '+=',
                correct: false
            },
            {
                text: '===',
                correct: true
            },
            {
                text: '==',
                correct: false
            },
            {
                text: '>=',
                correct: false
            }
        ]
    },
    {
        question: 'A keyword that refers to the object from where it was called',
        answers: [{
                text: 'Function',
                correct: false
            },
            {
                text: 'Method',
                correct: false
            },
            {
                text: 'Document',
                correct: false
            },
            {
                text: 'This',
                correct: true
            }
        ]
    },
    {
        question: 'What is the data type of variables in JavaScript?',
        answers: [{
                text: 'Function data types',
                correct: false
            },
            {
                text: 'Operator data types',
                correct: false
            },
            {
                text: 'Object data types',
                correct: true
            },
            {
                text: 'Typescript data types',
                correct: false
            }
        ]
    },
]