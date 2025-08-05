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
    
}