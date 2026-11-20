
const studentForm = document.getElementById("studentForm");
const studentTable = document.getElementById("studentTable");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const courseSelect = document.getElementById("courseSelect");
const students = [];

studentForm.addEventListener("submit", function(event) {
    event.preventDefault();

const name = nameInput.value.trim();
 const email = emailInput.value.trim();
const course = courseSelect.value;

    const student = {
        name: name,
        email: email,
        course: course
    };

    students.push(student);

    studentTable.innerHTML = "";

    students.forEach(function(student) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.course}</td>
            <td>Added</td>
        `;

        studentTable.appendChild(row);
    });

    studentForm.reset();

});
