
let main = document.querySelector('.main')
let adding = document.querySelector('.adding')
let addbutton = document.querySelector('.addbutton');
let allToDo = document.querySelector('.allToDo')
let singleToDo = document.querySelector('.singleToDo')
let error=document.querySelector('.error')
  error.innerHTML=""

let totalToDo=document.querySelector('.totalToDo')
let totalToDoNo=0
totalToDo.innerHTML=totalToDoNo

let doneToDo=document.querySelector('.doneToDo')
let doneToDoNo=0
doneToDo.innerHTML=doneToDoNo

  let singleToDo_input = document.createElement('input')
  let editButton = document.createElement('button')
  let deleteButton = document.createElement('button')
  let doneButton = document.createElement('button')


// add to do 
const handleAdd = () => {
  console.log('Ha clicked')
    // if(adding.value=='')return(error.innerHTML='Write something please!')

  // Create tage elements
  // let singleToDo = document.createElement('div')
  let singleToDo_input = document.createElement('input')
  let editButton = document.createElement('button')
  let deleteButton = document.createElement('button')
  let doneButton = document.createElement('button')
  
  // Append child
  allToDo.appendChild(singleToDo)
  allToDo.appendChild(singleToDo_input)
  allToDo.appendChild(editButton)
  allToDo.appendChild(deleteButton)
  allToDo.appendChild(doneButton)



  // classlist add
  // singleToDo.classList.add('singleToDo')
  singleToDo.classList.add('singleToDo_input')
  singleToDo.classList.add('editButton')
  singleToDo.classList.add('deleteButton')
  singleToDo.classList.add('doneButton')


// button icons
  editButton.innerHTML='<i class="fa-solid fa-pen-to-square"></i>'
  deleteButton.innerHTML='<i class="fa-solid fa-trash"></i>'
  doneButton.innerHTML='<i class="fa-solid fa-check"></i>'
    
    totalToDoNo++
    totalToDo.innerHTML=totalToDoNo
    error.innerHTML=''




  singleToDo_input.value=adding.value
  singleToDo_input.setAttribute('readonly', 'readonly')
  adding.value=''



  editButton.addEventListener('click', ()=>{
    console.log('activeEdit')
    editButton.classList.toggle('activeEdit')
    if(editButton.classList[1]=='activeEdit'){
      editButton.innerHTML='<i class="fa-solid fa-floppy-disk"></i>'
      editButton.style='color:red'
      singleToDo_input.style='background:rgb(233, 128, 128)'
      singleToDo_input.removeAttribute('readonly', '')
    }else{
      editButton.innerHTML='<i class="fa-solid fa-pen-to-square"></i>'
      singleToDo_input.setAttribute('readonly', 'readonly')
      singleToDo_input.style='background:#fff'
      editButton.style='color:none'
    }
  })
  
  deleteButton.addEventListener('click',()=>{
    console.log('clicked')
    totalToDoNo--
    totalToDo.innerHTML=totalToDoNo

    // singleToDo_input.parentElement.remove()
    deleteButton.remove()
    singleToDo_input.remove()
    editButton.remove()
    doneButton.remove()

    if(doneButton.classList[1]=='whydo'){
    doneToDoNo--
    doneToDo.innerHTML=doneToDoNo
    }
  })

  doneButton.addEventListener('click',()=>{
    doneButton.classList.add('whydo')
    singleToDo_input.style='text-decoration: line-through'
    singleToDo_input.setAttribute('readonly', '')
    console.log('done it')
    doneToDoNo++
    doneToDo.innerHTML=doneToDoNo
    editButton.remove()
  })
  

}

