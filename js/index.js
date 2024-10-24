const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    const currentSlideElement = slides[currentSlide];
    currentSlideElement.classList.remove('active');

    const currentTextElements = currentSlideElement.querySelectorAll('.text span, .text h1');
    currentTextElements.forEach(el => {
        el.style.opacity = '0'; 
        el.style.transform = 'translateX(-100%)';
    });

    currentSlide = index;
    const nextSlideElement = slides[currentSlide];
    nextSlideElement.classList.add('active');

    const nextImage = nextSlideElement.querySelector('.slide-img img');
    const slideImage = nextSlideElement.querySelector('.slide-img');
    const slideText = nextSlideElement.querySelector('.text');

    const isEvenSlide = currentSlide % 2 === 0;

    nextImage.style.transform = isEvenSlide ? 'translateX(-100%)' : 'translateX(100%)'; 

    slideImage.style.order = isEvenSlide ? '1' : '2';
    slideText.style.order = isEvenSlide ? '2' : '1';


    nextImage.style.transition = 'transform 1s ease'; 
    nextImage.style.transform = 'translateX(10%) scale(0.7)'; 

    setTimeout(() => {
        nextImage.style.transform = 'translateX(0) scale(1)'; 
    }, 1000); 

  
    const nextTextElements = nextSlideElement.querySelectorAll('.text span, .text h1');
    setTimeout(() => {
        nextTextElements.forEach(el => {
            el.style.opacity = '1'; 
            el.style.transform = 'translateX(0)'; 
        });
    }, 1000); 

    setTimeout(() => {
        nextImage.style.transform = isEvenSlide ? 'translateX(-100%)' : 'translateX(100%)'; 
    }, 5000); 
}


setTimeout(() => showSlide(0), 0);


setInterval(() => {
    const nextSlideIndex = (currentSlide + 1) % slides.length; 
    showSlide(nextSlideIndex);
}, 5000);
