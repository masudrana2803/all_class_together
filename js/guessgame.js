let input1 = document.querySelector('.pl1')
let input2 = document.querySelector('.pl2')
let input3 = document.querySelector('.pl3')
let p1g = document.querySelector('.p1g')
let p2g = document.querySelector('.p2g')
let p3g = document.querySelector('.p3g')
let error = document.querySelector('.error')
let pl1 = document.querySelector('.pl1')






p1g.addEventListener('click',()=>{
  if (pl1.value=='') {
    error.innerHTML=("Please set a value first")
  }else{
    if (pl1.value<=10) {
        error.innerHTML=''
        error.innerHTML=''
        console.log(pl1.value)
        pl1.value=''
    } else {
        
    }
  }
})

// p2g.addEventListener('click',()=>{
//     error.innerHTML=("Set a value first for the player 2")
// })
// p3g.addEventListener('click',()=>{
//     error.innerHTML=("Set a value first for the player 3")
// })