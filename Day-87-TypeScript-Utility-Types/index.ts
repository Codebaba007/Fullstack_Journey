export{};

interface Student{
    id: number;
    name: string;
    cgpa: number;
    department: string;
}
type StudentUpdate = Partial<Student>;

let studentUpdate: StudentUpdate = {
    cgpa: 3.90
};
console.log(studentUpdate);

type StudentBasicInfo = Pick<Student, "id" | "name">;
let studentBasicInfo: StudentBasicInfo = {
    id: 1,
    name: "Alice"
};
console.log(studentBasicInfo);

type StudentWithoutCGPA = Omit<Student, "cgpa">;
let studentWithoutCGPA: StudentWithoutCGPA = {
    id: 1,
    name: "Alice",
    department: "Computer Science"
};
console.log(studentWithoutCGPA);

let student: Readonly<Student> = {
    id: 101,
    name: "Mehedi",
    cgpa: 3.75,
    department: "CSE"
};

console.log("Read Only Student:", student);