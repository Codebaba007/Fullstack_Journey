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
console.log("This Sum is: " + result2);
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
function greetStudent(name = "Student") {
    console.log("hello, " + name);
}
greetStudent("Rahim");
greetStudent();
function calculateDiscount(price, discount = 10) {

    const finalPrice = price - (price * discount / 100);

    return finalPrice;

}
const result1 = calculateDiscount(100, 20);
const result2 = calculateDiscount(100);

console.log(result1);
console.log(result2);
function getStudentStatus(name, status = "Pending") {

    return name + " - Status: " + status;

}
const Result1 = getStudentStatus("Rahim Ahmed", "Active");
const Result2 = getStudentStatus("Nusrat Jahan");

console.log(Result1);
console.log(Result2);
function createStudentSummary(name, department, semester = 1) {

    return name + " - " + department + " - Semester: " + semester;

}
const esult1 = createStudentSummary(
    "Rahim Ahmed",
    "Computer Science",
    6
);

const esult2 = createStudentSummary(
    "Nusrat Jahan",
    "Software Engineering"
);

console.log(esult1);
console.log(esult2);
console.log(
    createStudentSummary("Rahim Ahmed", "Computer Science", 6)
);

console.log(
    createStudentSummary("Nusrat Jahan", "Software Engineering")
);

console.log(
    createStudentSummary("Tanvir Hasan", "Information Technology", 5)
);
function checkScholarship(cgpa, requiredCgpa = 3.75) {

    if (cgpa >= requiredCgpa) {

        return "Student is eligible for scholarship.";

    } else {

        return "Student is not eligible for scholarship.";

    }

}
const r1 = checkScholarship(3.90);
const r2 = checkScholarship(3.60);
const r3 = checkScholarship(3.60, 3.50);

console.log(r1);
console.log(r2);
console.log(r3);

const greetStudent = (name) =>{
    return "Hello , " + name;
};
const result = greetStudent("Rahim");
console.log(result);
const addNumbers = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
};

console.log("Sum: " + addNumbers(10, 20));
console.log("Sum: " + addNumbers(50, 25));
const calculateAverage = (mark1, mark2, mark3) => {

    const average = (mark1 + mark2 + mark3) / 3;

    return average;

};
console.log("Average: " + calculateAverage(85, 90, 95));
const addNumbers2 = (a, b) => a + b;
console.log("Sum: " + addNumbers2(10, 20));

const getStudentResult = (student, passingCgpa = 3.75) => {
    if (student.cgpa >= passingCgpa) {
        return student.name + " has passed.";
    }else{ 
    return student.name + " has not passed.";
}
}
const student1 = {
    name: "Rahim Ahmed",
    cgpa: 3.75
};

const student2 = {
    name: "Tanvir Hasan",
    cgpa: 3.62
};
console.log(getStudentResult(student1));

console.log(getStudentResult(student2));

console.log(getStudentResult(student2, 3.50));
const getGrade = (cgpa) => {

    if (cgpa >= 3.75) {
        return "A";
    } else if (cgpa >= 3.50) {
        return "B";
    } else if (cgpa >= 3.00) {
        return "C";
    } else {
        return "F";
    }

};
console.log(getGrade(3.90));
console.log(getGrade(3.60));
console.log(getGrade(3.20));
console.log(getGrade(2.80));
function greetStudent(name)  {
    return "Hello, " + name;
};
function processstudent(name, callback){
    return callback(name);
}
console.log(processstudent("Rahim", greetStudent));
const greetStudent2 = (name) => {
    return "Hello, " + name;
};
function processStudent(name, callback) {
    return callback(name);
}

console.log(processStudent("Rahim", greetStudent2));

console.log(processStudent("Nusrat", (name) => {
    return "Hello, " + name;
}));
const student1 = {
    name: "Rahim Ahmed",
    cgpa: 3.75
};

const student2 = {
    name: "Tanvir Hasan",
    cgpa: 3.62
};

