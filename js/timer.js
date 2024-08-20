const pageContainer = document.querySelector('.page-container');

const goToPage2Button = document.getElementById('goToPage2');
goToPage2Button.addEventListener('click', () => {
    pageContainer.style.transform = 'translateX(-100%)';
});

const goToPage1Button = document.getElementById('goToPage1');
goToPage1Button.addEventListener('click', () => {
    pageContainer.style.transform = 'translateX(0)';
});