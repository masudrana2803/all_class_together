let addbutton = document.querySelector('.addbutton');
let main = document.querySelector('.main')
let allToDo = document.querySelector('.allToDo')
let totalToDo=document.querySelector('.totalToDo')
totalToDo.innerHTML=0
let doneToDo=document.querySelector('.doneToDo')
doneToDo.innerHTML=0
let number=0

const handleAdd = () => {
  console.log('Ha clicked')
  number++
  totalToDo.innerHTML=number

  // Create tage elements
  let singleToDo = document.createElement('div')
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