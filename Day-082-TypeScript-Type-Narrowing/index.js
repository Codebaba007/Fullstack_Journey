function processValue(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value * 2);
    }
}
processValue("hello");
processValue(25);
const student = {
    name: "Mehedi",
    studentId: 101
};
function displayPerson(person) {
    if ("studentId" in person) {
        console.log(person.studentId);
    }
    else {
        console.log(person.subject);
    }
}
const teacher = {
    name: "Rahim",
    subject: "Mathematics"
};
displayPerson(student);
displayPerson(teacher);
export {};
