

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
const resultText = document.getElementById("resultText");




scholarshipBtn.addEventListener("click", function () {

    if (cgpa >= 3.5) {

        resultText.textContent = "Scholarship Approved ✅";

    } else {

        resultText.textContent = "Scholarship Not Approved ❌";

    }

});
const graduationBtn = document.getElementById("graduationBtn");

graduationBtn.addEventListener("click", function(){
    if(completedCredits === 144){
        resultText.textContent = "Graduated";
    }
    else{
        resultText.textContent = "Not graduated";
    }
});

