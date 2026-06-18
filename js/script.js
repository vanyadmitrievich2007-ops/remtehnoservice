

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

document.getElementById("requestform").addEventListener("submit", function(e) 
{ e.preventDefault();
 const name = document.querySelector("[name='name']").value;
 const phone = document.querySelector("[name='phone']").value;
 const msg = document.querySelector("[name='message']").value;

  const text =
 `Здравствуйте! Новая заявка:
 Имя: ${name}
 Телефон: ${phone}
 Опишите необходимую услугу: ${msg}`;

  const url = "https://wa.me/79142656584?text=" + encodeURIComponent(text);

 window.location.href = url;
});
