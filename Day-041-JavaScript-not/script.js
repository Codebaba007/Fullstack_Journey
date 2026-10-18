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

    const studentId = Number(studentIdValidationInput.value);

    console.log("Student Name:", studentName);
    console.log("Student ID:", studentId);

    if (studentName === "" || studentId === 0) {

        studentValidationMessage.textContent =
            "Please enter all student information.";

    } else if (studentId < 2026001 || studentId > 2026999) {

        studentValidationMessage.textContent =
            "Student ID must be between 2026001 and 2026999.";

    } 
    
    else {

        studentValidationMessage.textContent =
            "Student information is valid.";

    }

});
let studentSelected = false;

const checkAccessBtn = document.getElementById("checkAccessBtn");
const accessMessage = document.getElementById("accessMessage");

checkAccessBtn.addEventListener("click", function() {

    if (!studentSelected) {

        accessMessage.textContent =
            "Access denied. Please select a student first.";

    } else {

        accessMessage.textContent =
            "Access granted. Student is selected.";

    }

});
const selectStudentBtn = document.getElementById("selectStudentBtn");
const studentStatus = document.getElementById("studentStatus");

selectStudentBtn.addEventListener("click", function() {

    studentSelected = true;

    studentStatus.textContent = "Student Status: Selected";

});