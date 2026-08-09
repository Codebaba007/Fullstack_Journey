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

for (let i = 0; i < students.length; i++){
    console.log(students[i].name);
}
let totalcgpa = 0;
for (let i = 0; i < students.length; i++){
    totalcgpa = totalcgpa + students[i].cgpa;
}
console.log(totalcgpa)
const averageCgpa = totalcgpa / students.length;

console.log(averageCgpa);
for(let i = 0; i<students.length; i++){
    console.log(students[i].department);
}
for(let i = 0; i<students.length; i++){
    console.log(students[i].cgpa >= 3.5)}

let count = 0;    
for(let i = 0; i<students.length; i++){
    if(students[i].attendance >= 90){
        count++;
    }
}
console.log(count)