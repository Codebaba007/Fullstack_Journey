export {};
/*
let studentId: number | string;

studentId = 101;
studentId = "A101";

let studentInfo: string | number | boolean;

studentInfo = "Mehedi";
studentInfo = 23;
studentInfo = true;

*/

function displayId(id: number | string): void {
    console.log(id);
}

displayId(101);
displayId("STU101");

interface Student {
    name: string;
    id: number | string;
    department: string;
}

const student1: Student = {
    name: "Mehedi",
    id: 101,
    department: "CSE"
};

const student2: Student = {
    name: "Rahim",
    id: "STU102",
    department: "CSE"
};
console.log(student1);
console.log(student2);