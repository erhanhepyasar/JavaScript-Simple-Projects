const bodyElement = document.querySelector('body'); // select by tag name
const btnChangeColor = document.querySelector('.colorBtn'); // select by class name
const txtHexCode = document.querySelector('.hexCode');

const hexNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

btnChangeColor.addEventListener('click', changeColor);

function changeColor(){
    let hexColorCode = '#';
    for(let i = 0; i < 6; i++){
        let rndNum = Math.floor(Math.random() * hexNums.length);
        hexColorCode += hexNums[rndNum];
    }
    console.log(hexColorCode);
    bodyElement.style.backgroundColor = hexColorCode;
    txtHexCode.innerHTML = hexColorCode;

}