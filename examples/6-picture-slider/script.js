const btnPrev = document.querySelector('.prevBtn');
const btnNext = document.querySelector('.nextBtn');
const divPicture = document.querySelector('.container');

btnNext.addEventListener('click', openNext);
btnPrev.addEventListener('click', openPrev);

let picNum = 0;

function openNext(){
    divPicture.animate([{opacity:'0.1'}, {opacity:'1.0'}], {duration:1000, fill:'forwards'})
    picNum++;
    if(picNum > 4){
        picNum = 0;
    }
    console.log(`url(img/bcg-${picNum}).jpg`)
    divPicture.style.backgroundImage = `url(img/bcg-${picNum}.jpg)`;
}

function openPrev(){
    divPicture.animate([{opacity:'0.1'}, {opacity:'1.0'}], {duration:1000, fill:'forwards'})
    picNum--;
    if(picNum < 0){
        picNum = 4;
    }
    
    console.log(`url(img/bcg-${picNum}).jpg`)
    divPicture.style.backgroundImage = `url(img/bcg-${picNum}.jpg)`;
}