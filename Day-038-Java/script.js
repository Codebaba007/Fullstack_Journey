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
const studentNameInput = document.getElementById("studentNameInput");
const studentIdValidationInput = document.getElementById("studentIdValidationInput");
const validateStudentBtn = document.getElementById("validateStudentBtn");
const studentValidationMessage = document.getElementById("studentValidationMessage");

validateStudentBtn.addEventListener("click", function() {
    const studentName = studentNameInput.value.trim();
    const studentId = studentIdValidationInput.value.trim();

    if (studentName === "" || studentId === "") {
        studentValidationMessage.textContent =
            "Please enter all student information.";
    } else {
        studentValidationMessage.textContent =
            "Student information is valid.";
    }
});
console.log("Student Name:", studentName);
console.log("Student ID:", studentId);