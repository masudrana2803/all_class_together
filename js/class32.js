// Constructor function for Student
function Student(name, roll, id, studentClass, age) {
    this.name = name;
    this.roll = roll;
    this.id = id;
    this.studentClass = studentClass;
    this.age = age;
}

// Get input elements
const studentName = document.getElementById('studentName');
const studentRoll = document.getElementById('studentRoll');
const studentId = document.getElementById('studentId');
const studentClass = document.getElementById('studentClass');
const studentAge = document.getElementById('studentAge');

// Get TotalStudent section and list-border
const totalStudentSection = document.getElementById('TotalStudent');
const listBorder = document.querySelector('.TotalStudentList');


const addStudent=()=>{
    console.log('ha clicked')
    
    if (
        !studentName.value.trim() ||
        !studentRoll.value.trim() ||
        !studentId.value.trim() ||
        !studentClass.value.trim() ||
        !studentAge.value.trim()
    ) {
        alert('Set all the value first');
        return;
    }
// create tag element
let ul = document.createElement('ul');

let liName = document.createElement('li');
// liName.textContent = `Student name:`+ studentName.value;
liName.textContent = "Student Name:"+studentName.value
ul.appendChild(liName);


let liRoll = document.createElement('li');
liRoll.textContent = "Roll:"+studentRoll.value
ul.appendChild(liRoll);

let liId = document.createElement('li');
liId.textContent = "Id:"+studentId.value
ul.appendChild(liId);

let liClass = document.createElement('li');
liClass.textContent = "Class:"+studentClass.value
ul.appendChild(liClass);

let liAge = document.createElement('li');
liAge.textContent = "Age"+studentAge.value.trim()
ul.appendChild(liAge);

listBorder.appendChild(ul);

}