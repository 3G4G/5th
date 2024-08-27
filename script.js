const quizData = [
    {
        question: "pH値8以上14以下で、動植物性油脂などのたんぱく質由来の有機物の汚れを除去するための洗剤は何ですか？",
        options: ["酸性洗剤", "還元型漂白剤", "アルカリ性洗剤", "エフロ"],
        correct: 2
    },
    {
        question: "コンクリートやモルタルから滲み出た水溶性の水酸化カルシウムが大気中の炭酸ガスと反応してできる、白い沈着物を指す言葉は何ですか？",
        options: ["サビ", "エフロ", "青サビ", "還元型漂白剤"],
        correct: 1
    }
    {
        question: "コンクリートやモルタルから滲み出た水溶性の水酸化カルシウムが大気中の炭酸ガスと反応してできる、白い沈着物を指す言葉は何ですか？",
        options: ["サビ", "エフロ", "青サビ", "還元型漂白剤"],
        correct: 1
    }
    // 必要に応じて他の問題も追加
];

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = -1;

const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const nextButton = document.getElementById('next-btn');
const resultElement = document.getElementById('result');

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    answersElement.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.addEventListener('click', () => selectAnswer(button, index));
        answersElement.appendChild(button);
    });
}

function selectAnswer(button, index) {
    const correctAnswer = quizData[currentQuestionIndex].correct;
    if (index === correctAnswer) {
        button.style.backgroundColor = 'green';
        score++;
    } else {
        button.style.backgroundColor = 'red';
        // 正解のボタンを緑にする
        const correctButton = answersElement.children[correctAnswer];
        correctButton.style.backgroundColor = 'green';
    }
    // 全てのボタンを非活性化する
    Array.from(answersElement.children).forEach(btn => btn.disabled = true);
    nextButton.style.display = 'block';
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
    nextButton.style.display = 'none';
});

function showResult() {
    questionElement.style.display = 'none';
    answersElement.style.display = 'none';
    nextButton.style.display = 'none';
    resultElement.innerText = `Your score: ${score}/${quizData.length}`;
}

loadQuestion();
