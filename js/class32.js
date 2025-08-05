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

// Helper to show inline error
function showError(input, message) {
    // Remove existing error
    let err = input.parentElement.querySelector('.input-error');
    if (err) err.remove();
    // Create new error
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

// Create a <ul> for student list if not present
let studentList = document.getElementById('studentList');
if (!studentList) {
    const listBorder = document.querySelector('.list-border');
    studentList = document.createElement('ul');
    studentList.id = 'studentList';
    studentList.className = 'list-group mt-3';
    listBorder.appendChild(studentList);
}

let students = [];

// Function to display students in the list
function displayStudents() {
    studentList.innerHTML = '';
    if (students.length === 0) {
        const li = document.createElement('li');
        li.className = 'list-group-item text-muted text-center';
        li.textContent = 'No students added yet.';
        studentList.appendChild(li);
        return;
    }
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
        studentList.appendChild(li);
    });
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

    const newStudent = new Student(name, roll, id, sClass, age);
    students.push(newStudent);
    displayStudents();

    // Clear inputs and errors
    [studentName, studentRoll, studentId, studentClass, studentAge].forEach(input => {
        input.value = '';
        clearError(input);
    });
}

// Show empty list on load
displayStudents();