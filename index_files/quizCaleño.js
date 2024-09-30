const questions = [
    {
        question: "¿Qué significa la palabra 'oís'?",
        options: [
            "Es una forma de captar la atención del interlocutor, similar a 'Mirá vé'", // Correcta
            "Es una manera de pedir disculpas",
            "Significa que algo es muy caro",
            "Es una expresión usada para indicar cansancio"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué significa 'borondo'?",
        options: [
            "Salir sin rumbo fijo con los amigos", // Correcta
            "Es el nombre de un postre tradicional",
            "Significa ir a trabajar temprano",
            "Se usa para describir a alguien que está enojado"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué significa 'camellar'?",
        options: [
            "Significa descansar en la tarde",
            "Es trabajar", // Correcta
            "Es hacer ejercicio en la mañana",
            "Es viajar con frecuencia"
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué significa 'chuspa'?",
        options: [
            "Es una palabra para referirse a la lluvia",
            "Significa una bolsa plástica", // Correcta
            "Se usa para describir a alguien que no tiene dinero",
            "Es un término para algo muy pesado"
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué significa 'visajoso'?",
        options: [
            "Es una persona que le gusta llamar la atención alardeando", // Correcta
            "Se refiere a una persona tímida",
            "Es un término para alguien muy trabajador",
            "Describe a alguien que es callado y reservado"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué significa 'gasimba'?",
        options: [
            "Es una bebida gaseosa", // Correcta
            "Significa una persona muy energética",
            "Se refiere a una comida típica",
            "Es un postre tradicional"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué significa 'chichipato'?",
        options: [
            "Es una persona incumplida o mezquina", // Correcta
            "Se refiere a alguien que siempre llega temprano",
            "Es una expresión para alguien muy rico",
            "Significa alguien muy generoso"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué significa 'calidoso'?",
        options: [
            "Es algo de buena calidad o chévere", // Correcta
            "Significa algo frío",
            "Se refiere a un lugar oscuro",
            "Es una comida tradicional"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué significa 'bizcocho'?",
        options: [
            "Es una persona atractiva o bien parecida", // Correcta
            "Se refiere a una persona que cocina muy bien",
            "Significa alguien muy distraído",
            "Es una persona que siempre está cansada"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué significa 'chapeo'?",
        options: [
            "Es una persona ligeramente alicorada", // Correcta
            "Significa estar cansado",
            "Se refiere a una persona muy inteligente",
            "Es un término para alguien que trabaja en el campo"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué significa 'aguanta'?",
        options: [
            "Es alguien que reúne características para trascender de la amistad a algo más", // Correcta
            "Significa estar enfermo",
            "Es una persona que no tiene energía",
            "Se refiere a alguien que es muy rudo"
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
            window.location.href = "caleño.html"; // Redireccionar al finalizar
        }
    }, 5000); // Espera 5 segundos antes de cargar la siguiente pregunta
}

window.onload = loadQuestion;

