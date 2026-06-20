function reveal() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
}
window.addEventListener('scroll', reveal);reveal();

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');

    console.log('burger:', burger);
    console.log('menu:', menu);

    burger.addEventListener('click', () => {
        console.log('click');
        menu.classList.toggle('active');
    });
});

