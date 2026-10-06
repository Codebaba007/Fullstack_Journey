var StudentStatus;
(function (StudentStatus) {
    StudentStatus["Active"] = "Active";
    StudentStatus["Inactive"] = "Inactive";
    StudentStatus["Graduated"] = "Graduated";
})(StudentStatus || (StudentStatus = {}));
let student = {
    id: 101,
    name: "Mehedi",
    cgpa: 3.75,
    department: "CSE",
    status: StudentStatus.Active
};
let studentResponse = {
    data: student,
    success: true
};
function displayResponse(response) {
    console.log("Success:", response.success);
    console.log("Data:", response.data);
}
displayResponse(studentResponse);
let person1 = student;
let person2 = {
    id: 201,
    name: "Mr. Rahman",
    subject: "Computer Science"
};
function displayPerson(person) {
    console.log("ID:", person.id);
    console.log("Name:", person.name);
    if ("cgpa" in person) {
        console.log("Student CGPA:", person.cgpa);
        console.log("Department:", person.department);
    }
    else {
        console.log("Teacher Subject:", person.subject);
    }
}
displayPerson(person1);
displayPerson(person2);
let update = {
    cgpa: 3.90
};
let summary = {
    id: 101,
    name: "Mehedi",
    department: "CSE"
};
let studentWithoutCGPA = {
    id: 101,
    name: "Mehedi",
    department: "CSE",
    status: StudentStatus.Active
};
export {};
