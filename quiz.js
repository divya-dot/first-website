

var questions = [{
    question: "Which type of JavaScript language is __",
    choices: ["Object-Oriented", "Object-Based", "Assembly-language", "High-level"] ,
    correctAnswer: 1
}, {
    question:  "In JavaScript, what is a block of statement?",
    choices: ["Conditional block", "block that combines a number of statements into a single compound statement", "both conditional block and a single statement ", "block that contains a single statement"],
    correctAnswer: 1
}, {
    question: "The function and  var are known as:",
    choices: ["Keywords", "Data type", "Declaration statemet", "Prototypes"],
    correctAnswer: 0
}, {
    question: "Which of the following type of a variable is volatile?",
    choices: ["Mutable variable", "Dynamic variable", "Volatile variable", "Immutable variable"],
    correctAnswer: 2
}, {
    question: "Which of the following option is used as hexadecimal literal beginning?",
    choices: ["00", "0x", "0X", "Both 0x and 0X"],
    correctAnswer: 3
},{
    question: "Ctrl,Shift and Alt are called ______ keys.",
    choice: ["Modifier","Function","Alphanumeric","Adjustment"],
    correctAnswer:1
},{
    question:"MS Word is an example of _______.",
    choice:["An Operating System","A Processing Device","Application Software","An Input Device"],
    correctAnswer:3
},{
    question:"A computer cannot 'boot'if it doesn't have the ________.",
    choice:["Compiler","Loader","Operating System","Assembler"],
    correctAnswer:3
}, {
    question:"_______is the process of dividing the disk into tracks and sectors.",
    choice:["Tracking","Formatting","Crashing","Allotting"],
    correctAnswer:2
}, {
    question:"Junk e-mail is also called_______.",
    choice:["Spam","Spoof","Spool","None of these"],
    correctAnswer:1
}, {
    question:"By default,your document print in ________mode.",
    choice:["Landscape","Portrait","Page Setup","Print View"],
    correctAnswer:2
}, {
    question:"WWW stands for?",
    choice:["World Whole page","Wide World Web","Web World Web","World Wibe Web"],
    correctAnswer:4
}, {
    question:"Which among following first generation of computer had?",
    choice:["Vaccum Tubes and Magentic","Intergrated Circuit","Magnetic Tape and Transistors","All of above"],
    correctAnswer:1
}, {
    question:"Where is RAM located?",
    choice:["Expansion Board","External Drive","Mother Board","All of above"],
    correctAnswer:3
}, {
    question:"If a computer has more than one processor then it is known as?",
    choice:["Uniprocess","Multiprocessor","Multithreaded","Multipragramming"],
    correctAnswer:2
}, {
    question:"If a computer provides database services to other, then it will be known as?",
    choice:["Web Server","Application Server","Database Server","FTP Server"],
    correctAnswer:3
}, {
    
     question: "Which of the following number object function returns the value of the number?",
    choices: ["toString()", "valueOf()", "toLocaleString()", " toPrecision()"],
    correctAnswer: 1

}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () {

    // Display the first question
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();

    // On clicking next, display the next question
    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".quizMessage").text("Please select an option");
                $(document).find(".quizMessage").show();
            } else {
                // TODO: Remove any message -> not sure if this is efficient to call this each time....
                $(document).find(".quizMessage").hide();

                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++; // Since we have already displayed the first question on DOM ready
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    //                    $(document).find(".nextButton").toggle();
                    //                    $(document).find(".playAgainButton").toggle();
                    // Change the text in the next button to ask if user wants to play again
                    $(document).find(".nextButton").text("Attempt Again?");
                    quizOver = true;
                }
            }
        } else { // quiz is over and clicked the next button (which now displays 'Play Again?'
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

});

// This displays the current question AND the choices
function displayCurrentQuestion() {

    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    // Set the questionClass text to the current question
    $(questionClass).text(question);

    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".quizContainer > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}
