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
checkStudent(18);*/
function showStudent(student){
    console.log("Student name is: " + student.name);
    console.log("Student ID: " + student.studentId);
    console.log("Student Department: " + student.department);
}

const student1 = {
    name: "Rahim",
    studentId: "12345",
    department: "Computer Science"
}
showStudent(student1);
const student2 = {
    name: "Nusrat",
    studentId: "67890",
    department: "Electrical Engineering"
}
const student3 = {
    name: "Ayesha",
    studentId: "54321",
    department: "Mechanical Engineering"
}
showStudent(student2);
showStudent(student3);

function checkScholarship(cgpa){
    if(cgpa >= 3.5){
        console.log("Student is eligible for scholarship");
    }
    else{
        console.log("Student is not eligible for scholarship");
    }   
}
checkScholarship(3.90);
checkScholarship(3.50);
checkScholarship(3.75);