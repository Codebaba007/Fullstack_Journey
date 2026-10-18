const studentName = "Mehedi Hasan";
const studentId = 2210;
const age = 23;
const university = "UITS";
const department = "Computer Science & Engineering";

let semester = 8;

const cgpa = 3.52;
const attendance = 86;
const completedCredits = 92;
console.log(cgpa >= 3.5);
console.log(attendance >= 80);
console.log(completedCredits >= 130);
if(cgpa >= 3.5){
    console.log("Scholarship Approved");
}
else if(cgpa === 0)
{
    console.log("Error")
}
else{
    console.log("Not approved")
}
if(attendance >= 80){
    console.log("Attendance Requirement Met")
}
if(age >= 18){
    console.log("adult")
}
