var StudentStatus;
(function (StudentStatus) {
    StudentStatus["ACTIVE"] = "Active";
    StudentStatus["INACTIVE"] = "Inactive";
    StudentStatus["GRADUATED"] = "Graduated";
})(StudentStatus || (StudentStatus = {}));
let Student = {
    roll: 101,
    name: "Mehedi",
    cgpa: 3.75,
    department: "CSE",
    status: StudentStatus.ACTIVE
};
let response = {
    data: Student,
    success: true
};
function displayResponse(response) {
    console.log("Success:", response.success);
    console.log("Data:", response.data);
}
displayResponse(response);
function displayStudentId(id) {
    if (typeof id === "number") {
        console.log("Numeric ID:", id);
    }
    else {
        console.log("String ID:", id);
    }
}
displayStudentId(101);
displayStudentId("CSE-101");
export {};
