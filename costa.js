let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(slideIndex) {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === slideIndex) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}
        const images = [
            {src: "/cartagena.jpg", title: "Cartagena: La Ciudad Amurallada del Caribe"},
            {src: "/santamarta.jpg", title: "Santa Marta: Entre Mar y Sierra"},
            {src: "/barranquilla.jpg", title: "Barranquilla: Puerta de Oro de Colombia"},
            {src: "/valledupar.jpg", title: "Valledupar: Cuna del Vallenato y Tierra de Leyendas"},
            {src: "/Monteria.jpg", title: "Monteria:La Perla del Sinú"},
            {src: "/rioacha.jpg", title: "Rioacha:En el Corazón de la Guajira Desértica"},
            {src: "/sincelejo.jpg", title: "Sincelejo: Tradición Sabana y Tierra de Fiestas"},
            
            
        ];
        

        let currentImage = 0;

        function nextImage() {
            const carouselImages = document.querySelectorAll('.carousel-image');
            const carouselTitle = document.getElementById('carousel-title');
            
            carouselImages[currentImage].classList.remove('active');
            currentImage = (currentImage + 1) % images.length;
            carouselImages[currentImage].classList.add('active');
            carouselTitle.textContent = images[currentImage].title;
        }

        function showTab(tabName) {
            const tabs = document.getElementsByClassName('tab-content');
            for (let tab of tabs) {
                tab.classList.remove('active');
            }
            document.getElementById(tabName).classList.add('active');

            const buttons = document.getElementsByClassName('tab-button');
            for (let button of buttons) {
                button.classList.remove('active');
            }
            document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
        }

        document.addEventListener('DOMContentLoaded', () => {
            setInterval(nextImage, 5000);

            const tabButtons = document.getElementsByClassName('tab-button');
            for (let button of tabButtons) {
                button.addEventListener('click', () => showTab(button.getAttribute('data-tab')));
            }

            const carouselTitle = document.getElementById('carousel-title');
            carouselTitle.textContent = images[0].title;
        });
    

// Iniciar el carrusel con el primer slide
showSlide(currentSlide);
