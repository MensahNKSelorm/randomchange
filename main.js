const body = document.querySelector('body');
const button = document.querySelector('button');

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

function changeBackground() {
    const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    body.style.backgroundColor = randomColor;
}

button.addEventListener('click', changeBackground);