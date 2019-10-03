const colorBtn = document.querySelector('.colorBtn'); // Class name
const bodyBcg = document.querySelector('body'); // Tag name

const colors = ['yellow', 'red', 'green', '#3b5998'];

colorBtn.addEventListener('click', changeColor) // changeColor: callback function

function changeColor() {
    let colorNum = Math.floor(Math.random() * colors.length)
    bodyBcg.style.backgroundColor = colors[colorNum];
}