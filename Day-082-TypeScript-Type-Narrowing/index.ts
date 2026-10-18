export{}

function processValue(value: string | number): void {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value * 2);
    }
}

processValue("hello");
processValue(25);
interface Student {
    name: string;
    studentId: number;
}

interface Teacher {
    name: string;
    subject: string;
}
const student: Student = {
    name: "Mehedi",
    studentId: 101
};
function displayPerson(person: Student | Teacher): void {
    if ("studentId" in person) {
        console.log(person.studentId);
    } else {
        console.log(person.subject);
    }
}
const teacher: Teacher = {
    name: "Rahim",
    subject: "Mathematics"
};

displayPerson(student);
displayPerson(teacher);