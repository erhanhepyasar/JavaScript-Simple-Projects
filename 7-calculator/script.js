const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');

for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', function(){
        screen.value += btns[i].getAttribute('data-num');
    })
}

equalBtn.addEventListener('click', function(){
    if(screen.value === ''){
        alert('input is empty')
    } else {
        screen.value = eval(screen.value);
    }
})

clearBtn.addEventListener('click', function(){
    screen.value = '';
})