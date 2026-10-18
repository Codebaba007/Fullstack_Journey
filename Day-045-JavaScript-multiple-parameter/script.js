/*function greetStudent(name) {
    console.log("Hello, " + name + "! Welcome to the class.");
}

greetStudent("Rahim");
greetStudent("Nusrat");
greetStudent("Ayesha");

function checkStudent(age){
    if(age >= 18){
        console.log("student is an adult");
    }
    else{
        console.log("Student is a minor")
    }
}
checkStudent(20);
checkStudent(15);
checkStudent(18);
function showStudent(student){
    console.log("Student name is: " + student.name);
    console.log("Student ID: " + student.studentId);
    console.log("Student Department: " + student.department);
    console.log("Student Cgpa: " + student.cgpa);
}

const student1 = {
    name: "Rahim",
    studentId: "12345",
    department: "Computer Science",
    cgpa: "3.80"
};
showStudent(student1);
const student2 = {
    name: "Nusrat",
    studentId: "67890",
    department: "Electrical Engineering",
    cgpa: "3.60"
};
const student3 = {
    name: "Ayesha",
    studentId: "54321",
    department: "Mechanical Engineering",
    cgpa: "3.90"
}
showStudent(student2);
showStudent(student3);
function checkScholarship(cgpa) {

    if (cgpa >= 3.75) {
        return "Eligible for scholarship.";
    } else {
        return "Not eligible for scholarship.";
    }

}
const scholarshipResult = checkScholarship(3.80);
console.log(scholarshipResult);

const scholarshipStatus1 = checkScholarship(3.90);
const scholarshipStatus2 = checkScholarship(3.50);
const scholarshipStatus3 = checkScholarship(3.75);

console.log(scholarshipStatus1);
console.log(scholarshipStatus2);
console.log(scholarshipStatus3);

function getStudentName(name){
    return name;
}

const studentName = getStudentName("Rahim");
console.log(studentName);

function calculateAverage(firstMark, secondMark){
    const average = (firstMark + secondMark) / 2;
    return average;

}


function displayScolarshipresult(result) {
    console.log("Scholarship Result: " + result);
}
const result = checkScholarship(3.90);

displayScolarshipresult(result);

function getStudentScholarshipStatus(student){
    if(student.cgpa >= 3.75){
        return student.name + " is eligible for scholarship.";

    }
    else{
        return student.name + " is not eligible for scholarship.";
    }
}
const result1 = getStudentScholarshipStatus(student1);
const result2 = getStudentScholarshipStatus(student2);

console.log(result1);
console.log(result2);

function addNumbers(num1, num2){
    return num1 - num2;
} 
const result = addNumbers(5, 10);
console.log("The sum is: " + result);

const result2 = addNumbers(15, 25);
console.log("This Sum is: " + result2);*/
function createStudentSummary(name, department, cgpa){
    return name + " - " + department + " - " + cgpa;
}
const summary = createStudentSummary(
"Rahim", "Computer Science", 3.80
);
console.log(summary);

function checkEligibility(cgpa, attendance){
    if(cgpa >= 3.75 && attendance >= 75){
        return "Eligible for scholarship.";
    }
    else{
        return "Not eligible for scholarship.";
    }
}
//const result1 = checkEligibility(3.80, 95);
//const result2 = checkEligibility(3.80, 85);
//const result3 = checkEligibility(3.60, 95);

//console.log(result1);
//console.log(result2);


function getStudentResult(student, passingCgpa){
    if(student.cgpa >= passingCgpa){
        return student.name + " has Passed .";
    }
    else{
        return student.name + " has not passed.";
    }
}
const student1 = {
    name: "Rahim",
    cgpa: 3.80
};
const student2 = {
    name: "Nusrat",
    cgpa: 3.60
};
const result1 = getStudentResult(student1, 3.75);
const result2 = getStudentResult(student2, 3.75);

console.log(result1);
console.log(result2);