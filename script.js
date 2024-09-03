let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    const newTransformValue = -currentIndex * 100;
    document.querySelector('.carousel').style.transform = `translateX(${newTransformValue}%)`;
}

document.addEventListener('wheel', (event) => {
    const delta = Math.sign(event.deltaY);
    const sections = document.querySelectorAll('body > div');
    const currentSection = Array.from(sections).findIndex(section => section.getBoundingClientRect().top === 0);
    
    if (delta > 0) {
        if (currentSection < sections.length - 1) {
            sections[currentSection + 1].scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        if (currentSection > 0) {
            sections[currentSection - 1].scrollIntoView({ behavior: 'smooth' });
        }
    }
});