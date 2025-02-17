const buttonsWrapper = document.querySelector('.carousel-map');
const slides = document.querySelector('.carousel');

buttonsWrapper.addEventListener('click', (e) => {
    if (e.target.nodeName === "BUTTON") {
        Array.from(buttonsWrapper.children).forEach(item =>
            item.classList.remove('active')
        );
        if (e.target.classList.contains('first')) {
            slides.style.transform = "translateX(-0%)";
            e.target.classList.add('active');
        } else if (e.target.classList.contains('second')) {
            slides.style.transform = "translateX(-46.36%)";
            e.target.classList.add('active');
        } else if (e.target.classList.contains('third')) {
            slides.style.transform = "translateX(-54.1%)";
            e.target.classList.add('active');
        }
    }
})