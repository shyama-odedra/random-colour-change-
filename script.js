const button = document.getElementById('color-btn'); 
const body = document.querySelector('body');        

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    return `rgb(${r}, ${g}, ${b})`;
}

button.addEventListener('click', function() {
    const randomColor = getRandomColor();
    
    body.style.backgroundColor = randomColor;
});