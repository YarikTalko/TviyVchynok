const buttonsWrapper = document.querySelector('.carousel-map');
const slides = document.querySelector('.carousel');

buttonsWrapper.addEventListener('click', (e) => {
    let width = 250;
    let gap = 13;
    let sum = width + gap;
    if (e.target.nodeName === "BUTTON") {
        Array.from(buttonsWrapper.children).forEach(item =>
            item.classList.remove('active')
        );
        if (e.target.classList.contains('first')) {
            slides.style.transform = "translateX(-0%)";
            e.target.classList.add('active');
        } else if (e.target.classList.contains('second')) {
            slides.style.transform = "translateX(-" + sum + "px)";
            e.target.classList.add('active');
        } else if (e.target.classList.contains('third')) {
            sum = sum * 2;
            slides.style.transform = "translateX(-" + sum + "px)";
            e.target.classList.add('active');
        } else if (e.target.classList.contains('fourth')) {
            sum = sum * 3;
            slides.style.transform = "translateX(-" + sum + "px)";
            e.target.classList.add('active');
        } else if (e.target.classList.contains('fifth')) {
            sum = sum * 4;
            slides.style.transform = "translateX(-" + sum + "px)";
            e.target.classList.add('active');
        } else if (e.target.classList.contains('sixth')) {
            sum = sum * 5;
            slides.style.transform = "translateX(-" + sum + "px)";
            e.target.classList.add('active');
        } else if (e.target.classList.contains('seventh')) {
            sum = sum * 6;
            slides.style.transform = "translateX(-" + sum + "px)";
            e.target.classList.add('active');
        } else if (e.target.classList.contains('eight')) {
            sum = sum * 7;
            slides.style.transform = "translateX(-" + sum + "px)";
            e.target.classList.add('active');
        } else if (e.target.classList.contains('ninth')) {
            sum = sum * 8;
            slides.style.transform = "translateX(-" + sum + "px)";
            e.target.classList.add('active');
        } else if (e.target.classList.contains('tenth')) {
            sum = sum * 8.7;
            slides.style.transform = "translateX(-" + sum + "px)";
            e.target.classList.add('active');
        }
    }
})