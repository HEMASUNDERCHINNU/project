document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.container img');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const box = document.querySelector('.box');
    const audio = document.getElementById('click-sound');
    let currentIndex = 0;
    const gap = 30;


    function playSound() {
        audio.currentTime = 0;
        audio.play();
    }

    function updateCarousel() {
        const spans = document.querySelectorAll('.box span');
        spans.forEach((span, index) => {
            span.style.setProperty('--i', index);
            span.style.setProperty('--gap', `${gap}px`);
        });
        box.style.transform = `rotateY(${currentIndex * -45}deg)`;
    }

    
    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        updateCarousel();
        playSound();
    });

    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        updateCarousel();
        playSound();
    });

   
    updateCarousel();
});
