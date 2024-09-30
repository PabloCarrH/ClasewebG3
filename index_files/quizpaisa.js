const questions = [
    {
        question: "¿Qué significa la palabra 'sisas'?",
        options: [
            "Expresión afirmativa que significa 'sí'",
            "Algo adicional que se da, generalmente en una compra",
            "Pereza o molestia para hacer algo",
            "Forma coloquial de referirse a los padres"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué es una 'ñapa'?",
        options: [
            "Algo adicional que se da, generalmente en una compra",
            "Una fiesta",
            "Una forma de decir adiós",
            "Un tipo de bebida"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué significa 'jartera'?",
        options: [
            "Una situación divertida",
            "Pereza o molestia para hacer algo",
            "Un tipo de comida",
            "Una celebración"
        ],
        correctAnswer: 1
    },
    {
        question: "¿Cómo se refiere comúnmente a los padres con el término 'cucho'?",
        options: [
            "A los hermanos",
            "A los abuelos",
            "A los padres",
            "A los amigos"
        ],
        correctAnswer: 2
    },
    {
        question: "¿Qué es el 'guaro'?",
        options: [
            "Un tipo de fruta",
            "Una bebida alcohólica",
            "Un postre típico",
            "Un tipo de música"
        ],
        correctAnswer: 1
    },
    {
        question: "Si alguien es 'teso', ¿qué significa?",
        options: [
            "Que es muy hábil",
            "Que es muy tonto",
            "Que es muy divertido",
            "Que es muy serio"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué implica la frase 'qué nota'?",
        options: [
            "Algo muy aburrido",
            "Algo muy bueno o agradable",
            "Algo muy complicado",
            "Algo muy fácil"
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué significa 'dar papaya'?",
        options: [
            "No cuidar algo adecuadamente",
            "Dar una fiesta",
            "Hacer un regalo",
            "Invitar a alguien"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué es una 'farra'?",
        options: [
            "Un tipo de comida",
            "Una fiesta o celebración",
            "Un problema",
            "Una canción"
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué significa 'paila'?",
        options: [
            "Mala suerte o una situación desafortunada",
            "Algo muy divertido",
            "Una comida típica",
            "Una bebida"
        ],
        correctAnswer: 0
    }
];

let currentQuestion = 0;

function loadQuestion() {
    document.getElementById('question').textContent = questions[currentQuestion].question;
    const buttons = document.querySelectorAll('.answer');
    buttons.forEach((button, index) => {
        button.textContent = questions[currentQuestion].options[index];
        button.classList.remove('correct', 'incorrect'); // Limpiar clases anteriores
        button.disabled = false; // Habilitar botones
    });
    document.getElementById('feedback-img').style.display = 'none';
}

function checkAnswer(selectedAnswer) {
    const buttons = document.querySelectorAll('.answer');
    const correctAnswer = questions[currentQuestion].correctAnswer;

    buttons[selectedAnswer].classList.add(selectedAnswer === correctAnswer ? 'correct' : 'incorrect');
    
    if (selectedAnswer !== correctAnswer) {
        buttons[correctAnswer].classList.add('correct'); // Marcar respuesta correcta
    }

    buttons.forEach(button => button.disabled = true); // Deshabilitar todos los botones

    // Esperar 2 segundos antes de cargar la siguiente pregunta
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            window.location.href = "paisa.html"; // Redireccionar al finalizar
        }
    }, 2000); // Espera 2 segundos antes de cargar la siguiente pregunta
}

window.onload = loadQuestion;
