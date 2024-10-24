const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    const currentSlideElement = slides[currentSlide];
    currentSlideElement.classList.remove('active');

    // Lấy tất cả phần tử văn bản trong slide hiện tại
    const currentTextElements = currentSlideElement.querySelectorAll('.text span, .text h1');
    currentTextElements.forEach(el => {
        el.style.opacity = '0'; 
        el.style.transform = 'translateY(-20px)'; // Đưa văn bản ra khỏi vị trí
    });

    currentSlide = index;
    const nextSlideElement = slides[currentSlide];
    nextSlideElement.classList.add('active');

    const nextImage = nextSlideElement.querySelector('.slide-img img');
    const slideImage = nextSlideElement.querySelector('.slide-img');
    const slideText = nextSlideElement.querySelector('.text');

    // Xác định hiệu ứng dựa trên slide
    const effectIndex = currentSlide % 6; 

    // Hoán đổi vị trí
    const shouldSwap = currentSlide > 0; 
    if (shouldSwap) {
        slideImage.style.order = effectIndex % 2 === 0 ? '2' : '1'; 
        slideText.style.order = effectIndex % 2 === 0 ? '1' : '2';
    } else {
        slideImage.style.order = '1';
        slideText.style.order = '2';
    }

    // Hiệu ứng cho ảnh
    switch (effectIndex) {
        case 0:
            nextImage.style.transform = 'scale(0.7)';
            nextImage.style.transition = 'transform 1s ease';
            setTimeout(() => {
                nextImage.style.transform = 'scale(1)'; 
            }, 1000); 
            break;
        case 1:
            nextImage.style.transform = 'translateX(-100%)';
            nextImage.style.transition = 'transform 1s ease';
            setTimeout(() => {
                nextImage.style.transform = 'translateX(0)'; 
            }, 1000); 
            break;
        case 2:
            nextImage.style.transform = 'translateX(100%)';
            nextImage.style.transition = 'transform 1s ease';
            setTimeout(() => {
                nextImage.style.transform = 'translateX(0)'; 
            }, 1000); 
            break;
        case 3:
            nextImage.style.transform = 'translateY(-100%)';
            nextImage.style.transition = 'transform 1s ease';
            setTimeout(() => {
                nextImage.style.transform = 'translateY(0)'; 
            }, 1000); 
            break;
        case 4:
            nextImage.style.transform = 'translateY(100%)';
            nextImage.style.transition = 'transform 1s ease';
            setTimeout(() => {
                nextImage.style.transform = 'translateY(0)'; 
            }, 1000); 
            break;
        case 5:
            nextImage.style.transform = 'scale(1.5)';
            nextImage.style.transition = 'transform 1s ease';
            setTimeout(() => {
                nextImage.style.transform = 'scale(1)'; 
            }, 1000); 
            break;
    }

    // Hiệu ứng cho văn bản
    const nextTextElements = nextSlideElement.querySelectorAll('.text span, .text h1');
    
    // Đặt opacity về 0 và đưa văn bản ra khỏi vị trí ban đầu
    nextTextElements.forEach(el => {
        el.style.opacity = '0'; 
        el.style.transform = 'translateY(-20px)'; // Đưa ra ngoài vị trí ban đầu
    });

    // Khởi động animation cho cả h1 và span
    setTimeout(() => {
        nextTextElements.forEach(el => {
            el.style.opacity = '1'; 
            el.style.transition = 'opacity 1s ease, transform 1s ease'; // Chạy animation đồng bộ
            el.style.transform = 'translateY(0)'; // Đặt lại vị trí về ban đầu
        });
    }, 1000); 

    // Hiệu ứng quay trở lại cho ảnh
    setTimeout(() => {
        switch (effectIndex) {
            case 0:
                nextImage.style.transform = 'scale(0.7)';
                break;
            case 1:
                nextImage.style.transform = 'translateX(-100%)';
                break;
            case 2:
                nextImage.style.transform = 'translateX(100%)';
                break;
            case 3:
                nextImage.style.transform = 'translateY(-100%)';
                break;
            case 4:
                nextImage.style.transform = 'translateY(100%)';
                break;
            case 5:
                nextImage.style.transform = 'scale(1.5)';
                break;
        }
    }, 9000); 
}

setTimeout(() => showSlide(0), 0);

setInterval(() => {
    const nextSlideIndex = (currentSlide + 1) % slides.length; 
    showSlide(nextSlideIndex);
}, 9000);