const processStudent2 = (student, callback) => {
    return callback(student);
};
const getStudentName = (student) => {
    return student.name;
};
console.log(processStudent2(student1, getStudentName));
console.log(processStudent2(student2, getStudentName));
const getStudentCgpa = (student) => {
    return student.cgpa;
};
console.log(processStudent2(student1, getStudentCgpa));
console.log(processStudent2(student2, getStudentCgpa));
const getStudentMessage = (student) => {
    return student.name + " has a CGPA of " + student.cgpa;
};
console.log(processStudent2(student1, getStudentMessage));
console.log(processStudent2(student2, getStudentMessage));
console.log(
    processStudent2(student1, (student) => student.name)
);

console.log(
    processStudent(student2, (student) => student.cgpa)
);

console.log(
    processStudent(
        student2,
        (student) => student.name + " is a student."
    )
);
const getCgpaPercentage = (student) => {
    return student.cgpa * 25;
};
console.log(
    processStudent(student1, getCgpaPercentage)
);

console.log(
    processStudent(student2, getCgpaPercentage)
);
const checkScholarship = (student) => {

    if (student.cgpa >= 3.75) {
        return "Eligible for scholarship";
    } else {
        return "Not eligible for scholarship";
    }

};
console.log(
    processStudent(student1, checkScholarship)
);

console.log(
    processStudent(student2, checkScholarship)
);
const students1 = ["Rahim", "Nusrat", "Tanvir", "Sakib"];
students1.forEach((student)=>{
    console.log(student);
}
)
const numbers = [10, 20, 30, 40, 50];
numbers.forEach((number)=>{
    console.log(number);
});
const students = [
    {
        name: "Rahim Ahmed",
        cgpa: 3.75
    },
    {
        name: "Nusrat Jahan",
        cgpa: 3.88
    },
    {
        name: "Tanvir Hasan",
        cgpa: 3.62
    }
];
students.forEach((student)=>{
    console.log(student.name + " has a CGPA of " + student.cgpa);
});

students.forEach((student) => {

    if (student.cgpa >= 3.75) {

        console.log(student.name + " is eligible for scholarship.");

    } else {

        console.log(student.name + " is not eligible for scholarship.");

    }

});
students.forEach((student, index) =>{ 
    console.log("Student " + (index + 1) + ": " + student.name);
});
students.forEach((student, index, array) => {

    console.log("Current student:", student.name);
    console.log("Current index:", index);
    console.log("Total students:", array.length);

});
students.forEach((student, index, array) => {

    console.log(
        "Student " + (index + 1) +
        " of " + array.length +
        ": " + student.name
    );

});
students.forEach((student, index, array) => {

    if (student.cgpa >= 3.6) {

        console.log(
            "Student " + (index + 1) +
            " of " + array.length +
            " - " + student.name +
            " - CGPA: " + student.cgpa +
            " - Scholarship Eligible"
        );

    } else {

        console.log(
            "Student " + (index + 1) +
            " of " + array.length +
            " - " + student.name +
            " - CGPA: " + student.cgpa +
            " - Scholarship Not Eligible"
        );

    }

});
students.forEach((student, index) => {

    console.log("Student " + (index + 1) + ": " + student.name);
    console.log("CGPA: " + student.cgpa);

    if (student.cgpa >= 3.75) {
        console.log("Status: Excellent");
    } else {
        console.log("Status: Good");
    }

    console.log("");

});

const numbers = [1, 2, 3, 4, 5];
const doubledNumber  = numbers.map((number) => number *2);
console.log(doubledNumber);
const numbers2 = [10, 20, 30, 40, 50];
const incrementedNumbers = numbers2.map((numbers2) => numbers2 +5 );
console.log(incrementedNumbers);

