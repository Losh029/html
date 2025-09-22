const quizData = [{
        question: "What is the capital of France?",
        a: "Madrid",
        b: "Berlin",
        c: "Paris",
        d: "Rome",
        correct: "c"
    },
    {
        question: "Which language runs in a web browser?",
        a: "Python",
        b: "Java",
        c: "C",
        d: "JavaScript",
        correct: "d"
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheet",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b"
    },
    {
        question: "What does HTML stand for?",
        a: "HyperText Markup Language",
        b: "HighText Machine Language",
        c: "Hyperloop Machine Language",
        d: "None of the above",
        correct: "a"
    },
    {
        question: "Which year was JavaScript created?",
        a: "1996",
        b: "1995",
        c: "2000",
        d: "1994",
        correct: "b"
    },
    {
        question: "Which of the following is not a programming language?",
        a: "Python",
        b: "HTML",
        c: "Java",
        d: "C++",
        correct: "b"
    },
    {
        question: "Which is the correct CSS syntax?",
        a: "body:color=black;",
        b: "{body:color=black;}",
        c: "body { color: black; }",
        d: "{body;color:black;}",
        correct: "c"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        a: "<javascript>",
        b: "<script>",
        c: "<js>",
        d: "<code>",
        correct: "b"
    },
    {
        question: "Which company developed JavaScript?",
        a: "Mozilla",
        b: "Netscape",
        c: "Sun Microsystems",
        d: "Oracle",
        correct: "b"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        a: "msg('Hello World');",
        b: "alertBox('Hello World');",
        c: "alert('Hello World');",
        d: "msgBox('Hello World');",
        correct: "c"
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        a: "<style>",
        b: "<css>",
        c: "<script>",
        d: "<link>",
        correct: "a"
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        a: "var colors = 'red', 'green', 'blue'",
        b: "var colors = (1:'red', 2:'green', 3:'blue')",
        c: "var colors = ['red', 'green', 'blue']",
        d: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
        correct: "c"
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        a: "styles",
        b: "font",
        c: "style",
        d: "class",
        correct: "c"
    },
    {
        question: "What is the correct way to comment in JavaScript?",
        a: "# This is a comment",
        b: "// This is a comment",
        c: "<!-- This is a comment -->",
        d: "** This is a comment **",
        correct: "b"
    },
    {
        question: "Which method can be used to find the length of a string in JavaScript?",
        a: "length()",
        b: "count()",
        c: "strlen()",
        d: "string.length",
        correct: "d"
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly.</h2>
        <button onclick="location.reload()">Reload</button>
      `;
        }
    }
});