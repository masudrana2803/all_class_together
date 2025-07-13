let input1 = document.querySelector('.pl1')
let input2 = document.querySelector('.pl2')
let input3 = document.querySelector('.pl3')
let p1g = document.querySelector('.p1g')
let p2g = document.querySelector('.p2g')
let p3g = document.querySelector('.p3g')
let error = document.querySelector('.error')




p1g.addEventListener('click',()=>{
    error.innerHTML=("Set a value first for the player 1")
})
p2g.addEventListener('click',()=>{
    error.innerHTML=("Set a value first for the player 2")
})
p3g.addEventListener('click',()=>{
    error.innerHTML=("Set a value first for the player 3")
})