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
const characterInput = document.getElementById("characterInput");
const characterCount = document.getElementById("characterCount");
characterInput.addEventListener("input", function() {
    const count = characterInput.value.length;
    characterCount.textContent = "Characters: " + count + " / 50";

});