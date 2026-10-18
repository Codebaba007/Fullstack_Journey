export{}

interface Student {
    id: number;
    name: string;
    cgpa: number;
    department: string;
}
interface Teacher {
    id: number;
    name: string;
    subject: string;
}
enum StudentStatus {
    Active = "Active",
    Inactive = "Inactive",
    Graduated = "Graduated",
}
type StudentRecord = Student & {
    status: StudentStatus;
};
let student: StudentRecord = {
    id: 101,
    name: "Mehedi",
    cgpa: 3.75,
    department: "CSE",
    status: StudentStatus.Active
};
interface ApiResponse<T> {
    data: T;
    success: boolean;
}
let studentResponse: ApiResponse<StudentRecord> = {
    data: student,
    success: true
};
function displayResponse<T>(response: ApiResponse<T>): void {
    console.log("Success:", response.success);
    console.log("Data:", response.data);
}
displayResponse(studentResponse);
type Person = Student | Teacher;

let person1: Person = student;

let person2: Person = {
    id: 201,
    name: "Mr. Rahman",
    subject: "Computer Science"
};
function displayPerson(person: Person): void {
    console.log("ID:", person.id);
    console.log("Name:", person.name);

    if ("cgpa" in person) {
        console.log("Student CGPA:", person.cgpa);
        console.log("Department:", person.department);
    } else {
        console.log("Teacher Subject:", person.subject);
    }
}
displayPerson(person1);
displayPerson(person2);

type StudentUpdate = Partial<StudentRecord>;
let update: StudentUpdate = {
    cgpa: 3.90
};
type StudentSummary = Pick<StudentRecord, "id" | "name" | "department">;
let summary: StudentSummary = {
    id: 101,
    name: "Mehedi",
    department: "CSE"
};

type StudentWithoutCGPA = Omit<StudentRecord, "cgpa">;
let studentWithoutCGPA: StudentWithoutCGPA = {
    id: 101,
    name: "Mehedi",
    department: "CSE",
    status: StudentStatus.Active
};
