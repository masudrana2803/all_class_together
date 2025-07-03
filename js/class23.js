let t1h = document.querySelector('.t1h')
let t1b = document.querySelector('.t1b')

t1b.addEventListener('click',()=>{
    t1h.style='color:green'
    console.log("I am clicked")
})


let t2h = document.querySelector('.t2h')
let t2b = document.querySelector('.t2b')

t2b.addEventListener('click',()=>{
    t2h.style='color:green'
    t2h.innerHTML="Task 2 completed"
    console.log("I am changed")
})


let task3 = document.querySelector('.task3')
let yel = document.querySelector('#yel')
let gre = document.querySelector('#gre')
let pin = document.querySelector('#pin')
let pur = document.querySelector('#pur')
let res = document.querySelector('#res')
yel.addEventListener('click', ()=>{
    task3.style='background:yellow;transition:1s'
})
gre.addEventListener('click', ()=>{
    task3.style='background:green;transition:1s'
})
pin.addEventListener('click', ()=>{
    task3.style='background:pink;transition:1s'
})
pur.addEventListener('click', ()=>{
    task3.style='background:purple;transition:1s'
})
res.addEventListener('click', ()=>{
    task3.style='background:black;transition:1s'
})

let addnum = document.querySelector('.addnum')
let subnum = document.querySelector('.subnum')
let result = document.querySelector('.result')
let number = 1

addnum.addEventListener('click', ()=>{
    number++
    result.innerHTML=(number)
    console.log(number)

})

subnum.addEventListener('click', ()=>{

    if (number>=1) {
            number--
            result.innerHTML=(number)
    console.log(number)
    }
})


// console.log("hi")

// let alu = document.querySelector('h1')
// let alu2 = document.querySelector('button')

// console.log="hello";

// alu.addEventListener('click', ()=>{
//     h1.style=('color:red');
// })