const inputMessage = document.querySelector('#inputText')
const outputMessage = document.querySelector('#message')
const btnSend = document.querySelector('#btnSend')

btnSend.addEventListener('click', e =>{
    if(inputMessage.value == ''){
        alert('Please enter a valid value')
        return
    }
    outputMessage.innerHTML = inputMessage.value
    inputMessage.value = ''
})
