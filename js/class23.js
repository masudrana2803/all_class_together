AOS.init();

// -------------task1 start------------------

let t1h = document.querySelector('.t1h')
let t1b = document.querySelector('.t1b')

t1b.addEventListener('click',()=>{
    t1h.style='color:green'
    console.log("I am clicked")
})

// -------------task1 finish------------------
// -------------task2 start------------------

let t2h = document.querySelector('.t2h')
let t2b = document.querySelector('.t2b')

t2b.addEventListener('click',()=>{
    t2h.style='color:green'
    t2h.innerHTML="Task 2 completed by Maayush"
    console.log("I am changed")
})
// -------------task2 finish------------------
// -------------task3 start------------------

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

// -------------task3 finish------------------
// -------------task4 start------------------


let addnum = document.querySelector('.addnum')
let subnum = document.querySelector('.subnum')
let result = document.querySelector('.result')
let error = document.querySelector('.error')
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

// -------------task4 finish------------------
// -------------task5 start------------------

let input = document.querySelector('.input')
let shbtn = document.querySelector('.shbtn')
let shrlst = document.querySelector('.shrslt')
let erro = document.querySelector('.erro')

shbtn.addEventListener('click', ()=>{
    if (input.value=='') {
        shrlst.innerHTML=''
        erro.innerHTML=('field cannot be blank')
    }
    else{
        erro.innerHTML=''
        shrlst.innerHTML=(input.value)
        input.value=''
    }
})

// -------------task5 finish------------------
// -------------task6 start------------------

let nameinput = document.querySelector('.nameinput')
let shtxt = document.querySelector('.shtxt')
let shorslt = document.querySelector('.shorslt')
let errortsk6 = document.querySelector('.errortsk6')
let tsk6bt1 = document.querySelector('.tsk6b1')
let tsk6bt2 = document.querySelector('.tsk6b2')
let tsk6bt3 = document.querySelector('.tsk6b3')



shtxt.addEventListener('click',()=>{
    if (nameinput.value=='') {
        shorslt.innerHTML=''
        errortsk6.innerHTML=('You must enter value')
    }else{
        errortsk6.innerHTML=''
        shorslt.innerHTML=(nameinput.value)
        nameinput.value=''
    }
})


tsk6bt1.addEventListener('click',()=>{
    shorslt.style = 'color:red'
})

tsk6bt2.addEventListener('click',()=>{
    shorslt.style = 'color:blue'
})

tsk6bt3.addEventListener('click',()=>{
    shorslt.style = 'color:green'
})

// -------------task6 finish------------------
// -------------task7 start------------------

let timenmbr = document.querySelector('.timenmbr')
let timego = document.querySelector('.timego')
let timeresult = document.querySelector('.timeresult')
let lin1 = document.querySelector('.lin1')


timego.addEventListener('click',()=>{
if (timenmbr.value=='') {
    lin1.innerHTML=("Please set a value first")
    lin1.style='color:red'
    timeresult.innerHTML=''
    timeresult.style='background:none'
} else {
    timeresult.innerHTML=''
    timeresult.style='box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;'
    for(let i = 0; i < 11; i++)
        {
            timeresult.innerHTML+=(timenmbr.value + 'x' + i + '=' +  timenmbr.value*i + '<br>')
            lin1.innerHTML=("I am the result for  "+ timenmbr.value)
            lin1.style='color:rgb(189, 59, 20)'
            timeresult.style='color:rgb(189, 59, 20);background-color:rgb(154, 203, 203);box-shadow: rgba(188, 145, 145, 0.35) 0px -50px 36px -28px inset;'

        }
        timenmbr.value=''
    }
})

// -------------task7 finish------------------
// -------------task8 start------------------
let t8inp = document.querySelector('.t8inp')
let t8result = document.querySelector('.t8result')

let handelButton = ()=>{
    t8result.innerHTML = ''
    if(t8inp.value==''){
        alert('you must have to set a number')
    } else{
        for(let i = 0; i < 11; i++)
        {
            t8result.innerHTML+=(t8inp.value + 'x' + i + '=' +  t8inp.value*i + '<br>')
           
        }
        t8inp.value=''
    }
    
}
// -------------task8 finish------------------
// -------------task9 start-------------------

let input1 = document.querySelector('.input1')
let result2= document.querySelector('.result2')

let handelButtton=()=>{
   result2.innerHTML= ''
    if(input1.value==''){
      alert('fill the box')
    }
    else{
      for(let i=1;i<11;i++){ 
        result2.innerHTML+= (input1.value+ 'X' + i + '='+ input1.value*i + '<br>')
      }
    }
}

