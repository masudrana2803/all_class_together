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
const listBorder = document.querySelector('.list-border');

// Hide TotalStudent section initially
totalStudentSection.style.display = "none";

let students = [];

// Helper to show inline error
function showError(input, message) {
    let err = input.parentElement.querySelector('.input-error');
    if (err) err.remove();
    const span = document.createElement('span');
    span.className = 'input-error text-danger';
    span.style.fontSize = '0.9em';
    span.textContent = message;
    input.parentElement.appendChild(span);
    input.classList.add('is-invalid');
}

// Helper to clear error
function clearError(input) {
    let err = input.parentElement.querySelector('.input-error');
    if (err) err.remove();
    input.classList.remove('is-invalid');
}

// Function to display students in the list
function displayStudents() {
    // Remove old list if exists
    let oldList = document.getElementById('studentList');
    if (oldList) oldList.remove();

    // Create new ul
    const ul = document.createElement('ul');
    ul.id = 'studentList';
    ul.className = 'list-group mt-3';

    students.forEach(student => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `
            <strong>Name:</strong> ${student.name} |
            <strong>Roll:</strong> ${student.roll} |
            <strong>Id:</strong> ${student.id} |
            <strong>Class:</strong> ${student.studentClass} |
            <strong>Age:</strong> ${student.age}
        `;
        ul.appendChild(li);
    });

    listBorder.appendChild(ul);
}

// Add student function
function addStudent() {
    let valid = true;

    // Clear previous errors
    [studentName, studentRoll, studentId, studentClass, studentAge].forEach(clearError);

    const name = studentName.value.trim();
    const roll = studentRoll.value.trim();
    const id = studentId.value.trim();
    const sClass = studentClass.value.trim();
    const age = studentAge.value.trim();

    if (!name) {
        showError(studentName, "Please enter the student's name.");
        valid = false;
    }
    if (!roll) {
        showError(studentRoll, "Please enter the student's roll.");
        valid = false;
    }
    if (!id) {
        showError(studentId, "Please enter the student's id.");
        valid = false;
    }
    if (!sClass) {
        showError(studentClass, "Please enter the student's class.");
        valid = false;
    }
    if (!age) {
        showError(studentAge, "Please enter the student's age.");
        valid = false;
    }

    if (!valid) return;

    // Show TotalStudent section after first valid add
    totalStudentSection.style.display = "block";

    const newStudent = new Student(name, roll, id, sClass, age);
    students.push(newStudent);
    displayStudents();

    // Clear inputs and errors
    [studentName, studentRoll, studentId, studentClass, studentAge].forEach(input => {
        input.value = '';
        clearError(input);
    });
}