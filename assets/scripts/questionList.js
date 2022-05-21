let questionArray = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question0]

let randomQuestion = questionArray[Math.floor(Math.random() * questionArray.length)];
//List of questions
let question0 = {
    Q: 'Which method remove variables from the end of an array?',
    A1: 'push()',
    A2: 'pop()',
    A3: 'shift()',
    A4: 'unshift()',
    R: 'A2'

}
let question1 = {
    Q: 'a notation resembling a simplified programming language, used in program design.',
    A1: 'javascript',
    A2: 'hoisting',
    A3: 'pseudocode',
    A4: 'key pair',
    R: 'A3'

}
let question2 = {
    Q: 'the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.',
    A1: 'interpolation',
    A2: 'extrapolation',
    A3: 'object dominence',
    A4: 'Hoisting',
    R: 'A4'

}
let question3 = {
    Q: 'What are JavaScript Data Types?',
    A1:'Number, String, Boolean, Object, Undefined',
    A2:'Function, String, Boolean, Object, Number',
    A3:'HTML, CSS, JS, ASP, jQuery',
    A4:'innerHTML, textarea, select, form, button',
    R:'A1'

}
let question4 = {
    Q: 'How do you break within a string?',
    A1: 'Forwardslash',
    A2: 'Hashtag',
    A3: 'Backslash', 
    A4: 'Interrobang',
    R: 'A3'

}

let question5 = {
    Q: 'Which company developed JavaScript?',
    A1: 'Java Ltd',
    A2: 'Microsoft Corporation',
    A3: 'Apple Corporation',
    A4: 'Netscape',
    R: 'A4'

}
let question6 = {
    Q: 'What does NaN mean?',
    A1: 'Not a number.',
    A2: 'Now a Null',
    A3: 'Number as Numerical',
    A4: 'Nth of a number ',
    R: 'A1'

}
let question7 = {
    Q: 'A keyword that refers to the object from where it was called',
    A1: 'Function',
    A2: 'Method',
    A3: 'Document',
    A4: 'This',
    R: 'A4'

}
let question8 = {
    Q: 'What is the strict equality operator?',
    A1: '+=',
    A2: '===',
    A3: '==',
    A4: '>=',
    R: 'A2'

}
let question9 = {
    Q: 'What is the data type of variables in JavaScript?',
    A1: 'Function data types',
    A2: 'Operator data types',
    A3: 'Object data types',
    A4: 'Typescript data types',
    R: 'A3'

}



//select random question