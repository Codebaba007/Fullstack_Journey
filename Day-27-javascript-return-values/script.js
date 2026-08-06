const studentName = "Mehedi Hasan";
const studentId = 2210;
const age = 23;
const university = "UITS";
const department = "Computer Science & Engineering";

let semester = 8;

const cgpa = 3.52;
const attendance = 86;
const completedCredits = 92;
const attendanceBtn =document.getElementById("attendanceBtn")
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
    const result = checkScholarship(cgpa);
    showResult(result);
});
graduationBtn.addEventListener("click", function () {

    const result = checkGraduation(completedCredits);

    showResult(result);

});

attendanceBtn.addEventListener("click", function () {

    const result = checkAttendance(attendance);

    showResult(result);

});