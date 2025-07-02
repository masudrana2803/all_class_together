let t1h = document.querySelector('.t1h')
let t1b = document.querySelector('.t1b')

t1b.addEventListener('click',()=>{
    t1h.style='color:green'
    console.log("I am clicked")
})


let t2h = document.querySelector('.t2h')
let t2b = document.querySelector('t2b')

t2b.addEventListener('click',()=>{
    t2h.style='color:red'
    console.log("I am changed")
})

// console.log("hi")

// let alu = document.querySelector('h1')
// let alu2 = document.querySelector('button')

// console.log="hello";

// alu.addEventListener('click', ()=>{
//     h1.style=('color:red');
// })