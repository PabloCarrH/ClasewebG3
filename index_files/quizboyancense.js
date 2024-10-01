const questions = [
    {
        question: "¿Qué significa la palabra 'sumercé'?",
        options: [
            "Es una forma respetuosa de dirigirse a alguien, equivalente a 'usted'", // Correcta
            "Es una forma de pedir permiso",
            "Significa que algo es muy barato",
            "Es una expresión usada para decir que alguien es fuerte"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué significa 'hacer un güepajé'?",
        options: [
            "Salir a dar una vuelta sin plan fijo", // Correcta
            "Es el nombre de una comida típica",
            "Significa ir a dormir temprano",
            "Se usa para describir a alguien que está triste"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué significa 'trabajar como una mula'?",
        options: [
            "Significa descansar en la tarde",
            "Es trabajar muy duro", // Correcta
            "Es hacer ejercicios de fuerza",
            "Es caminar largas distancias"
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué significa 'jaladora'?",
        options: [
            "Es una palabra para referirse al viento fuerte",
            "Significa una bolsa plástica", // Correcta
            "Se usa para describir a alguien que trabaja en el campo",
            "Es un término para algo muy pesado"
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué significa 'carranchil'?",
        options: [
            "Es una persona que se comporta de manera vulgar o rústica", // Correcta
            "Se refiere a una persona tímida",
            "Es un término para alguien muy trabajador",
            "Describe a alguien que es callado y reservado"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué significa 'pola'? ",
        options: [
            "Es una bebida alcohólica (cerveza)", // Correcta
            "Significa una persona energética",
            "Se refiere a una comida tradicional",
            "Es un postre"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué significa 'chirriado'?",
        options: [
            "Es una persona que se viste de forma ostentosa o exagerada", // Correcta
            "Se refiere a alguien que siempre llega tarde",
            "Es una expresión para alguien muy educado",
            "Significa alguien muy generoso"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué significa 'berraco'?",
        options: [
            "Es alguien muy hábil o valiente", // Correcta
            "Significa algo barato",
            "Se refiere a un lugar frío",
            "Es una comida típica"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué significa 'china'?",
        options: [
            "Es una joven o niña", // Correcta
            "Se refiere a una persona que cocina muy bien",
            "Significa alguien muy distraído",
            "Es una persona que siempre está cansada"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué significa 'mascando bocadillo'?",
        options: [
            "Es alguien que está ligeramente borracho", // Correcta
            "Significa estar cansado",
            "Se refiere a una persona muy inteligente",
            "Es un término para alguien que trabaja en el campo"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué significa 'eso aguanta'?",
        options: [
            "Es algo que puede funcionar bien o es una buena idea", // Correcta
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
            window.location.href = "boyacense.html"; // Redireccionar al finalizar
        }
    }, 2000); // Espera 5 segundos antes de cargar la siguiente pregunta
}

window.onload = loadQuestion;