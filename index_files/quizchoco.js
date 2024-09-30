const questions = [
    {
        question: "¿Qué significa 'Prieto'?",
        options: [
            "Es dejarse el cabello largo",
            "Es quitarse todo el cabello de la cabeza", // Correcta
            "Es hacerse un peinado elaborado",
            "Es pintarse el cabello"
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué significa 'Pichicato'?",
        options: [
            "Es generosa y desprendida",
            "Es dura para gastar su dinero con los demás", // Correcta
            "Es amigable y cariñosa",
            "Siempre comprando regalos"
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué significa 'Barbachan'?",
        options: [
            "Hablar mucho y hacer poco", // Correcta
            "Hacer mucho trabajo",
            "Escuchar atentamente",
            "Ser muy callada"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué es una 'Boda'?",
        options: [
            "Fiesta",
            "Pequeña reunión entre amigos para hacer comida", // Correcta
            "Convite",
            "Celebración"
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué significa 'Biche'?",
        options: [
            "Bebida extraída del guarapo de caña", // Correcta
            "Un tipo de postre",
            "Una fruta tropical",
            "Un tipo de carne"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué significa 'Gallega'?",
        options: [
            "Grupo de personas que constantemente están juntos", // Correcta
            "Una forma de decir adiós",
            "Un término para una celebración",
            "Una reunión formal"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué es 'Cocada'?",
        options: [
            "Un dulce típico de la región a base de coco y panela", // Correcta
            "Un tipo de bebida",
            "Una celebración",
            "Una fruta"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué significa 'Corrinche'?",
        options: [
            "Chisme o desorden", // Correcta
            "Una forma de saludar",
            "Un tipo de comida",
            "Una celebración"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué significa 'Chimpo'?",
        options: [
            "Pedir que te presten un carro, una moto o una bicicleta para ir a darte una vuelta", // Correcta
            "Hacer ejercicio",
            "Reunirse con amigos",
            "Preparar comida"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué significa 'Ñingri'?",
        options: [
            "Cantidad o porción pequeña", // Correcta
            "Un tipo de comida",
            "Una forma de decir mucho",
            "Una expresión de sorpresa"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué significa 'Embelezado'?",
        options: [
            "Persona distraída viendo otra cosa", // Correcta
            "Alguien que presta atención",
            "Una persona muy inteligente",
            "Alguien que está siempre ocupado"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué significa 'Ajo'?",
        options: [
            "Ajo, manito, compraste celular nuevo", // Correcta
            "Un tipo de condimento",
            "Una forma de decir hola",
            "Un término para referirse a la comida"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué significa 'Atembado'?",
        options: [
            "Bobo", // Correcta
            "Inteligente",
            "Sabio",
            "Astuto"
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
            window.location.href = "choco.html"; // Redireccionar al finalizar
        }
    }, 2000); // Espera 5 segundos antes de cargar la siguiente pregunta
}

window.onload = loadQuestion;
