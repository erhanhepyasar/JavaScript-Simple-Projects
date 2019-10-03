const display = document.querySelector("#display");
const btnMultiply = document.querySelector("#btnMultiply");
const btnDivide = document.querySelector("#btnDivide");
const btnSubstract = document.querySelector("#btnSubstract");
const btnAdd = document.querySelector("#btnAdd");
const btnDot = document.querySelector("#btnDot");
const btnNine = document.querySelector("#btnNine");
const btnEight = document.querySelector("#btnEight");
const btnSeven = document.querySelector("#btnSeven");
const btnSix = document.querySelector("#btnSix");
const btnFive = document.querySelector("#btnFive");
const btnFour = document.querySelector("#btnFour");
const btnThree = document.querySelector("#btnThree");
const btnTwo = document.querySelector("#btnTwo");
const btnOne1 = document.querySelector("#btnOne");
const btnZero = document.querySelector("#btnZero");
const btnEqual = document.querySelector("#btnEqual");
const btnClear = document.querySelector("#btnClear");

let dotAdded = false;
let operand = 0;
let number1 = 0;
let number2 = "";

btnMultiply.addEventListener('click', funcMultiply);
btnDivide.addEventListener('click', funcDivide);
btnSubstract.addEventListener('click', funcSubstract);
btnAdd.addEventListener('click', funcAdd);
btnDot.addEventListener('click', funcDot);
btnNine.addEventListener('click', funcNine);
btnEight.addEventListener('click', funcEight);
btnSeven.addEventListener('click', funcSeven);
btnSix.addEventListener('click', funcSix);
btnFive.addEventListener('click', funcFive);
btnFour.addEventListener('click', funcFour);
btnThree.addEventListener('click', funcThree);
btnTwo.addEventListener('click', funcTwo);
btnOne1.addEventListener('click', funcOne);
btnZero.addEventListener('click', funcZero);
btnEqual.addEventListener('click', funcEqual);
btnClear.addEventListener('click', funcClear);


function funcClear(){
    display.innerHTML = "";
    dotAdded = false;    
    operand = 0;
    number1 = 0;
    number2 = "";
}

function funcEqual(){
    console.log("number1: " + number1);
    console.log("number2: " + number2);
    if(operand == 1){       
        number1 = number1 + parseFloat(number2);        
    } else  if(operand == 2){
        number1 = number1 - parseFloat(number2);
    } else  if(operand == 3){
        number1 = number1 * parseFloat(number2);
    } else  if(operand == 4){
        number1 = number1 / parseFloat(number2);
    } 
    console.log("number1: " + number1);
    display.innerHTML = number1;
    operand = 0;
    number2 = "";
    dotAdded = false;
}

function funcAdd(){
    if(operand != 0 || display.innerHTML == ""){
        return;
    }
    operand = 1;
    number1 = parseFloat(display.innerHTML);
    display.innerHTML += "+";
}

function funcSubstract(){
    if(operand != 0 || display.innerHTML == ""){
        return;
    }
    operand = 2;
    number1 = parseFloat(display.innerHTML);
    display.innerHTML += "-";
}

function funcMultiply(){
    if(operand != 0 || display.innerHTML == ""){
        return;
    }
    operand = 3;
    number1 = parseFloat(display.innerHTML);
    display.innerHTML += "x";
}

function funcDivide(){
    if(operand != 0 || display.innerHTML == ""){
        return;
    }
    operand = 4;
    number1 = parseFloat(display.innerHTML);
    display.innerHTML += "/";
}


function funcOne(){
    display.innerHTML += "1";
    if(operand != 0){
        number2 += "1";
    }
    console.log("number2:" + number2);
}

function funcTwo(){
    display.innerHTML += "2";
    if(operand != 0){
        number2 += "2";
    }
}

function funcThree(){
    display.innerHTML += "3";
    if(operand != 0){
        number2 += "3";
    }
}

function funcFour(){
    display.innerHTML += "4";
    if(operand != 0){
        number2 += "4";
    }
}

function funcFive(){
    display.innerHTML += "5";
    if(operand != 0){
        number2 += "5";
    }
}

function funcSix(){
    display.innerHTML += "6";
    if(operand != 0){
        number2 += "6";
    }
}

function funcSeven(){
    display.innerHTML += "7";
    if(operand != 0){
        number2 += "7";
    }
}

function funcEight(){
    display.innerHTML += "8";
    if(operand != 0){
        number2 += "8";
    }
}

function funcNine(){
    display.innerHTML += "9";
    if(operand != 0){
        number2 += "9";
    }
}

function funcZero(){
    if(display.innerHTML == ""){
        return;
    }
    display.innerHTML += "0";
    if(operand != 0){
        number2 += "0";
    }
}

function funcDot(){
    if(dotAdded){
        return;
    }
    display.innerHTML += ".";
    dotAdded = true;
    if(operand != 0){
        number2 += ".";
    }
}