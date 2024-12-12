const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Textual Markup Language"],
        answer: 0
    },
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System", "Colorful Style Sheets"],
        answer: 0
    },
    {
        question: "Which JavaScript function is used to print to the console?",
        options: ["print()", "console.log()", "log.console()", "print.console()"],
        answer: 1
    },
    {
        question: "Which HTML element is used for the largest heading?",
        options: ["<head>", "<h6>", "<h1>", "<header>"],
        answer: 2
    },
    {
        question: "Which CSS property is used to change the background color?",
        options: ["color", "background-color", "bgcolor", "background"],
        answer: 1
    },
    {
        question: "Which HTML attribute is used to link an external JavaScript file?",
        options: ["src", "link", "href", "script"],
        answer: 0
    },
    {
        question: "How do you add a comment in JavaScript?",
        options: ["// This is a comment", "<!-- This is a comment -->", "/* This is a comment */", "# This is a comment"],
        answer: 0
    },
    {
        question: "Which CSS property controls the text size?",
        options: ["font-style", "font-size", "text-size", "text-style"],
        answer: 1
    },
    {
        question: "Which HTML tag is used to define an unordered list?",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        answer: 1
    },
    {
        question: "Which method can be used to select an element by ID in JavaScript?",
        options: ["getElementByClassName", "getElementsByTagName", "querySelector", "getElementById"],
        answer: 3
    },
    {
        question: "What is the default display value of the <div> element?",
        options: ["inline", "block", "inline-block", "flex"],
        answer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionButtons = document.querySelectorAll('.option');

    questionElement.textContent = questions[currentQuestionIndex].question;
    optionButtons.forEach((button, index) => {
        button.textContent = questions[currentQuestionIndex].options[index];
    });
}

function selectOption(optionIndex) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (optionIndex === correctAnswer) {
        score++;
        document.getElementById('score').textContent = score;
        alert("Correct!");
    } else {
        alert("Wrong answer!");
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert("Quiz Over! Your final score is " + score);
        currentQuestionIndex = 0;
        score = 0;
        document.getElementById('score').textContent = score;
        loadQuestion();
    }
}

// Load the first question when the page loads
loadQuestion();
