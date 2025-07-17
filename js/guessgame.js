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
        error.innerHTML='Good luck player 2'
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
    mainhead.innerHTML='You are the winner P2'
    error.innerHTML=''
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
        count.innerHTML='You hitted  '+ chance
        }
        else {
          error.innerHTML='Set a value between 0-10'
          pl2.value=''
        }
        if (chance==5) {
          player2.style='display:none'
          player3.style='display:block'
          mainhead.innerHTML=("Player 3")
          error.innerHTML='Good luck player 3'
          error.style='color:blue'
          pl3.value=''
          chance=0
          count.innerHTML=chance
        } 
      }

    }
})


p3g.addEventListener('click',()=>{

  if (pl3.value==pl1.value) {
    mainhead.innerHTML='Congratulations!You are the winner P3'
    error.innerHTML=''
    countchance.innerHTML=''
    pl3.style='display:none'
    p3g.style='display:none'
    heading.style='display:none'
  } else {
    if (pl3.value=='') {
      error.innerHTML='Set value P3'

    }
    else{
      if (pl3.value<=10) {
        error.innerHTML= 'Nopes! you have entered ' + pl3.value
        pl2.value=''
        chance++
        count.innerHTML=chance
    }
    else{
          error.innerHTML='Set a value between 0-10'
          pl3.value=''        
    }
          if (chance==5) {
          console.log('I am the')
          player2.style='display:none'
          player3.style='display:none'
          player1.style='display:none'
          mainhead.innerHTML=("Player 1 is the winner")
          pl3.value=''
          chance=0
          count.innerHTML=chance
          error.innerHTML=''
          countchance.innerHTML=''
        }
  }
}
})
