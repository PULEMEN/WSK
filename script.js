document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".review-slider");
    let reviews = ["Отличные курсы!", "Теперь я сам делаю сайты!"];
    let index = 0;

    setInterval(() => {
        slider.innerHTML = `<p>${reviews[index]}</p>`;
        index = (index + 1) % reviews.length;
    }, 3000);
});

// Валидация формы
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Спасибо за заявку! Мы свяжемся с вами.");
});
