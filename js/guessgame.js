let input1 = document.querySelector('.pl1')
let input2 = document.querySelector('.pl2')
let input3 = document.querySelector('.pl3')
let p1g = document.querySelector('.p1g')
let p2g = document.querySelector('.p2g')
let p3g = document.querySelector('.p3g')
let error = document.querySelector('.error')
let mainhead = document.querySelector('.mainhead')
let pl1 = document.querySelector('.pl1')
let pl2 = document.querySelector('.pl2')
let pl3 = document.querySelector('.pl3')
let player1 = document.querySelector('.player1')
let player2 = document.querySelector('.player2')
let player3 = document.querySelector('.player3')

let g1 = document.querySelector('pl1.value')
let heading = document.querySelector('#heading')
let countchance = document.querySelector('.countchance')
let count = document.querySelector('.count')
let chance=0
count.innerHTML=chance

p1g.addEventListener('click',()=>{
  if (pl1.value=='') {
    error.innerHTML=("Please set a value first")
  }else{
    if (pl1.value<=10) {
        error.innerHTML=''
        console.log(pl1.value)
        player1.style='display:none'
        player2.style='display:block'
        countchance.style='display:block'
        pl2.value=''
        chance.style='display:block'
        mainhead.innerHTML=("Player 2")        
    } 
    else {
        error.innerHTML='Set a value between 0-10'
        pl1.value=''
    }
  }
})

p2g.addEventListener('click',()=>{
  if (pl2.value==pl1.value) {
    error.innerHTML=''
    mainhead.innerHTML='You are the winner P2'
    countchance.innerHTML=''
    mainhead.style='font-size:50px;color:red'
    p2g.style='display:none'
    heading.style='display:none'

  }else{
    if (pl2.value=='') {
        error.innerHTML='Set value P2'
    }
    else{
        if (pl2.value<=10) {
        error.innerHTML= 'Nopes! you have entered ' + pl2.value
        pl2.value=''
        chance++
        count.innerHTML=chance
        if (chance==2) {
          console.log('I am the')
          player2.style='display:none'
          player3.style='display:block'
          mainhead.innerHTML=("Player 3")
          pl3.value=''
          count.innerHTML=chance
        } else {
          error.innerHTML='Set a value between 0-10'
          pl2.value=''            
        }
      }

    }
  }
})

p3g.addEventListener('click',()=>{
  if (pl3.value==pl1.value) {
    error.innerHTML=''
    mainhead.innerHTML='Congratulations!You are the winner P3'
    mainhead.style='font-size:50px;color:red'
    countchance.innerHTML=''
    p3g.style='display:none'
    heading.style='display:none'
    chance=0
  }else{
    if (pl3.value=='') {
        error.innerHTML='Set value P3'
    }
    else{
        if (pl3.value<=10) {
        error.innerHTML= 'Nopes! you have entered ' + pl3.value
        pl3.value=''
        chance=0
        chance++
        if (chance==2) {
          console.log('Winner is P1')
          player2.style='display:none'
          player3.style='display:block'
          mainhead.innerHTML=("Player 3")
          pl3.value=''
        } else {
          error.innerHTML='Set a value between 0-10'
          pl2.value=''            
        }
      }

    }
  }
})