const students = [{
    name: "Rahim Ahmed",
    studentId: 2026001,
    age: 21,
    department: "Computer Science",
    semester: 6,
    cgpa: 3.75,
    attendance: 92,
    completedCredits: 96
},
{
    name: "Nusrat Jahan",
    studentId: 2026002,
    age: 22,
    department: "Software Engineering",
    semester: 7,
    cgpa: 3.88,
    attendance: 95,
    completedCredits: 112
},
{
    name: "Tanvir Hasan",
    studentId: 2026003,
    age: 21,
    department: "Information Technology",
    semester: 5,
    cgpa: 3.62,
    attendance: 89,
    completedCredits: 80
}
];

const displayDepartment = document.getElementById("displayDepartment");
const displaySemester = document.getElementById("displaySemester");
const displayStudentId = document.getElementById("displayStudentId");
const studentName = document.getElementById("studentName");
const studentIdInput = document.getElementById("studentIdInput");
const resultMessage = document.getElementById("resultMessage");

console.log(studentIdInput.value);

function findStudentById(studentId) {
    return students.find(function(student) {
        return student.studentId === studentId;
    });
}

const searchBtn = document.getElementById("searchBtn");
const scholarshipBtn = document.getElementById("scholarshipBtn");

console.log(scholarshipBtn);

let selectedStudent = null;

searchBtn.addEventListener("click", function() {

    console.log("Search button Clicked");

    const studentId = Number(studentIdInput.value);

    console.log(studentId);

    selectedStudent = findStudentById(studentId);

    if (!selectedStudent) {
        console.log("Student not found");
        resultMessage.textContent = "Student not found. Please enter a valid Student ID.";
        return;
    }

    studentName.textContent = selectedStudent.name;
    displayStudentId.textContent = selectedStudent.studentId;
    displayDepartment.textContent = selectedStudent.department;
    displaySemester.textContent = selectedStudent.semester;

    resultMessage.textContent = `Student found: ${selectedStudent.name}`;

    console.log(selectedStudent);
});
