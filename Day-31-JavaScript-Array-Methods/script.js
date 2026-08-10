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

students.forEach(function(student){
    console.log(student);
});
students.forEach(function(student){
    console.log(student.name, student.cgpa)
});
let count = 0;

students.forEach(function(student) {

    if (student.attendance >= 90) {
        count++;
    }

});

console.log(count);

let totalCgpa = 0;

students.forEach(function(student) {

    totalCgpa = totalCgpa + student.cgpa;

});

console.log(totalCgpa);

const averageCgpa = totalCgpa / students.length;

console.log(averageCgpa);

students.forEach(function(student){
    if (student.cgpa > 3.7){
        console.log(student.name)
    }});

const studentNames = students.map(function(student){
    return student.name ;
});    
console.log(studentNames);

const cgpas = students.map(function(student) {
    return student.cgpa;
});

console.log(cgpas);

const departments = students.map(function(student){
    return student.department
});
console.log(departments)

const eligibleStudents = students.filter(function(student){
    return student.cgpa >= 3.5;
});
console.log(eligibleStudents);

const student = students.find(function(student) {
    return student.cgpa >= 3.8;
});

console.log(student);

const studentatn = students.find(function(student) {
    return student.attendance < 90;
});

console.log(studentatn);
const foundStudent = students.find(function(student) {
    return student.cgpa >= 4.0;
});

console.log(foundStudent);