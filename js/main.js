let body = document.body
let button = document.querySelector('button')
let div = document.getElementsByClassName('enleverr')


let btndark = document.querySelector('.darkmode')
btndark.addEventListener('click' , function(){
    if (body.className=='dark') {
        body.className='light'
        btndark.innerText='dark'
        button.className='light'
        button.className='bb'
        div.className='enleverr'

    } else {
        body.className='dark'
        btndark.innerText='light'
        button.className='dark'
    }
})