function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    const size = getRandomInt(20, 50);
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;

    heart.style.setProperty('--heart-size', `${size}px`);

    const opacity = Math.random().toFixed(2);
    heart.style.opacity = opacity;

    const delay = getRandomInt(0, 5);
    heart.style.animationDelay = `${delay}s`;

    const container = document.querySelector('.hearts-container');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    const xPos = getRandomInt(0, containerWidth - size);
    const yPos = getRandomInt(0, containerHeight - size);
    heart.style.left = `${xPos}px`;
    heart.style.top = `${yPos}px`;

    container.appendChild(heart);
}

for (let i = 0; i < 20; i++) {
    createHeart();
}

document.querySelector('.hearts-container').addEventListener('click', () => {
    const sheets = document.querySelector('.two-sheets');
    const card = document.querySelector('.conteiner');
    const triangle = document.querySelector('.triangle');
    const shadow = document.querySelector('.shadow');

    sheets.classList.add('move-sheets-down');
    card.classList.add('move-card-up');
    triangle.classList.add('move-triangle-down');
    shadow.classList.add('move-shadow');
});