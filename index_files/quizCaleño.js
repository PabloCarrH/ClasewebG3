const questions = [
    {
        question: "¿Qué significa la palabra 'Ois'?",
        options: [
            "Es una expresión usada para indicar cansancio",
            "Es una forma de captar la atención del interlocutor",
            "Significa que algo es muy caro",
            "Es una manera de pedir disculpas"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué es una 'Borondo'?",
        options: [
            "Es salir sin rumbo fijo con los amigos",
            "Es el nombre de un postre tradicional",
            "Significa ir a trabajar temprano",
            "Se usa para describir a alguien que está enojado"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué significa 'chuspa'?",
        options: [
            "Es una palabra para referirse a la lluvia",
            "Se usa para describir a alguien que no tiene dinero",
            "Significa una bolsa plástica",
            "Es un término para algo muy pesado"
        ],
        correctAnswer: 1
    },
    {
        question: "¿Cómo se refiere comúnmente a los padres con el término 'chapeo'?",
        options: [
            "Es una persona ligeramente alicorada",
            "Significa estar cansado",
            "Se refiere a una persona muy inteligente",
            "Es un término para alguien que trabaja en el campo"
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

    // Esperar 5 segundos antes de cargar la siguiente pregunta
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            window.location.href = "paisa.html"; // Redireccionar al finalizar
        }
    }, 5000); // Espera 5 segundos antes de cargar la siguiente pregunta
}

window.onload = loadQuestion;
