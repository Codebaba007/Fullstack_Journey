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
const numbers = [10, 20, 30, 40];
const total = numbers.reduce(function(sum, number){
    return sum + number;
},0);
console.log(total);



const totalcgpa = students.reduce(function(total, student){
    return total + student.cgpa ;
},0);
console.log(totalcgpa)

const totalcreds = students.reduce(function(total , student){
    return total + student.completedCredits
},0);

console.log(totalcreds);

const highestcgpa = students.reduce(function(highest, student){
    if (student.cgpa > highest){
        return student.cgpa;
    }
    return highest
},0);
console.log(highestcgpa)

const excellentAttendance = students.reduce(function(count, student) {

    if(student.attendance >= 90){
        return count + 1 ;
    }
    return count;

}, 0);

console.log(excellentAttendance);


const resultText = document.getElementById("resultText");
resultText.textContent = "Hello Mehedi";

const scholarshipBtn = document.getElementById("scholarshipBtn");
scholarshipBtn.addEventListener("click", function() {

    console.log("Scholarship button clicked");

});