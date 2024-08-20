let heartCount = 0;

function createHeart() {
    if (heartCount < 40) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        const xPos = Math.random() * (window.innerWidth - 50);
        const yPos = Math.random() * (window.innerHeight - 50);
        heart.style.left = `${xPos}px`;
        heart.style.top = `${yPos}px`;
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.classList.add('exploding');
            setTimeout(() => {
                heart.remove();
                heartCount--;
            }, 500);
        }, 500);

        heartCount++;
    }
}

setInterval(createHeart, 500);