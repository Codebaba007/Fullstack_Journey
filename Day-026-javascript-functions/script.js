const studentName = "Mehedi Hasan";
const studentId = 2210;
const age = 23;
const university = "UITS";
const department = "Computer Science & Engineering";

let semester = 8;

const cgpa = 3.52;
const attendance = 86;
const completedCredits = 92;

const scholarshipBtn = document.getElementById("scholarshipBtn");
const graduationBtn = document.getElementById("graduationBtn");
const resultText = document.getElementById("resultText");

function showResult(message) {
    resultText.textContent = message;
}

scholarshipBtn.addEventListener("click", function () {

    if (cgpa >= 3.5) {

        showResult("Scholarship Approved ✅");

    } else {

        showResult("Scholarship Not Approved ❌");

    }

});

graduationBtn.addEventListener("click", function () {

    if (completedCredits >= 144) {

        showResult("Graduated 🎓");

    } else {

        showResult("Not Graduated ❌");

    }

});