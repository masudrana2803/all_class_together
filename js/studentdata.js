document.addEventListener('DOMContentLoaded', () => {

    // --- Student Constructor ---
    // This function acts as a template for creating new student objects.
    function Student(name, roll, id, className, age) {
        this.name = name;
        this.roll = roll;
        this.id = id;
        this.className = className;
        this.age = age;
        // In a real application, this might be dynamic
        this.attendance = 'হ্যাঁ'; // "Yes" in Bengali
    }

    // --- UI Variables ---
    const studentForm = document.getElementById('student-form');
    const studentList = document.getElementById('student-list');
    const totalStudent = document.getElementById('totalStudent')
    let studentCount = 0;
    totalStudent.innerHTML="TotalStudent"+ ":" + ""+ studentCount++
    // --- Event Listener for Form Submission ---
    studentForm.addEventListener('submit', function(e) {
        // Prevent the form from actually submitting and reloading the page
        e.preventDefault();

        // Get values from the form inputs
        const studentName = document.getElementById('studentName').value;
        const roll = document.getElementById('roll').value;
        const studentId = document.getElementById('studentId').value;
        const className = document.getElementById('className').value;
        const age = document.getElementById('age').value;

        // Create a new student instance using the constructor
        const newStudent = new Student(studentName, roll, studentId, className, age);

        // Add the new student to the UI
        addStudentToList(newStudent);

        // Clear the form fields for the next entry
        studentForm.reset();
    });

    // --- Function to Add Student to the UI ---
    function addStudentToList(student) {

        totalStudent.innerHTML="Total Student:"+ studentCount++

        // Create a new div for the student item
        const studentItem = document.createElement('div');
        studentItem.classList.add('student-item');

        // Create the HTML content for the new student entry
        // This matches the format shown in the provided image
        studentItem.innerHTML = `
            <p>Name:${student.name}</p> 
            <p>Roll: ${student.roll}</p>
            <p>ID: ${student.id}</p>
            <p>Class: ${student.className}</p>
            <p>Age: ${student.age}</p>
            `;
            
            // <p>উপস্থিত হতে পারে: ${student.attendance}</p>

        // Append the new item to the list
        studentList.appendChild(studentItem);
    }
});