const students = [
    {
        name: "Rahim Ahmed",
        cgpa: 3.75
    },
    {
        name: "Nusrat Jahan",
        cgpa: 3.88
    },
    {
        name: "Tanvir Hasan",
        cgpa: 3.62
    }
];
const studentNames = students.map((student)=> student.name);
console.log(studentNames);
const studentCgpas = students.map((student) => student.cgpa);
console.log(studentCgpas);
const studentLabels = students.map((student) => {
    return student.name + " - CGPA: " + student.cgpa;
});

console.log(studentLabels);
const updatedCgpa = students.map((student) => {
    return {
        name: student.name,
        cgpa: student.cgpa + 0.1
    };
});
console.log(updatedCgpa);
const studentGreetings = students.map((student)=>{
    return "Hello, " + student.name + " here," + " Im a Student of Uits" + " and my Cgpa is :" + student.cgpa;
});
console.log(studentGreetings);

const studentSummaries = students.map((student) => {

    return {
        name: student.name,
        cgpa: student.cgpa,
        status: student.cgpa >= 3.75 ? "Excellent" : "Good"
    };

});

console.log(studentSummaries);
const studentSummaries2 = students.map((student) => {

    return {
        name: student.name,
        cgpa: student.cgpa,
        message: "Hello, " + student.name + "! Your CGPA is " + student.cgpa + "."
    };

});

console.log(studentSummaries2);
const studentCards = students.map((student, index) => {
    return {
        number: index + 1,
        name: student.name,
        cgpa: student.cgpa
    };
});

console.log(studentCards);
const studentResults = students.map((student) => {

    const percentage = student.cgpa * 25;

    let status;

    if (percentage >= 90) {
        status = "Excellent";
    } else {
        status = "Good";
    }

    return {
        name: student.name,
        cgpa: student.cgpa,
        percentage: percentage,
        status: status
    };

});

console.log(studentResults);*/


const numbers = [11, 2, 13, 4.56, 5];
const largeNumbers = numbers.filter((number) => number > 4);
console.log(largeNumbers);
const students = [
    {
        name: "Rahim Ahmed",
        cgpa: 3.75,
        department: "Computer Science"
    },
    {
        name: "Nusrat Jahan",
        cgpa: 3.88,
        department: "Software Engineering"
    },
    {
        name: "Tanvir Hasan",
        cgpa: 3.62,
        department: "Data Science"
    }
];
const scholarshipStudents = students.filter((student)=> student.cgpa >= 3.75);
console.log("Scholarship Students:", scholarshipStudents);
const averageCgpa = students.filter((student) => student.cgpa < 3.75);
console.log("Average CGPA Students:", averageCgpa);

const scholarshipEligibleStudents = students.filter((student) => student.cgpa >= 3.75 && student.department === "Computer Science");
console.log("Scholarship Eligible Students in Computer Science:", scholarshipEligibleStudents);
const selectedStudents = students.filter((student) => {
    return student.department === "Software Engineering" || student.cgpa >= 3.80;
});
console.log("Selected Students:", selectedStudents);
const selectedStudents2 = students.filter((student) => {
    return (
        (student.department === "Computer Science" && student.cgpa >= 3.70) ||
        student.department === "Software Engineering"
    );
});
console.log("Selected Students 2:", selectedStudents2);
const scholarshipNames = students
    .filter((student) => student.cgpa >= 3.75)
    .map((student) => student.name);
console.log("Scholarship Recipients:", scholarshipNames);
const studentResults = students
    .filter((student) => student.cgpa >= 3.75)
    .map((student) => {
        return {
            name: student.name,
            cgpa: student.cgpa,
            result: "Qualified"
        };
    });
console.log("Student Results:", studentResults);
const studentResults2 = students
    .filter((student)=> student.cgpa >= 3.75)
    .map((student) => {
        return {
            name: student.name,
            cgpa: student.cgpa,
            message: "Congratulations, " + student.name + "! You are eligible for scholarship."
        }
    });
console.log("Student Results 2:", studentResults2);
const topStudents = students.filter((student, index) => {
    return index < 2 && student.cgpa >= 3.75;
});
console.log("Top Students:", topStudents);