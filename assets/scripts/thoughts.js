header
-title
-countdown clock
 set interval 1000ms to refresh
coundown--

myQuestionsArr[Question1,Question2]
RandomizeArray
Object Question1{
Q: 5+4
A1: 9
A2: 3
A3: 38
A4: 6
R:A1

}
Object Question2{
Q: 5+4
A1: 9
A2: 3
A3: 38
A4: 6
R:A1

}
if R!=A then 
remove 15sec
else
-next question()


    window.onload = function () {

        var questions = [{
                question: "What is the capital of United Kingdom?",
                choices: ["Manchester", "Birmingham", "London", "Birmingham"],
                answer: 2
            },

            {
                question: "What is the capital of United States?",
                choices: ["California", "New York", "Miami", "Florida"],
                answer: 1
            }


        ];

        var container = document.getElementById('container');
        for (var i = 0; i < questions.length; i++) {
            var questionContainer = document.createElement('DIV');
            questionContainer.textContent = questions[i].question;

            var options = questions[i].choices;
            for (var opt in options) {
                //create radiobutton
                //append radiobutton to a div 
            }
            container.appendChild(questionContainer);
        }
    };