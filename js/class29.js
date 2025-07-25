
let main = document.querySelector('.main')
let adding = document.querySelector('.adding')
let addbutton = document.querySelector('.addbutton');
let allToDo = document.querySelector('.allToDo')
let error=document.querySelector('.error')
let totalToDo=document.querySelector('.totalToDo')
totalToDo.innerHTML=0
let doneToDo=document.querySelector('.doneToDo')
doneToDo.innerHTML=0
let number=0

const handleAdd = () => {
  console.log('Ha clicked')
  
  if(adding.value=='')return(error.innerHTML='Write something please!')
    
    number++
    totalToDo.innerHTML=number
    error.innerHTML=''
  // Create tage elements
  let singleToDo = document.createElement('div')
  let singleToDo_input = document.createElement('input')
  let editButton = document.createElement('button')
  let deleteButton = document.createElement('button')
  let doneButton = document.createElement('button')




  singleToDo_input.value=adding.value
  singleToDo_input.setAttribute('readonly', '')
  adding.value=''

  // Append child
  allToDo.appendChild(singleToDo)
  allToDo.appendChild(singleToDo_input)
  allToDo.appendChild(editButton)
  allToDo.appendChild(deleteButton)
  allToDo.appendChild(doneButton)



  // classlist add
  singleToDo.classList.add('singleToDo')
  singleToDo_input.classList.add('singleToDo_input')
  editButton.classList.add('editButton')
  deleteButton.classList.add('deleteButton')
  doneButton.classList.add('doneButton')


// button icons
  editButton.innerHTML='<i class="fa-solid fa-pen-to-square"></i>'
  deleteButton.innerHTML='<i class="fa-solid fa-trash"></i>'
  doneButton.innerHTML='<i class="fa-solid fa-check"></i>'
}