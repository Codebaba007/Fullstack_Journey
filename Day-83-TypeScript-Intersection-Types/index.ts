export{};

type Person = {
    name: string;
    age: number;
}

type Student = {
    studentId: number;
    department: string;
};

type employee = {
    employeeId: number;
    salary: number;
}



type CSEStudent = Person & Student;
type studentEmployee = Person & Student & employee;

const student1: CSEStudent = {
    name: "John Doe",
    age: 20,
    studentId: 12345,
    department: "Computer Science"
};
console.log(student1);

const studentEmployee1: studentEmployee = {
    name: "Jane Smith",
    age: 22,
    studentId: 67890,
    department: "Information Technology",
    employeeId: 54321,
    salary: 50000
};
console.log(studentEmployee1)