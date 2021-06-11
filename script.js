const quizData = [
    {
        question: '1. The river Godavari is often referred to as Vridha Ganga because',
        a: 'it is the older river of India',
        b: 'of its large size and extent among the peninsular rivers',
        c: 'there are a fairly large number of pilgrimage centres situated on its banks',
        d: 'its length is nearly the same as that of the river Ganges',
        correct: 'b'
    },
    {
        question: '2. The scarcity or crop failure of which of the following can cause a serious edible oil crisis in India?',
        a: 'Coconut',
        b: 'Groundnut',
        c: 'Linseed',
        d: 'Mustard',
        correct: 'b'
    },
    {
        question: '3. The pennines (Europe), Appalachians (America) and the Aravallis (India) are examples of',
        a: 'old mountains',
        b: 'fold mountains',
        c: 'young mountains',
        d: 'block mountains',
        correct: 'a'
    },
    {
        question: '4. The number of major ports in India is',
        a: '5',
        b: '8',
        c: '13',
        d: '15',
        correct: 'c'
    },
    {
        question: '5. Which of the following is a peninsular river of India?',
        a: 'Ghandak',
        b: 'Kosi',
        c: 'Krishna',
        d: 'Sutlej',
        correct: 'c'
    },
    {
        question: '6. Which of the following is the most important raw material for generation of power in India?',
        a: 'Coal',
        b: 'Mineral Oil',
        c: 'Natural Gas',
        d: 'Uranium',
        correct: 'a'
    },
    {
        question: '7. Which of the following types of soil are mostly confined to river basins and coastal plains of India?',
        a: 'Red soil',
        b: 'Black soil',
        c: 'Laterite soil',
        d: 'Alluvial soil',
        correct: 'd'
    },
    {
        question: '8. The two states of India, most richly endowed with iron ore, are',
        a: 'Bihar and Orissa',
        b: 'Madhya Pradesh and Orissa',
        c: 'Bihar and West Bengal',
        d: 'Madhya Pradesh and West Bengal',
        correct: 'a'
    },
    {
        question: '9. The most fertile region of India is',
        a: 'the Himalayas',
        b: 'the Central Highlands',
        c: 'the Indo-Gangetic plain',
        d: 'peninsular plateau',
        correct: 'c'
    },
    {
        question: '10. Which of the following crops is regarded as a plantation crop?',
        a: 'Coconut',
        b: 'Cotton',
        c: 'Sugarcane',
        d: 'Rice',
        correct: 'a'
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

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
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
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});