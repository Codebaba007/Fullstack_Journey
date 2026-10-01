"use strict";
var StudentStatus;
(function (StudentStatus) {
    StudentStatus["Active"] = "ACTIVE";
    StudentStatus["Inactive"] = "INACTIVE";
    StudentStatus["Graduated"] = "GRADUATED";
})(StudentStatus || (StudentStatus = {}));
function displayStatus(status) {
    if (status === StudentStatus.Active) {
        console.log("The student is currently enrolled.");
    }
    else if (status === StudentStatus.Inactive) {
        console.log("The student is not currently enrolled.");
    }
    else {
        console.log("The student has graduated.");
    }
}
displayStatus(StudentStatus.Active);
displayStatus(StudentStatus.Graduated);
