export{};

interface Person {
    name: string;
    age: number;
}

interface Student extends Person {
    department: string;
    cgpa: number;
}

const student: Student = {
    name: "Mehedi",
    age: 23,
    department: "CSE",
    cgpa: 3.5
};

interface Teacher extends Student{
    subject: string;
    Salary: number;
}
const teacher: Teacher = {
    name: "John",
    age: 35,
    department: "CSE",
    cgpa: 3.8,
    subject: "Math",
    Salary: 50000
};

console.log(student.name);
console.log(student.department);
console.log(student.cgpa);