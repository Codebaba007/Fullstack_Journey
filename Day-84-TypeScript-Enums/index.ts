enum StudentStatus {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Graduated = "GRADUATED"
}

function displayStatus(status: StudentStatus): void {
    if (status === StudentStatus.Active) {
        console.log("The student is currently enrolled.");
    } else if (status === StudentStatus.Inactive) {
        console.log("The student is not currently enrolled.");
    } else {
        console.log("The student has graduated.");
    }
}

displayStatus(StudentStatus.Active);
displayStatus(StudentStatus.Graduated);