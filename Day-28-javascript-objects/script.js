const student ={
    name: "Mehedi Hassan Bhuiyan",

    studentId: 1080,

    age: 23,

    university: "UITS",

    department: "Computer Science & Engineering",

    semester: 8,

    cgpa: 3.52,

    attendance: 86,

    completedCredits: 92
};

const attendanceBtn = document.getElementById("attendanceBtn");
const scholarshipBtn = document.getElementById("scholarshipBtn");
const graduationBtn = document.getElementById("graduationBtn");
const resultText = document.getElementById("resultText");

function showResult(message) {

    resultText.textContent = message;

}
function checkScholarship(cgpa){
     if (cgpa >= 3.5) {
        return "Scholarship Approved ✅";
    }

    return "Scholarship Not Approved ❌";
}
function checkGraduation(completedCredits){
    if(completedCredits >=144){
        return "graduated";
    }
    return "Not Graduated"
}
function checkAttendance(attendance){
    if (attendance>=90){
        return "Excellent attendance"
    }
    else if (attendance>=80){
        return "Good attendance"
    }
    return "Attendance Critical"
}
scholarshipBtn.addEventListener("click", function (){
    const result = checkScholarship(student.cgpa);
    showResult(result);
});
graduationBtn.addEventListener("click", function () {

    const result = checkGraduation(student.completedCredits);

    showResult(result);

});


attendanceBtn.addEventListener("click", function () {

    const result = checkAttendance(student.attendance);

    showResult(result);

});