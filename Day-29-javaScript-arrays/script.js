const students = [{
    name: "Rahim Ahmed",
    studentId: 2026001,
    age:21,
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

]
students.push({
    name: "Sakib Rahman",
    studentId: 2026004,
    age: 22,
    department: "Computer Science",
    semester: 6,
    cgpa: 3.45,
    attendance: 84,
    completedCredits: 90
});
console.log(students);
console.log(students.length);
students.pop();

console.log(students);
console.log(students.length);
for(let i = 0; i<students.length;i++){
    console.log(students[i].name);
    console.log(students[i].cgpa);
    console.log(students[i].attendance);
}
let totalCgpa = 0;
for (let i = 0; i < students.length; i++) {
    totalCgpa = totalCgpa + students[i].cgpa;
    console.log(totalCgpa);
}
const averageCgpa = totalCgpa / students.length;

console.log(averageCgpa);

const studentid = document.getElementById("studentGrid");
for( let i = 0; i< students.length; i++){
    const student = student[i];
}
