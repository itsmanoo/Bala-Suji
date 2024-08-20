function updateCountdown() {
    const startDate = new Date("2022-09-02");
    const currentDate = new Date();
    const timeDifference = currentDate - startDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    updateElementWithAnimation("days", days);
    updateElementWithAnimation("hours", hours);
    updateElementWithAnimation("minutes", minutes);
    updateElementWithAnimation("seconds", seconds);
}

function updateElementWithAnimation(id, newValue) {
    const element = document.getElementById(id);
    const currentValue = element.textContent;

    if (currentValue !== newValue) {
        element.textContent = newValue.toString().padStart(2, "0");
        element.classList.add();

        setTimeout(() => {
            element.classList.remove();
        }, 300);
    }
}

updateCountdown();
setInterval(updateCountdown, 1000);


// Найти новую кнопку-сердечко и модальное окно по их id
const heartButton = document.querySelector(".heart-button");
const modal = document.getElementById("modal");
const closeModalButton = document.getElementById("close-modal");

heartButton.addEventListener("click", () => {
    modal.style.display = "block";
});

// Закрыть модальное окно при клике на кнопку "Закрыть"
closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// Закрыть модальное окно при клике за его пределами
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


